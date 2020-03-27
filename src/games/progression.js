import playGame from '../index.js';
import getRandomInt from '../utils.js';

const MIN = 1;
const MAX = 10;

const DESCRIPTION = 'What number is missing in the progression?';
const PROGRESSION_LENGTH = 10;

// генерирует прогрессию
const getProgression = (start, step, progressionLength) => {
  const result = [];

  for (let i = 0; i < progressionLength; i += 1) {
    result.push(start + step * i);
  }

  return result;
};

const getProgressionParams = () => {
  const start = getRandomInt(MIN, MAX);
  const step = getRandomInt(MIN, MAX);

  const progression = getProgression(start, step, PROGRESSION_LENGTH);
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
