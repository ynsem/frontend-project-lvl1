import { getRandomInt, playGame } from '../index.js';

const GAME_PARAMS = {
  min: 2,
  max: 50,
  roundsCount: 3,
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
  // подумать над названием
  const gameParams = {};

  const firstNumber = getRandomInt(GAME_PARAMS.min, GAME_PARAMS.max);
  const secondNumber = getRandomInt(GAME_PARAMS.min, GAME_PARAMS.max);

  gameParams.expression = `${firstNumber} ${secondNumber}`;
  gameParams.trueAnswer = getTrueAnswerGcd(firstNumber, secondNumber);
  return gameParams;
};

const playGcd = () => playGame(GAME_PARAMS, getGcdParams);

export default playGcd;
