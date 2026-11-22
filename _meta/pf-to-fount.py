"""Convert Pathfinder 2e spells into Fount-system recipes (compendium/spell-components.md)
and compare the recipe's base cost with the spell's Pathfinder rank.

Usage: python3 -I pf-to-fount.py SRC [out.csv]    (SRC as in spell-space-data.py)
"""
import csv, glob, json, re, statistics, sys
from collections import Counter, defaultdict

# ponytail: keyword recipe guesser, a rough pass; read the outlier lists, not single rows
EFFECTS = {  # Effect: (Fount, regex over traits + text)
    "Ward": ("S", r"\bAC\b|armor class|resistan|immun|\bward|protect|shield|barrier|wall of|sanctuary"),
    "Hold": ("S", r"immobiliz|restrain|grabbed|paralyz|can't move|cannot move|slowed|\block|seal|imprison|prevent|bound\b|banish"),
    "Mark": ("S", r"alarm|glyph|\brune|aware (of|when)|notif|trigger(s|ed)? when|\bmark"),
    "Proof": ("O", r"counteract|dispel|unlock|\bopen|solve|puzzle|end (one|a) (spell|effect)|remove (a|one|the) (curse|condition)"),
    "Sense": ("O", r"detection|revelation|scrying|prediction|divination|detect|locate|\bsense|\blearn|\bknow|see invisible|reveal|identify|clairvoy|telepath|language|speak with"),
    "Confound": ("O", r"mental damage|stupefied|confused|\bconfus|forget|memory|\bmind\b|illusion|disbelie"),
    "Swap": ("Z", r"teleport|polymorph|\bmorph|transform|swap|exchange|turn into|take the form|battle form|change (its|your) shape|\bbecome"),
    "Spark": ("Z", r"\bfire\b|cold|electricity|acid|sonic|force|bludgeoning|piercing|slashing|explo|lightning|shatter|blast"),
    "Kindle": ("Z", r"\brage|fury|frenz|reckless|status bonus to (attack|damage)|anger|passion|daring"),
    "Dread": ("V", r"frightened|\bfear|terror|\bpain|anguish|despair|horror|dread"),
    "Draw": ("V", r"fascinated|\bcharm|attract|attention|\bcalm|suggestion|befriend|lure|\bdistract|compel|command"),
    "Tie": ("V", r"\blink|share[sd]? |\bbond|split the damage|transfer|redirect"),
    "Hearten": ("D", r"temporary hit points|status bonus to (saving|saves|fortitude|will|checks)|courage|fatigue|stamina|\bheroism|bolster"),
    "Mend": ("D", r"healing|\bheal|regain|restore|regrow|repair|revive|cure|vitality"),
    "Steady": ("D", r"silence|\bquiet|stabiliz|\broot|vines?|entangl|plant|\bearth|stone|brace|steady|anchor"),
}
SEVERE = r"paralyz|petrif|unconscious|\bdies\b|\bslain|instantly (die|killed)|dominat|controlled|incapacitation|plane shift|banish"
UNBUILDABLE = r"\bsummon|create[sd]? (a|an)\b|conjur|\bfly\b|flight|invisib|resurrect|raise dead|weather|demiplane|plane\b|wish|miracle"


def avg(formula):
    f = (formula or "").replace(" ", "")
    if f.isdigit():
        return int(f)
    m = re.fullmatch(r"(\d+)d(\d+)(?:\+(\d+))?", f)
    return int(m[1]) * (int(m[2]) + 1) / 2 + int(m[3] or 0) if m else 0


def feet(r):
    r = (r or "").lower()
    if any(w in r for w in ("mile", "planetary", "unlimited")):
        return 9999
    m = re.search(r"(\d+)\s*f", r)
    return int(m[1]) if m else 0


def dur_cost(d):
    d = (d or "").lower()
    if re.search(r"8 hours|12 hours|24 hours|\bday|daily|unlimited|permanent|week|month|year", d):
        return 2, "until long rest"
    if re.search(r"10 minutes|1 hour|\bhour", d):
        return 1, "until next rest"
    return 0, ""


