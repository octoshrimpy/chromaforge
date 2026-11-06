// Self-check for app.js's markdown table parser + roll engine.
// Run: node html_generators/test.mjs
//
// For every real generator file, exhaustively rolls every possible value on
// every die (not just random samples) and fails if any roll resolves to an
// error - catches heading/table typos across the whole reformat pass in one
// shot, without needing a browser.

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '..');
const appJsSrc = fs.readFileSync(path.join(here, 'app.js'), 'utf8');

const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(appJsSrc, sandbox, { filename: 'app.js' });

let failures = 0;
let checks = 0;

function fail(msg) {
  failures++;
  console.error(`FAIL: ${msg}`);
}

for (const gen of sandbox.GENERATORS) {
  const filePath = path.resolve(here, gen.path);
  if (!fs.existsSync(filePath)) { fail(`${gen.id}: file missing at ${filePath}`); continue; }
  const md = fs.readFileSync(filePath, 'utf8');
  const steps = sandbox.parseSteps(md);
  if (steps.length === 0) { fail(`${gen.id}: no steps parsed from ${gen.path}`); continue; }

  for (const step of steps) {
    const die = sandbox.parseDie(step.die);
    if (!die) { fail(`${gen.id}/${step.label}: unparseable die "${step.die}"`); continue; }
    const dieMax = die.count * die.sides;

    // build a plausible set of prior results for depends-steps: try every
    // possible result of the step it depends on, then check every roll value
    // against each.
    let dependsResultsToTry = [undefined];
    if (step.depends) {
      const depStep = steps.find(s => s.label === step.depends);
      const depDie = sandbox.parseDie(depStep.die);
      const depDieMax = depDie.count * depDie.sides;
      const seen = new Set();
      for (let v = depDie.count; v <= depDieMax; v++) {
        const r = sandbox.resolveStep(md, depStep, v, {});
        if (r.result) seen.add(r.result);
      }
      dependsResultsToTry = [...seen];
      if (dependsResultsToTry.length === 0) { fail(`${gen.id}/${step.label}: depends on "${step.depends}" but it produced no results`); continue; }
    }

    for (const depResult of dependsResultsToTry) {
      const priorResults = step.depends ? { [step.depends]: depResult } : {};
      for (let roll = die.count; roll <= dieMax; roll++) {
        checks++;
        const resolved = sandbox.resolveStep(md, step, roll, priorResults);
        if (resolved.error) {
          fail(`${gen.id}/${step.label}: roll ${roll}${depResult ? ` (depends=${depResult})` : ''} -> ${resolved.error}`);
        }
      }
    }
  }
}

// a few specific known mappings, so a passing exhaustive sweep can't hide a
// systematically-wrong-but-still-defined table
const worldTileMd = fs.readFileSync(path.join(repoRoot, 'generators/world_tile/simple.md'), 'utf8');
const colorSteps = sandbox.parseSteps(worldTileMd);
const colorStep = colorSteps.find(s => s.label === 'color');
const red = sandbox.resolveStep(worldTileMd, colorStep, 5, {});
if (red.result !== 'red') fail(`world_tile color roll=5 expected "red", got "${red.result}"`);

// monster now rolls a real Katharra creature (no houses — creatures are biological)
const monsterMd = fs.readFileSync(path.join(repoRoot, 'generators/monster/readme.md'), 'utf8');
const KATHARRA_CREATURES = ['bramilla', 'bumbleboar', 'cairnbeak', 'cindral', 'denonia', 'drudge',
  'fezzle', 'gnomad', 'grubbler', 'knibblet', 'krailgoat', 'lodelark', 'marcove horn bend', 'midgemire',
  'salamandarin', 'shirrak beetle', 'skithfish', 'spindlebeast', 'stranglemaw', 'tallowtail', 'thritch',
  'thrumble', 'timberback', 'vuun', 'whiffle', 'whimblight', 'whimwick', 'whirrel', 'wogget'];
const creatureSet = new Set(KATHARRA_CREATURES);
{
  const mdMapM = {};
  for (const g of sandbox.GENERATORS) mdMapM[g.id] = fs.readFileSync(path.resolve(here, g.path), 'utf8');
  let sawCreature = false;
  for (let i = 0; i < 100; i++) {
    const c = sandbox.runGenerator('monster', mdMapM).find(r => r.label === 'creature');
    if (!c) { fail('monster: no creature step'); break; }
    if (!creatureSet.has(c.result)) fail(`monster: creature "${c.result}" not in the Katharra roster`);
    sawCreature = true;
  }
  if (!sawCreature) fail('monster: creature never rolled');
}

