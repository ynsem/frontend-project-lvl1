import playGame from '../index.js';
import getRandomInt from '../utils.js';

const MIN = 1;
const MAX = 99;

const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getEvenParams = () => {
  const question = getRandomInt(MIN, MAX);
  const answer = isEven(question) ? 'yes' : 'no';

  return {
    expression: question,
    trueAnswer: answer,
  };
};

export default () => playGame(DESCRIPTION, getEvenParams);