def recipe(j):
    s = j["system"]
    traits = s["traits"]["value"]
    text = re.sub(r"<[^>]+>|@\w+\[[^\]]*\]", " ", s["description"]["value"].split("<hr")[0])
    blob = (" ".join(traits) + " " + j["name"] + " " + text).lower()
    dmg = [v for v in (s.get("damage") or {}).values()]
    heal = "healing" in traits or any("healing" in (v.get("kinds") or []) for v in dmg)
    harm = [v for v in dmg if "healing" not in (v.get("kinds") or [])]
    score = Counter({e: len(re.findall(p, blob)) for e, (_, p) in EFFECTS.items()})
    for v in harm:  # typed damage picks its Effect strongly
        score["Confound" if v.get("type") == "mental" else "Dread" if v.get("type") in ("spirit", "void") and "fear" in traits else "Spark"] += 5
    if heal:
        score["Mend"] += 5
    ranked = [e for e, n in score.most_common() if n > 0]
    if not ranked:
        return None
    picks = [ranked[0]]
    second = next((e for e in ranked[1:] if EFFECTS[e][0] != EFFECTS[picks[0]][0] and score[e] >= max(2, score[picks[0]] / 2)), None)
    if second:
        picks.append(second)
    tgt = (s.get("target") or {}).get("value", "").lower()
    stretch = []
    if s.get("area") or re.search(r"up to \d+|\d+ creatures|all creatures|each creature", tgt):
        stretch.append("zone/group")
    if feet((s.get("range") or {}).get("value")) > 30:
        stretch.append("far")
    dc, dl = dur_cost((s.get("duration") or {}).get("value"))
    big = max([avg(v.get("formula")) for v in dmg] or [0])
    if big >= 10 or re.search(SEVERE, blob):
        stretch.append("potent")
    cost = len(picks) + len(stretch) + dc
    return picks, stretch + ([dl] if dl else []), cost, big


def main(src, out=None):
    rows, none = [], Counter()
    for f in sorted(glob.glob(f"{src}/pf2e/packs/pf2e/spells/spells/**/*.json", recursive=True)):
        j = json.load(open(f))
        s = j["system"]
        if not isinstance(s.get("level"), dict) or "focus" in s["traits"]["value"]:
            continue
        cantrip = "cantrip" in s["traits"]["value"]
        rank = 0 if cantrip else s["level"]["value"]
        text = (j["name"] + " " + s["description"]["value"]).lower()
        r = recipe(j)
        flag = "unbuildable" if re.search(UNBUILDABLE, text) else ("no match" if r is None else "")
        if r is None:
            none[rank] += 1
            rows.append([j["name"], rank, "", "", "", flag])
            continue
        picks, st, cost, big = r
        rows.append([j["name"], rank, " and ".join(picks), ", ".join(st), cost, flag])
    if out:
        with open(out, "w", newline="") as fh:
            csv.writer(fh).writerows([["spell", "pf_rank", "effects", "stretches", "fount_cost", "flag"], *rows])
    ok = [r for r in rows if r[4] != "" and r[1] > 0]
    print(f"{len(rows)} spells (focus spells skipped), {len(ok)} ranked with a recipe, {sum(none.values())} with no Effect match\n")
    print("Fount cost by PF rank (count of spells)")
    tab = defaultdict(Counter)
    for r in ok:
        tab[r[1]][min(r[4], 6)] += 1
    print("rank | " + " ".join(f"c{c}{'+' if c == 6 else ' '}" for c in range(1, 7)) + " | mean  | unbuildable")
    for k in sorted(tab):
        n = [r for r in ok if r[1] == k]
        unb = sum(1 for r in rows if r[1] == k and r[5] == "unbuildable")
        print(f"{k:4} | " + " ".join(f"{tab[k][c]:4}" for c in range(1, 7)) + f" | {statistics.mean(r[4] for r in n):.2f}  | {unb}")
    xs, ys = [r[1] for r in ok], [r[4] for r in ok]
    rk = lambda v: {x: i for i, x in enumerate(sorted(set(v)))}
    print(f"\ncorrelation rank vs cost: pearson {statistics.correlation(xs, ys):.2f}")
    can = [r for r in rows if r[1] == 0 and r[4] != ""]
    print(f"cantrips: {len(can)}, recipe cost 1: {sum(r[4] == 1 for r in can)}, mean {statistics.mean(r[4] for r in can):.2f}")
    print("\nEffect use:", Counter(e for r in ok for e in r[2].split(" and ")).most_common())
    cheap = sorted([r for r in ok if r[1] >= 7 and r[4] <= 2 and not r[5]], key=lambda r: (-r[1], r[4]))
    dear = sorted([r for r in ok if r[1] <= 2 and r[4] >= 5], key=lambda r: (-r[4], r[1]))
    print(f"\nHigh rank (7+), Fount cost <= 2: {len(cheap)}")
    for r in cheap[:25]:
        print(f"  r{r[1]} c{r[4]}  {r[0]}: {r[2]}; {r[3]}")
    print(f"\nLow rank (1-2), Fount cost >= 5: {len(dear)}")
    for r in dear[:25]:
        print(f"  r{r[1]} c{r[4]}  {r[0]}: {r[2]}; {r[3]}")


if __name__ == "__main__":
    main(*sys.argv[1:])
