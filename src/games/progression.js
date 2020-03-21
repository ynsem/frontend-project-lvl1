import playGame from '../index.js';
import getRandomInt from '../utils.js';

const min = 1;
const max = 10;

const DESCRIPTION = 'What number is missing in the progression?';
const PROGRESSION_LENGTH = 10;

// генерирует прогрессию
const getTrueAnswerProgression = (start, step, progressionLength) => {
  const result = [];

  for (let i = 0; i < progressionLength - 1; i += 1) {
    result.push(start + step * i);
  }

  return result;
};

const getProgressionParams = () => {
  const start = getRandomInt(min, max);
  const step = getRandomInt(min, max);

  const progression = getTrueAnswerProgression(start, step, PROGRESSION_LENGTH);
  const randomIndex = getRandomInt(0, progression.length - 1);

  const answer = progression[randomIndex].toString();
  progression[randomIndex] = '..';

  const question = progression.join(' ');

  return {
    expression: question,
    trueAnswer: answer,
  };
};

export default () => playGame(DESCRIPTION, getProgressionParams);
