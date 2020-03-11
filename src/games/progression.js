import { getRandomInt, playGame } from '../index.js';

const GAME_PARAMS = {
  min: 1,
  max: 10,
  roundsCount: 3,
  rule: 'What number is missing in the progression?',
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

const getProgressionParams = () => {
  // подумать над названием
  const gameParams = {};

  const start = getRandomInt(GAME_PARAMS.min, GAME_PARAMS.max);
  const step = getRandomInt(GAME_PARAMS.min, GAME_PARAMS.max);

  const progression = getTrueAnswerProgression(start, step);
  const randomIndex = getRandomInt(0, progression.length - 1);

  gameParams.trueAnswer = `${progression[randomIndex]}`;
  progression[randomIndex] = '..';

  gameParams.expression = progression.join(' ');

  return gameParams;
};

const playProgression = () => playGame(GAME_PARAMS, getProgressionParams);

export default playProgression;
