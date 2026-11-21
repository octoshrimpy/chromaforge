"""Score D&D 5e SRD, Pathfinder 2e and Cairn 2e spells on attack/defense/utility (0-3)
and inject them into spell-space.html between the /*EXT*/ markers.

Sources (fetch into SRC first):
  SRC/5e/spells.json        https://raw.githubusercontent.com/5e-bits/5e-database/main/src/2014/en/5e-SRD-Spells.json
  SRC/pf2e/                 sparse clone of https://github.com/foundryvtt/pf2e (packs/pf2e/spells/spells)
  SRC/cairn/spellbooks.md   https://raw.githubusercontent.com/yochaigal/cairn/main/second-edition/wardens-guide/spellbooks.md

Usage: python3 spell-space-data.py SRC spell-space.html [more.html ...]
"""
import glob, html, json, re, sys

# ponytail: keyword scoring, a rough pass by design; hand-tune the outliers that matter
CONTROL = r"paralyz|stunn|restrain|charm|frighten|blind|incapacitat|slowed|immobiliz|grab|prone|confus|flee|petrif|banish|sleep|unconscious|obeys?|command|dominat|hold (person|monster)|deafen|stupefied|dazzled|clumsy|enfeebled|drained|sickened|doomed"
HEAL = r"regain[s]? \w* ?hit points|restore[sd]? \d|heal|cure|revive|raise dead|resurrect|regenerat"
PROTECT = r"\bAC\b|armor class|resistan|temporary hit points|\bward|protect|immun|shield|sanctuary|status bonus to (AC|saving)|bonus to (AC|saving)|cover|invulnerab|absorb|reduce the damage|negate"
UTIL = r"teleport|detect|scry|divin|illusion|invisib|fly|flight|speed|language|communicat|telepath|create|conjure|light|darkness|disguise|shape|wall|terrain|move|climb|swim|breathe|locate|sense|see |hear|know|learn|object|plant|weather|transform|polymorph|door|lock|plane|travel|message|memory|food|water"
DAMAGE = r"\d+d\d+ \w* ?damage|takes? \w* ?damage|deals? \w* ?damage|\bdamage\b|\bharm|kill|destroy|burn|explod|strike"
AREA = r"\bcone\b|\bline\b|\bsphere\b|\bcube\b|\bcylinder\b|burst|emanation|radius|all (nearby )?creatures|each creature|every creature"


def score(text, *, dmg=False, heal=False, area=False, school=None):
    t = re.sub(r"(can't|cannot|can not|doesn't|don't) regain hit points", "", text.lower())
    hit = lambda pat: len(re.findall(pat, t, re.I))
    kinds = lambda pat: len({m.group(0) for m in re.finditer(pat, t, re.I)})
    a = d = u = 0
    if dmg or hit(DAMAGE):
        a = 3 if (area or hit(AREA)) else 2
    if hit(CONTROL):
        a = min(3, a + 1) if a else 2
    if heal or hit(HEAL):
        d = 3
    elif hit(PROTECT):
        d = 3 if kinds(PROTECT) >= 3 else 2
    if re.search(r"summon|conjure (a|an|minor|animals|elemental)|animate dead", t):
        a, d = max(a, 1), max(d, 1)
    u = min(3, kinds(UTIL) // 3 + (1 if school in ("divination", "illusion", "transmutation", "conjuration") else 0))
    if not (a or d):
        u = 3 if kinds(UTIL) >= 3 else 2
    if not (a or d or u):
        u = 1
    return a, d, u


def blurb(text, n=150):
    s = re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>|@\w+\[[^\]]*\](\{([^}]*)\})?", lambda m: m.group(2) or "", text))).strip()
    s = re.split(r"(?<=[.!?]) ", s)[0]
    return s if len(s) <= n else s[: n - 1].rsplit(" ", 1)[0] + "…"


def tier(lvl, cantrip, top):  # normalize to Chromaforge's 0-3
    if cantrip:
        return 0
    return 1 if lvl <= 3 else 2 if lvl <= (6 if top == 9 else 7) else 3


def dnd(src):
    out = []
    for s in json.load(open(f"{src}/5e/spells.json")):
        text = " ".join(s["desc"])
        lvl = s["level"]
        a, d, u = score(text, dmg="damage" in s, heal="heal_at_slot_level" in s, area="area_of_effect" in s, school=s["school"]["index"])
        out.append([s["name"], tier(lvl, lvl == 0, 9), lvl, a, d, u, blurb(text)])
    return out


def pf2e(src):
    out = []
    for f in sorted(glob.glob(f"{src}/pf2e/packs/pf2e/spells/spells/**/*.json", recursive=True)):
        j = json.load(open(f))
        s = j["system"]
        if not isinstance(s.get("level"), dict):
            continue
        traits = s["traits"]["value"]
        text = s["description"]["value"].split("<hr")[0]
        dmg = any("healing" not in (v.get("kinds") or []) for v in (s.get("damage") or {}).values())
        heal = "healing" in traits or any("healing" in (v.get("kinds") or []) for v in (s.get("damage") or {}).values())
        lvl = s["level"]["value"]
        cantrip = "cantrip" in traits
        a, d, u = score(text, dmg=dmg and not heal, heal=heal, area=bool(s.get("area")))
        out.append([j["name"], tier(lvl, cantrip, 10), 0 if cantrip else lvl, a, d, u, blurb(text)])
    return out


def cairn(src):
    out = []
    for m in re.finditer(r"^\|\s*\*\*\d+\*\*\s*\|\s*\*\*(.+?)\*\*\s*\|(.+?)\|\s*$", open(f"{src}/cairn/spellbooks.md").read(), re.M):
        name, desc = m.group(1).strip(), re.sub(r"_.*?_", "", m.group(2)).strip()  # drop italic flavor text
        a, d, u = score(desc)
        out.append([name, 1, None, a, d, u, desc])
    return out


if __name__ == "__main__":
    src, *pages = sys.argv[1:]
    data = {"dnd": dnd(src), "pf": pf2e(src), "cairn": cairn(src)}
    print({k: len(v) for k, v in data.items()}, file=sys.stderr)
    blob = "/*EXT*/const EXT=" + json.dumps(data, ensure_ascii=False, separators=(",", ":")) + ";/*END*/"
    for p in pages:
        s = open(p).read()
        s, n = re.subn(r"/\*EXT\*/.*?/\*END\*/", lambda _: blob, s, flags=re.S)
        assert n == 1, f"no /*EXT*/ marker in {p}"
        open(p, "w").write(s)
