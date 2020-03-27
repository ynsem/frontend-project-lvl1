import playGame from '../index.js';
import getRandomInt from '../utils.js';

const MIN = 1;
const MAX = 99;

const DESCRIPTION = 'What is the result of the expression?';
const OPERATORS = ['+', '-', '*'];

const getCorrectAnswer = (firstTerm, secondTerm, operator) => {
  let answer;

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
      return false;
  }

  return answer.toString();
};

const getCalcParams = () => {
  const firstTerm = getRandomInt(MIN, MAX);
  const secondTerm = getRandomInt(MIN, MAX);

  const operator = OPERATORS[getRandomInt(0, OPERATORS.length - 1)];

  const question = `${firstTerm} ${operator} ${secondTerm}`;
  const answer = getCorrectAnswer(firstTerm, secondTerm, operator);

  return {
    expression: question,
    trueAnswer: answer,
  };
};

export default () => playGame(DESCRIPTION, getCalcParams);
