import playGame from '../index.js';
import getRandomInt from '../utils.js';

const min = 1;
const max = 99;

const DESCRIPTION = 'What is the result of the expression?';
const OPERATORS = [];

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
      // вынесено отдельно, а не прописано как начальное значение,
      // т.к. это заглушка, вместо обработки ошибки
      answer = false;
  }

  return answer.toString();
};

const getCalcParams = () => {
  const firstTerm = getRandomInt(min, max);
  const secondTerm = getRandomInt(min, max);

  const operator = OPERATORS[getRandomInt(0, OPERATORS.length - 1)];

  const question = `${firstTerm} ${operator} ${secondTerm}`;
  const answer = getTrueAnswerCalc(firstTerm, secondTerm, operator);

  return {
    expression: question,
    trueAnswer: answer,
  };
};

export default () => playGame(DESCRIPTION, getCalcParams);
