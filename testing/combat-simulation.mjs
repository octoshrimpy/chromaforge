// Exact enumeration for provisional alpha combat values.
// Run: node testing/combat-simulation.mjs

const cases = [
  ['light vs unarmored peer', 4, 4, 0, 6],
  ['standard vs light peer', 4, 4, 2, 8],
  ['heavy vs heavy peer', 4, 4, 4, 10],
  ['standard vs tough light peer', 3, 5, 2, 8],
  ['high-Fount standard vs light peer', 6, 4, 2, 8],
];

console.log('matchup | Defense | damaging | damage/attack | attacks to 0 HP');
for (const [name, fount, drun, armor, die] of cases) {
  const bonus = Math.floor(fount / 3);
  const defense = 4 + drun + armor;
  const hp = 10 + drun;
  const rolls = Array.from({ length: die }, (_, i) => i + 1 + bonus);
  const damage = rolls.map(total => 2 * total < defense ? 0 : total);
  const chance = damage.filter(Boolean).length / die;
  const expected = damage.reduce((sum, value) => sum + value, 0) / die;
  const attacks = hp / expected;
  console.log(`${name} | ${defense} | ${(chance * 100).toFixed(1)}% | ${expected.toFixed(2)} | ${attacks.toFixed(2)}`);
  if (chance < 0.5 || chance > 0.75 || attacks > 4.1) throw new Error(`${name}: provisional values outside alpha target`);
}
