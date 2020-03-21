import playGame from '../index.js';
import getRandomInt from '../utils.js';

const min = 1;
const max = 99;

const DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
  const question = getRandomInt(min, max);
  const answer = getTrueAnswerPrime(question);

  return {
    expression: question,
    trueAnswer: answer,
  };
};

export default () => playGame(DESCRIPTION, getPrimeParams);
