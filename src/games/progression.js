import { startRound, getRandomInt, play } from '../index.js';

const GAME_PARAMS = {
  min: 1,
  max: 10,
  rounds: 3,
  rules: 'What number is missing in the progression?',
};

// генерирует прогрессию
const getTrueAnswerProgression = (start, step) => {
  const progressionLength = 10;
  const result = [start];
  for (let i = 0; i < progressionLength - 1; i += 1) {
    result.push(result[i] + step);
  }

  return result;
};

const startProgressionRound = () => {
  const start = getRandomInt(GAME_PARAMS.min, GAME_PARAMS.max);
  const step = getRandomInt(GAME_PARAMS.min, GAME_PARAMS.max);

  const progression = getTrueAnswerProgression(start, step);
  const randomIndex = getRandomInt(0, progression.length - 1);

  const trueAnswer = `${progression[randomIndex]}`;
  progression[randomIndex] = '..';

  const gameExpression = progression.join(' ');

  return startRound(gameExpression, trueAnswer);
};

const playProgression = () => play(GAME_PARAMS, startProgressionRound);

export default playProgression;
