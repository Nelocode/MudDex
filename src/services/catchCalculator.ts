import { Pokemon, CatchContext, BallCatchResult } from '../types/diosesmon';
import { COBBLEMON_POKEBALLS } from '../data/cobblemonPokeballs';

/**
 * Calculates Cobblemon (Gen 8 / Gen 9) catch probability.
 */
export function calculateCatchRate(
  pokemon: Pokemon,
  context: CatchContext
): BallCatchResult[] {
  const hpMax = pokemon.baseHp;
  const hpPercent = Math.max(1, Math.min(100, context.currentHpPercent));
  const hpCurrent = Math.max(1, Math.round((hpMax * hpPercent) / 100));

  // Status multiplier S
  let statusMultiplier = 1.0;
  if (context.status === 'sleep' || context.status === 'freeze') {
    statusMultiplier = 2.5;
  } else if (context.status === 'paralysis' || context.status === 'poison' || context.status === 'burn') {
    statusMultiplier = 1.5;
  }

  const results: BallCatchResult[] = COBBLEMON_POKEBALLS.map(ball => {
    const ballMultiplier = ball.getMultiplier(context, pokemon);

    // Modified catch rate formula
    // X = ((3 * HPMax - 2 * HPCurrent) * CatchRate * BallMultiplier * Status) / (3 * HPMax)
    const modifiedRate =
      ((3 * hpMax - 2 * hpCurrent) * pokemon.catchRate * ballMultiplier * statusMultiplier) /
      (3 * hpMax);

    let catchChance = 0;
    if (ballMultiplier >= 255) {
      catchChance = 100.0;
    } else {
      // Gen 8/9 approximation formula for catch probability
      const ratio = Math.min(1.0, modifiedRate / 255.0);
      // Gen 8/9 shake probability formula approximation
      const shakeProb = Math.pow(ratio, 0.75);
      catchChance = Math.min(100.0, Math.max(0.1, shakeProb * 100.0));
    }

    const expectedThrows = catchChance >= 100 ? 1 : Math.ceil(100 / catchChance);

    let rating: 's' | 'a' | 'b' | 'c' | 'd' = 'c';
    if (catchChance >= 90) rating = 's';
    else if (catchChance >= 65) rating = 'a';
    else if (catchChance >= 40) rating = 'b';
    else if (catchChance >= 20) rating = 'c';
    else rating = 'd';

    return {
      ball,
      multiplier: Number(ballMultiplier.toFixed(2)),
      catchChance: Number(catchChance.toFixed(1)),
      expectedThrows,
      efficiencyRating: rating
    };
  });

  // Sort by catch chance descending
  return results.sort((a, b) => b.catchChance - a.catchChance);
}
