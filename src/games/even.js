import playGame from '../index.js';
import getRandomInt from '../utils.js';

const GAME_PARAMS = {
  min: 1,
  max: 99,
  rule: 'Answer "yes" if the number is even, otherwise answer "no".',
};

const isEven = (number) => number % 2 === 0;

const getTrueAnswerEven = (number) => (isEven(number) ? 'yes' : 'no');

const getEvenParams = () => {
  const question = getRandomInt(GAME_PARAMS.min, GAME_PARAMS.max);
  const answer = getTrueAnswerEven(question);

  return {
    expression: question,
    trueAnswer: answer,
  };
};

const playEven = () => playGame(GAME_PARAMS, getEvenParams);

export default playEven;
