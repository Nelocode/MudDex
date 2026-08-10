const { generateBreedingPlan } = require('./src/utils/breedingAlgorithm');

const testCases = [
  { id: 'eevee', name: 'Eevee (Standard 87.5% Male)' },
  { id: 'mudkip', name: 'Mudkip (Starter 87.5% Male)' },
  { id: 'beldum', name: 'Beldum (Genderless)' },
  { id: 'tauros', name: 'Tauros (100% Male)' },
  { id: 'chansey', name: 'Chansey (100% Female)' },
  { id: 'riolu', name: 'Riolu (Baby Pokemon)' },
  { id: 'salandit', name: 'Salandit (Asymmetric Female Evolution)' },
  { id: 'gengar', name: 'Gengar (Standard 50/50 Amorphous)' },
  { id: 'geodude', name: 'Geodude (Mineral)' },
  { id: 'scizor', name: 'Scizor (Bug)' }
];

console.log('=== DOUBLE-CHECKING GENERATEBREEDINGPLAN ON 10 CRITICAL TEST CASES ===\n');

testCases.forEach(tc => {
  const targetIvs = { hp: true, attack: true, defense: true, specialDefense: true, speed: true };
  const plan = generateBreedingPlan(tc.id, targetIvs, 'Firme', 'Adaptable', [], [], true);
  console.log('✅ [' + tc.name + ']');
  console.log('   - Target: ' + plan.targetPokemonName + ' (' + plan.targetIvCount + 'x31 IVs)');
  console.log('   - Steps Count: ' + plan.steps.length);
  console.log('   - Strategy: ' + plan.strategyUsed);
  if (plan.specialHandicapAlerts && plan.specialHandicapAlerts.length > 0) {
    console.log('   - Special Handicap Alert: ' + plan.specialHandicapAlerts.join(' | '));
  }
  plan.steps.forEach(st => {
    console.log('     Step ' + st.stepNumber + ' [' + (st.chainName || 'Cadena') + ']: ' + st.parentA.name + ' (' + st.parentA.originLabel + ') + ' + st.parentB.name + ' (' + st.parentB.originLabel + ') => ' + st.offspringTarget.name + ' (' + st.offspringTarget.genderRequiredLabel + ')');
  });
  console.log('');
});
