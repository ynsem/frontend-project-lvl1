import playGame from '../index.js';
import getRandomInt from '../utils.js';

const min = 2;
const max = 50;

const DESCRIPTION = 'Find the greatest common divisor of given numbers.';

// ищет наибольший общий делитель
const getGcd = (firstNumber, secondNumber) => {
  const result = [];

  for (let i = Math.min(firstNumber, secondNumber); i > 0; i -= 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      result.push(i);
    }
  }

  // дополнительная страховка, на самом деле можно возвращать result[0]
  return Math.max(...result);
};

const getGcdParams = () => {
  const firstNumber = getRandomInt(min, max);
  const secondNumber = getRandomInt(min, max);

  const question = `${firstNumber} ${secondNumber}`;
  // toString вынесен сюда из getGcd, чтобы ф-я поиска НОД оставалась чистой
  const answer = getGcd(firstNumber, secondNumber).toString();

  return {
    expression: question,
    trueAnswer: answer,
  };
};

export default () => playGame(DESCRIPTION, getGcdParams);
