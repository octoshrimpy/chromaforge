// Reads the "## steps" table + per-step tables out of a generators/*/readme.md
// file (see _meta/styleguide.md "Generator tables" for the exact convention)
// and rolls dice against them. No markdown library: we only ever need to pull
// pipe-tables out of known headings, not render arbitrary markdown.

var GENERATORS = [
  {
    id: "world_tile",
    title: "World Tile",
    path: "../generators/world_tile/simple.md",
  },
  {
    id: "building",
    title: "Town Building",
    path: "../generators/building/readme.md",
  },
  { id: "dungeon", title: "Dungeon", path: "../generators/dungeon/readme.md" },
  {
    id: "landmark",
    title: "Landmark",
    path: "../generators/landmark/readme.md",
  },
  { id: "monster", title: "Monster", path: "../generators/monster/readme.md" },
  { id: "npc", title: "NPC", path: "../generators/npc/readme.md" },
  { id: "player", title: "Player", path: "../generators/player/readme.md" },
  { id: "town", title: "Town", path: "../generators/town/readme.md" },
  {
    id: "encounter",
    title: "Encounter",
    path: "../generators/encounter/readme.md",
  },
  { id: "group", title: "Group", path: "../generators/group/readme.md" },
  { id: "quest", title: "Quest", path: "../generators/quest/readme.md" },
  { id: "shop", title: "Shop Inventory", path: "../generators/shop/readme.md" },
  { id: "name", title: "Place Name", path: "../generators/name/readme.md" },
];

