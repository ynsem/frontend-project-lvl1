import { startRound, getRandomInt, play } from '../index.js';

const GAME_PARAMS = {
  min: 2,
  max: 50,
  rounds: 3,
  rules: 'Find the greatest common divisor of given numbers.',
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

const startGcdRound = () => {
  const firstNumber = getRandomInt(GAME_PARAMS.min, GAME_PARAMS.max);
  const secondNumber = getRandomInt(GAME_PARAMS.min, GAME_PARAMS.max);

  const gameExpression = `${firstNumber} ${secondNumber}`;
  const trueAnswer = getTrueAnswerGcd(firstNumber, secondNumber);
  return startRound(gameExpression, trueAnswer);
};

const playGcd = () => play(GAME_PARAMS, startGcdRound);

export default playGcd;