// ---- session state model ----
{
  const S = sandbox;
  const state = S.createState();
  const staging = S.findZone(state, S.STAGING_ID);
  if (!staging || !staging.fixed) fail('createState: no fixed Staging zone');

  const zone = S.addZone(state, 'NPCs');
  const card = S.addCard(state, 'npc', 'NPC', [{ label: 'x', result: 'friendly' }], S.STAGING_ID);
  if (staging.cards.length !== 1) fail('addCard: card did not land in Staging');

  S.moveCard(state, card.id, zone.id);
  if (staging.cards.length !== 0 || zone.cards.length !== 1) fail('moveCard: card not moved to zone');

  // deleting a zone must not lose its cards - they fall back to Staging
  S.deleteZone(state, zone.id);
  if (S.findZone(state, zone.id)) fail('deleteZone: zone still present');
  if (staging.cards.length !== 1) fail('deleteZone: card not returned to Staging');

  // Staging is fixed and must survive a delete attempt
  S.deleteZone(state, S.STAGING_ID);
  if (!S.findZone(state, S.STAGING_ID)) fail('deleteZone: removed the fixed Staging zone');

  // priorResults feed step rerolls of dependent tables
  const prior = S.priorResultsFromRolls([{ label: 'color', result: 'red' }, { label: 'biome', result: 'desert' }]);
  if (prior.color !== 'red' || prior.biome !== 'desert') fail('priorResultsFromRolls: wrong mapping');

  // updateCardStep replaces the matching step in place
  const c2 = S.addCard(state, 'world_tile', 'World Tile', [{ label: 'color', result: 'red' }], S.STAGING_ID);
  S.updateCardStep(state, c2.id, { label: 'color', result: 'blue' });
  if (S.findCard(state, c2.id).card.rolls[0].result !== 'blue') fail('updateCardStep: step not replaced');

  // localStorage round-trip: JSON survives and normalizes back to a usable state
  const restored = S.normalizeState(JSON.parse(JSON.stringify(state)));
  if (S.findZone(restored, S.STAGING_ID).cards.length !== staging.cards.length) fail('serialize round-trip: staging cards lost');

  // normalizeState repairs junk saved state
  const repaired = S.normalizeState({ zones: [{ id: 'x', name: 'orphan' }] });
  if (!S.findZone(repaired, S.STAGING_ID)) fail('normalizeState: did not inject Staging into junk state');
}