// result tables link to each other (world_tile's content -> landmark/town/
// dungeon, shop's item -> landmark) using repo-root-absolute hrefs like
// "/generators/landmark/readme.md", while GENERATORS.path is relative to
// html_generators/ - normalize both to "generators/x/y.md" to match them up.
function normalizeGenPath(p) {
  return p.replace(/^\.\.\//, "").replace(/^\//, "");
}

function findGeneratorForHref(href) {
  const norm = normalizeGenPath(href);
  return GENERATORS.find((g) => normalizeGenPath(g.path) === norm);
}

// strips markdown emphasis (`code`, **bold**) - not underscores, those are
// legitimate characters in step labels like `room_content`
function stripFormat(s) {
  return (s || "").replace(/[`*]/g, "").trim();
}

function isTableRow(line) {
  return /^\s*\|.*\|\s*$/.test(line);
}

function isSeparatorRow(cells) {
  return cells.every((c) => /^:?-+:?$/.test(c.trim()));
}

function splitRow(line) {
  let t = line.trim();
  if (t.startsWith("|")) t = t.slice(1);
  if (t.endsWith("|")) t = t.slice(0, -1);
  // split on unescaped pipes only, then unescape \| -> | so cells can hold
  // literal pipes (e.g. {{pick: a \| b \| c}})
  return t.split(/(?<!\\)\|/).map((c) => c.replace(/\\\|/g, "|").trim());
}

// Returns the raw text between a heading matching `heading` (any level) and
// the next heading of the same or shallower level.
function findSection(md, heading) {
  const lines = md.split("\n");
  const headingRe = /^(#{1,6})\s+(.*)$/;
  let startIdx = -1,
    startLevel = 0;
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(headingRe);
    if (m && stripFormat(m[2]).toLowerCase() === heading.toLowerCase()) {
      startIdx = i;
      startLevel = m[1].length;
      break;
    }
  }
  if (startIdx === -1) return null;
  let endIdx = lines.length;
  for (let i = startIdx + 1; i < lines.length; i++) {
    const m = lines[i].match(headingRe);
    if (m && m[1].length <= startLevel) {
      endIdx = i;
      break;
    }
  }
  return lines.slice(startIdx + 1, endIdx).join("\n");
}

function parseFirstTable(sectionText) {
  const lines = sectionText.split("\n");
  let start = -1;
  for (let i = 0; i < lines.length; i++) {
    if (isTableRow(lines[i])) {
      start = i;
      break;
    }
  }
  if (start === -1) return null;
  const rawRows = [];
  for (let i = start; i < lines.length; i++) {
    if (!isTableRow(lines[i])) break;
    rawRows.push(splitRow(lines[i]));
  }
  if (rawRows.length < 2 || !isSeparatorRow(rawRows[1])) return null;
  return { header: rawRows[0], rows: rawRows.slice(2) };
}

function parseRanges(cellText) {
  const parts = stripFormat(cellText)
    .split(",")
    .map((p) => p.trim())
    .filter(Boolean);
  const ranges = [];
  for (const part of parts) {
    let m = part.match(/^(\d+)\s*-\s*(\d+)$/);
    if (m) {
      ranges.push([parseInt(m[1], 10), parseInt(m[2], 10)]);
      continue;
    }
    m = part.match(/^(\d+)$/);
    if (m) {
      const v = parseInt(m[1], 10);
      ranges.push([v, v]);
    }
  }
  return ranges;
}

function matchesRoll(cellText, rollValue) {
  return parseRanges(cellText).some(
    ([lo, hi]) => rollValue >= lo && rollValue <= hi,
  );
}

function parseDie(dieText) {
  const m = stripFormat(dieText).match(/^(\d+)d(\d+)$/i);
  if (!m) return null;
  return { count: parseInt(m[1], 10), sides: parseInt(m[2], 10) };
}

function rollDice(die) {
  let total = 0;
  for (let i = 0; i < die.count; i++)
    total += 1 + Math.floor(Math.random() * die.sides);
  return total;
}

function parseSteps(md) {
  const section = findSection(md, "steps");
  if (!section) return [];
  const table = parseFirstTable(section);
  if (!table) return [];
  const col = (name) => table.header.findIndex((h) => h.toLowerCase() === name);
  const dieCol = col("die"),
    labelCol = col("label"),
    dependsCol = col("depends");
  return table.rows
    .map((r) => {
      const dieRaw = stripFormat(r[dieCol]);
      // "1d100 ×content_count" = roll this step once per the number an earlier
      // step (content_count) produced
      const rep = dieRaw.match(/^(\d+d\d+)\s*[×x*]\s*(\w+)$/i);
      return {
        die: rep ? rep[1] : dieRaw,
        repeatOf: rep ? rep[2] : null,
        label: stripFormat(r[labelCol]),
        depends: dependsCol >= 0 ? stripFormat(r[dependsCol] || "") : "",
      };
    })
    .filter((s) => s.label);
}

function resolveStep(md, step, rollValue, priorResults) {
  const section = findSection(md, step.label);
  if (!section) return { error: `no "${step.label}" section found` };
  const table = parseFirstTable(section);
  if (!table) return { error: `no table under "${step.label}"` };

  const isRollTable =
    table.header[0] && table.header[0].toLowerCase() === "roll";

  if (isRollTable) {
    const row = table.rows.find((r) => matchesRoll(r[0], rollValue));
    return row
      ? { result: stripFormat(row[1]) }
      : { error: `roll ${rollValue} matched nothing` };
  }

  const dependsResult = priorResults[step.depends];
  if (dependsResult === undefined)
    return { error: `depends on "${step.depends}", no result yet` };
  const key = stripFormat(dependsResult).toLowerCase();
  const row = table.rows.find((r) => stripFormat(r[0]).toLowerCase() === key);
  if (!row) return { error: `no row for "${dependsResult}"` };
  for (let c = 1; c < table.header.length; c++) {
    if (matchesRoll(table.header[c], rollValue))
      return { result: stripFormat(row[c]) };
  }
  return { error: `roll ${rollValue} matched no column` };
}

function rollStep(md, step, priorResults) {
  const die = parseDie(step.die);
  if (!die)
    return { label: step.label, die: step.die, error: `bad die "${step.die}"` };
  const rollValue = rollDice(die);
  const resolved = resolveStep(md, step, rollValue, priorResults);
  return {
    label: step.label,
    die: step.die,
    rollValue,
    result: resolved.result,
    error: resolved.error,
  };
}

async function fetchGenerator(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`failed to fetch ${path}: ${res.status}`);
  return res.text();
}

// ---- directives + composition ----
// A resolved result cell may contain directives the engine expands:
//   {{pick: a | b | c}}  -> replaced with one option, chosen uniformly
//   {{gen: id}}          -> rolls generator `id` inline and nests its result
// This is what turns "pick one race / next color's class" instructions into
// concrete cards, and lets a World Tile roll a whole populated place.

var MAX_DEPTH = 3; // ponytail: caps "generate all the way down" recursion; real chains are 1-2 deep

function parseCount(text) {
  const m = String(text ?? "").match(/-?\d+/);
  return m ? parseInt(m[0], 10) : 0;
}

// Resolve directives in a result cell (JIT / lazy):
//   {{pick: a | b | c}} -> replaced now with one option
//   {{gen: id}}         -> recorded as an UNEXPANDED child ref, NOT rolled yet
// The child is only rolled when the user drills in (expandChild), so a card
// shows a summary until asked to generate deeper. Returns { text, children }.
function resolveDirectives(text) {
  const children = [];
  let out = String(text ?? "");
  out = out.replace(/\{\{\s*pick:\s*([^}]*)\}\}/gi, (_, list) => {
    const opts = list
      .split("|")
      .map((s) => s.trim())
      .filter(Boolean);
    return opts.length ? opts[Math.floor(Math.random() * opts.length)] : "";
  });
  out = out.replace(
    /\{\{\s*gen:\s*([a-z_]+)(?:\s*[×x*]\s*(\d+))?\s*\}\}/gi,
    (_, id, n) => {
      const count = n ? parseInt(n, 10) : 1;
      const gen =
        typeof GENERATORS !== "undefined"
          ? GENERATORS.find((g) => g.id === id)
          : null;
      if (!gen) return id;
      for (let i = 0; i < count; i++)
        children.push({
          id: uid(),
          genId: id,
          genTitle: gen.title,
          expanded: false,
          rolls: null,
        });
      return gen.title;
    },
  );
  return { text: out.replace(/\s{2,}/g, " ").trim(), children };
}

// core roller — produces one generator's summary (L0). Composition is lazy:
// {{gen}} cells become unexpanded child refs, not nested rolls.
function rollGeneratorRolls(md) {
  const steps = parseSteps(md);
  const results = {};
  const rolls = [];
  const finish = (rolled, label) => {
    const res = resolveDirectives(rolled.result);
    rolled.result = res.text;
    if (res.children.length) rolled.children = res.children;
    if (label) rolled.label = label;
    rolls.push(rolled);
  };
  for (const step of steps) {
    if (step.repeatOf) {
      const k = parseCount(results[step.repeatOf]);
      if (k <= 0) {
        rolls.push({
          label: step.label,
          die: step.die,
          rollValue: null,
          result: "(none)",
        });
        results[step.label] = "(none)";
        continue;
      }
      for (let i = 1; i <= k; i++)
        finish(
          rollStep(md, step, results),
          k > 1 ? `${step.label} ${i}` : step.label,
        );
      results[step.label] = "rolled";
    } else {
      const rolled = rollStep(md, step, results);
      finish(rolled);
      results[step.label] = rolled.result;
    }
  }
  return rolls;
}

function runGenerator(genId, mdMap) {
  return rollGeneratorRolls(mdMap[genId]);
}

// locate a composed child anywhere in a card's roll tree by its id
function findChildById(rolls, id) {
  for (const r of rolls || []) {
    for (const c of r.children || []) {
      if (c.id === id) return c;
      const deep = findChildById(c.rolls, id);
      if (deep) return deep;
    }
  }
  return null;
}

// drill in: roll a pending child generator on demand and cache it (it sticks)
function expandChild(child, mdMap) {
  if (child.expanded) return child;
  child.rolls = runGenerator(child.genId, mdMap);
  child.expanded = true;
  return child;
}

// "generate all the way down": recursively expand every pending child, capped
function expandAll(rolls, mdMap, depth) {
  depth = depth || 0;
  if (depth >= MAX_DEPTH) return;
  for (const r of rolls || []) {
    for (const child of r.children || []) {
      expandChild(child, mdMap);
      expandAll(child.rolls, mdMap, depth + 1);
    }
  }
}

// alias kept for older callers/tests
function runAllSteps(md) {
  return rollGeneratorRolls(md);
}

// ---- session state model ----
// A "card" is one generator's rolled output; "zones" are named buckets the DM
// sorts cards into (NPCs, Landmarks, ...) for use later. This part is pure and
// DOM-free on purpose so the move/reroll/persist logic is node-testable; the
// rendering, drag-drop, and localStorage wiring live in index.html.

var STAGING_ID = "staging";

function uid() {
  // ponytail: good enough for card/zone ids in a single-tab tool; swap for
  // crypto.randomUUID() only if this ever becomes multi-writer
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function createState() {
  return {
    zones: [
      { id: STAGING_ID, name: "Staging", fixed: true, cards: [] },
      { id: uid(), name: "Session prep", fixed: false, cards: [] },
    ],
  };
}

// tolerate older/garbled saved state: guarantee exactly one fixed Staging zone
// at the front so rolls always have somewhere to land
function normalizeState(state) {
  if (!state || !Array.isArray(state.zones)) return createState();
  let staging = state.zones.find((z) => z.id === STAGING_ID);
  if (!staging)
    staging = { id: STAGING_ID, name: "Staging", fixed: true, cards: [] };
  staging.fixed = true;
  const rest = state.zones.filter((z) => z.id !== STAGING_ID);
  for (const z of rest) {
    z.fixed = false;
    if (!Array.isArray(z.cards)) z.cards = [];
  }
  if (!Array.isArray(staging.cards)) staging.cards = [];
  return { zones: [staging, ...rest] };
}

function findZone(state, zoneId) {
  return state.zones.find((z) => z.id === zoneId);
}

function findCard(state, cardId) {
  for (const zone of state.zones) {
    const idx = zone.cards.findIndex((c) => c.id === cardId);
    if (idx !== -1) return { zone, card: zone.cards[idx], idx };
  }
  return null;
}

function addCard(state, genId, genTitle, rolls, zoneId) {
  const zone = findZone(state, zoneId) || findZone(state, STAGING_ID);
  const card = { id: uid(), genId, genTitle, rolls };
  zone.cards.unshift(card); // newest first
  return card;
}

function moveCard(state, cardId, toZoneId) {
  const found = findCard(state, cardId);
  const toZone = findZone(state, toZoneId);
  if (!found || !toZone || found.zone === toZone) return;
  found.zone.cards.splice(found.idx, 1);
  toZone.cards.push(found.card);
}

function discardCard(state, cardId) {
  const found = findCard(state, cardId);
  if (found) found.zone.cards.splice(found.idx, 1);
}

function replaceCardRolls(state, cardId, rolls) {
  const found = findCard(state, cardId);
  if (found) found.card.rolls = rolls;
}

function updateCardStep(state, cardId, newRolled) {
  const found = findCard(state, cardId);
  if (!found) return;
  const i = found.card.rolls.findIndex((r) => r.label === newRolled.label);
  if (i !== -1) found.card.rolls[i] = newRolled;
}

function addZone(state, name) {
  const zone = { id: uid(), name: name || "New zone", fixed: false, cards: [] };
  state.zones.push(zone);
  return zone;
}

function renameZone(state, zoneId, name) {
  const zone = findZone(state, zoneId);
  if (zone && !zone.fixed) zone.name = name;
}

function deleteZone(state, zoneId) {
  const zone = findZone(state, zoneId);
  if (!zone || zone.fixed) return;
  findZone(state, STAGING_ID).cards.push(...zone.cards); // don't lose content
  state.zones = state.zones.filter((z) => z.id !== zoneId);
}

function priorResultsFromRolls(rolls) {
  const out = {};
  for (const r of rolls) out[r.label] = r.result;
  return out;
}
