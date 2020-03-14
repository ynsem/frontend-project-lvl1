import playGame from '../index.js';
import getRandomInt from '../utils.js';

const GAME_PARAMS = {
  min: 1,
  max: 10,
  rule: 'What number is missing in the progression?',
};

const PROGRESSION_LENGTH = 10;

// генерирует прогрессию
const getTrueAnswerProgression = (start, step) => {
  const result = [];

  for (let i = 0; i < PROGRESSION_LENGTH - 1; i += 1) {
    result.push(start + step * i);
  }

  return result;
};

const getProgressionParams = () => {
  const start = getRandomInt(GAME_PARAMS.min, GAME_PARAMS.max);
  const step = getRandomInt(GAME_PARAMS.min, GAME_PARAMS.max);

  const progression = getTrueAnswerProgression(start, step);
  const randomIndex = getRandomInt(0, progression.length - 1);

  const answer = progression[randomIndex].toString();
  progression[randomIndex] = '..';

  const question = progression.join(' ');

  return {
    expression: question,
    trueAnswer: answer,
  };
};

const playProgression = () => playGame(GAME_PARAMS, getProgressionParams);

export default playProgression;
