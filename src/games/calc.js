import { startRound, getRandomInt, play } from '../index.js';

const GAME_PARAMS = {
  min: 1,
  max: 99,
  rounds: 3,
  rules: 'What is the result of the expression?',
};

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

const startCalcRound = () => {
  const operators = ['+', '-', '*'];

  const firstTerm = getRandomInt(GAME_PARAMS.min, GAME_PARAMS.max);
  const secondTerm = getRandomInt(GAME_PARAMS.min, GAME_PARAMS.max);

  const operator = operators[getRandomInt(0, operators.length - 1)];

  const gameExpression = `${firstTerm} ${operator} ${secondTerm}`;
  const trueAnswer = getTrueAnswerCalc(firstTerm, secondTerm, operator);

  return startRound(gameExpression, trueAnswer);
};

const playCalc = () => play(GAME_PARAMS, startCalcRound);

export default playCalc;
