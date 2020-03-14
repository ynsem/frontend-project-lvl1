import playGame from '../index.js';
import getRandomInt from '../utils.js';

const GAME_PARAMS = {
  min: 1,
  max: 99,
  rule: 'What is the result of the expression?',
};

const OPERATORS = ['+', '-', '*'];

const getTrueAnswerCalc = (firstTerm, secondTerm, operator) => {
  let answer = 0;
  switch (operator) {
    case '+':
      answer = firstTerm + secondTerm;
      break;
    case '-':
      answer = firstTerm - secondTerm;
      break;
    case '*':
      answer = firstTerm * secondTerm;
      break;
    default:
  }

  return answer.toString();
};

const getCalcParams = () => {
  const firstTerm = getRandomInt(GAME_PARAMS.min, GAME_PARAMS.max);
  const secondTerm = getRandomInt(GAME_PARAMS.min, GAME_PARAMS.max);

  const operator = OPERATORS[getRandomInt(0, OPERATORS.length - 1)];

  const question = `${firstTerm} ${operator} ${secondTerm}`;
  const answer = getTrueAnswerCalc(firstTerm, secondTerm, operator);

  return {
    expression: question,
    trueAnswer: answer,
  };
};

const playCalc = () => playGame(GAME_PARAMS, getCalcParams);

export default playCalc;
