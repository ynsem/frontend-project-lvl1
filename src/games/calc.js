import { getRandomInt, playGame } from '../index.js';

const GAME_PARAMS = {
  min: 1,
  max: 99,
  roundsCount: 3,
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

  return `${answer}`;
};

const getCalcParams = () => {
  // подумать над названием
  const gameParams = {};

  const firstTerm = getRandomInt(GAME_PARAMS.min, GAME_PARAMS.max);
  const secondTerm = getRandomInt(GAME_PARAMS.min, GAME_PARAMS.max);

  const operator = OPERATORS[getRandomInt(0, OPERATORS.length - 1)];

  gameParams.expression = `${firstTerm} ${operator} ${secondTerm}`;
  gameParams.trueAnswer = getTrueAnswerCalc(firstTerm, secondTerm, operator);

  return gameParams;
};

const playCalc = () => playGame(GAME_PARAMS, getCalcParams);

export default playCalc;
