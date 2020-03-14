import playGame from '../index.js';
import getRandomInt from '../utils.js';

const GAME_PARAMS = {
  min: 1,
  max: 99,
  rule: 'Answer "yes" if given number is prime. Otherwise answer "no".',
};

const isPrime = (number) => {
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getTrueAnswerPrime = (number) => (isPrime(number) ? 'yes' : 'no');

const getPrimeParams = () => {
  const question = getRandomInt(GAME_PARAMS.min, GAME_PARAMS.max);
  const answer = getTrueAnswerPrime(question);

  return {
    expression: question,
    trueAnswer: answer,
  };
};

const playPrime = () => playGame(GAME_PARAMS, getPrimeParams);

export default playPrime;
