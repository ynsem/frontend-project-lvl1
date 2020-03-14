import playGame from '../index.js';
import getRandomInt from '../utils.js';

const GAME_PARAMS = {
  min: 2,
  max: 50,
  rule: 'Find the greatest common divisor of given numbers.',
};

// ищет наибольший общий делитель
const getTrueAnswerGcd = (firstNumber, secondNumber) => {
  const result = [];

  for (let i = Math.min(firstNumber, secondNumber); i > 0; i -= 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      result.push(i);
    }
  }

  // дополнительная страховка, на самом деле можно возвращать result[0]
  return `${Math.max(...result)}`;
};

const getGcdParams = () => {
  const firstNumber = getRandomInt(GAME_PARAMS.min, GAME_PARAMS.max);
  const secondNumber = getRandomInt(GAME_PARAMS.min, GAME_PARAMS.max);

  const question = `${firstNumber} ${secondNumber}`;
  const answer = getTrueAnswerGcd(firstNumber, secondNumber);

  return {
    expression: question,
    trueAnswer: answer,
  };
};

const playGcd = () => playGame(GAME_PARAMS, getGcdParams);

export default playGcd;
