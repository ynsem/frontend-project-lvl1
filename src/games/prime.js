import { startRound, getRandomInt, play } from '../index.js';

const GAME_PARAMS = {
  min: 1,
  max: 99,
  rounds: 3,
  rules: 'Answer "yes" if given number is prime. Otherwise answer "no".',
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


const startPrimeRound = () => {
  const gameExpression = getRandomInt(GAME_PARAMS.min, GAME_PARAMS.max);
  const trueAnswer = getTrueAnswerPrime(gameExpression);
  return startRound(gameExpression, trueAnswer);
};

const playPrime = () => play(GAME_PARAMS, startPrimeRound);

export default playPrime;
