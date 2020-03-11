import { getRandomInt, playGame } from '../index.js';

const GAME_PARAMS = {
  min: 1,
  max: 99,
  roundsCount: 3,
  rule: 'Answer "yes" if given number is prime. Otherwise answer "no".',
};

// проверяет простое ли число 'yes', если нет - вернет 'no'
const getTrueAnswerPrime = (number) => {
  const dividers = [];
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      dividers.push(i);
    }
  }

  return dividers.length === 0 ? 'yes' : 'no';
};


const getPrimeParams = () => {
  // подумать над названием
  const gameParams = {};

  gameParams.expression = getRandomInt(GAME_PARAMS.min, GAME_PARAMS.max);
  gameParams.trueAnswer = getTrueAnswerPrime(gameParams.expression);

  return gameParams;
};

const playPrime = () => playGame(GAME_PARAMS, getPrimeParams);

export default playPrime;