// ---- directives + composition ----
{
  const S = sandbox;

  // build the md map the browser preloads, so runGenerator can compose
  const mdMap = {};
  for (const gen of S.GENERATORS) mdMap[gen.id] = fs.readFileSync(path.resolve(here, gen.path), 'utf8');

  // {{pick:}} always resolves to exactly one of its options, no leftover braces
  const pick = S.resolveDirectives('{{pick: alpha | beta | gamma}}', null, 0);
  if (!['alpha', 'beta', 'gamma'].includes(pick.text)) fail(`pick: got "${pick.text}"`);
  if (/\{\{|\}\}/.test(pick.text)) fail('pick: left directive braces behind');

  // every {{gen:X}} in every file must name a real generator
  for (const gen of S.GENERATORS) {
    for (const m of mdMap[gen.id].matchAll(/\{\{\s*gen:\s*([a-z_]+)/gi)) {
      if (!S.GENERATORS.find(g => g.id === m[1])) fail(`${gen.id}: {{gen:${m[1]}}} names no generator`);
    }
    // every {{pick:}} has at least one option
    for (const m of mdMap[gen.id].matchAll(/\{\{\s*pick:\s*([^}]*)\}\}/gi)) {
      if (!m[1].split('|').map(s => s.trim()).filter(Boolean).length) fail(`${gen.id}: empty {{pick:}}`);
    }
  }

  // JIT composition: a World Tile's content children start UNEXPANDED (not
  // pre-rolled). Expanding one rolls it on demand; expandAll fully realizes the
  // tree and terminates (depth cap) with no unresolved directives left.
  let sawChild = false, sawNpcConcrete = false;
  for (let i = 0; i < 200; i++) {
    const tile = S.runGenerator('world_tile', mdMap);
    for (const roll of tile) {
      for (const child of roll.children || []) {
        sawChild = true;
        if (child.expanded || child.rolls) fail('JIT: child was pre-rolled instead of pending');
        S.expandChild(child, mdMap);
        if (!child.expanded || !Array.isArray(child.rolls) || child.rolls.length === 0) fail('expandChild: did not roll');
        if (/\{\{/.test(JSON.stringify(child.rolls))) fail('expandChild: unresolved directive');
      }
    }
    S.expandAll(tile, mdMap); // must terminate (depth cap) and leave no unresolved directives
    if (/\{\{/.test(JSON.stringify(tile))) fail('expandAll: unresolved directive after full expansion');
  }
  if (!sawChild) fail('compose: 200 world tiles produced no nested content');

  // NPC race + class resolve to concrete single values (no directive, no bracket list)
  for (let i = 0; i < 100; i++) {
    const rolls = S.runGenerator('npc', mdMap);
    const race = rolls.find(r => r.label === 'race');
    if (/\{\{/.test(race.result)) fail('npc: race left a directive');
    if (race.result.includes('|')) fail('npc: race still a raw option list');
    if (race.result && !race.result.includes(',') && race.result.split(' ').length <= 4) sawNpcConcrete = true;
  }
  if (!sawNpcConcrete) fail('npc: race never resolved to a concrete-looking value');

  // repeat step: content_count drives how many content rolls appear
  const wt = S.parseSteps(mdMap.world_tile).find(s => s.label === 'content');
  if (wt.repeatOf !== 'content_count') fail(`repeat: content.repeatOf = "${wt.repeatOf}"`);
}

// ---- canon consistency: generators must not drift from the compendium ----
// These guard the fount migration + race reconciliation against future edits.
{
  const S = sandbox;
  const norm = s => s.toLowerCase().replace(/\([^)]*\)/g, '').replace(/\\/g, '').trim(); // drop "(earth/...)" and md \| escapes

  // canonical race names = column 1 of the compendium/races table
  const racesMd = fs.readFileSync(path.join(repoRoot, 'compendium/races/readme.md'), 'utf8');
  const canonRaces = new Set();
  for (const line of racesMd.split('\n')) {
    const m = line.match(/^\|\s*([a-z][a-z '\/-]+?)\s*\|/i);
    if (m && !/^race$/i.test(m[1].trim()) && !/^-+$/.test(m[1].trim())) canonRaces.add(norm(m[1]));
  }
  if (canonRaces.size < 30) fail(`canon: only parsed ${canonRaces.size} races from compendium (expected ~36)`);

  // every race a generator can emit must exist in the compendium
  for (const genId of ['player', 'npc']) {
    const md = fs.readFileSync(path.resolve(here, S.GENERATORS.find(g => g.id === genId).path), 'utf8');
    const raceSection = md.split('###').find(s => /^\s*race/.test(s)) || '';
    for (const m of raceSection.matchAll(/\{\{\s*pick:\s*([^}]*)\}\}/gi)) {
      for (const opt of m[1].split('|').map(o => o.trim()).filter(Boolean)) {
        if (!canonRaces.has(norm(opt))) fail(`${genId}: race "${opt}" not in compendium/races`);
      }
    }
  }

  // no generator may reference a non-canonical / retired house code (CAO, RAN, ARC, STL, STR)
  for (const gen of S.GENERATORS) {
    const md = fs.readFileSync(path.resolve(here, gen.path), 'utf8');
    for (const bad of ['CAO', 'RAN', 'ARC', 'STL', 'STR']) {
      if (new RegExp(`\\b${bad}\\b`).test(md)) fail(`${gen.id}: uses retired house code ${bad}`);
    }
  }

  // each house has exactly one canonical class and symbol everywhere active
  const canon = {
    'FRT - Fortitude': ['Builder', '△'],
    'CHG - Change': ['Pathfinder', 'ϟ'],
    'KNO - Knowledge': ['Medic', '∵'],
    'NTG - Integrity': ['Warden', 'ᛄ'],
    'CHR - Charm': ['Artisan', '⌘'],
  };
  const classesMd = fs.readFileSync(path.join(repoRoot, 'compendium/classes/readme.md'), 'utf8');
  const indexHtml = fs.readFileSync(path.join(repoRoot, 'html_generators/index.html'), 'utf8');
  for (const [house, [className, symbol]] of Object.entries(canon)) {
    if (!classesMd.includes(`| ${className} | \`${symbol}\` |`)) fail(`canon: ${className}/${symbol} missing from classes compendium`);
    if (!indexHtml.includes(`symbol:'${symbol}'`)) fail(`canon: ${symbol} missing from generator UI`);
    for (const genId of ['player', 'npc']) {
      const md = fs.readFileSync(path.resolve(here, S.GENERATORS.find(g => g.id === genId).path), 'utf8');
      const classStep = S.parseSteps(md).find(s => s.label === 'class');
      const resolved = S.resolveStep(md, classStep, 1, { house });
      if (resolved.result !== className) fail(`${genId}: ${house} expected ${className}, got "${resolved.result}"`);
    }
  }
}

console.log(`${checks} rolls + state-model + directive + canon-consistency checks, ${failures} failure(s).`);
process.exit(failures ? 1 : 0);
