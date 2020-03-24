import playGame from '../index.js';
import getRandomInt from '../utils.js';

const MIN = 2;
const MAX = 50;

const DESCRIPTION = 'Find the greatest common divisor of given numbers.';

// ищет наибольший общий делитель
// решение взято с https://medium.com/
// короткая сслыка: https://is.gd/IXzVlq
// доработано с учетом требований eslint
const getGcd = (firstNum, secondNum) => {
  let gcd = firstNum;
  let count = secondNum;
  while (count !== 0) {
    count = gcd % (gcd = count);
  }
  return gcd;
};

const getGcdParams = () => {
  const firstNumber = getRandomInt(MIN, MAX);
  const secondNumber = getRandomInt(MIN, MAX);

  const question = `${firstNumber} ${secondNumber}`;
  // toString вынесен сюда из getGcd, чтобы ф-я поиска НОД оставалась чистой
  const answer = getGcd(firstNumber, secondNumber).toString();

  return {
    expression: question,
    trueAnswer: answer,
  };
};

export default () => playGame(DESCRIPTION, getGcdParams);
