import playGame from '../index.js';
import getRandomInt from '../utils.js';

const min = 1;
const max = 99;

const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getTrueAnswerEven = (number) => (isEven(number) ? 'yes' : 'no');

const getEvenParams = () => {
  const question = getRandomInt(min, max);
  const answer = getTrueAnswerEven(question);

  return {
    expression: question,
    trueAnswer: answer,
  };
};

export default () => playGame(DESCRIPTION, getEvenParams);
