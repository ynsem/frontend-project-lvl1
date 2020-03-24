import playGame from '../index.js';
import getRandomInt from '../utils.js';

const MIN = 1;
const MAX = 99;

const DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  // 1, 0 и отрицательные числа не являются простыми
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getTrueAnswerPrime = (number) => (isPrime(number) ? 'yes' : 'no');

const getPrimeParams = () => {
  const question = getRandomInt(MIN, MAX);
  const answer = getTrueAnswerPrime(question);

  return {
    expression: question,
    trueAnswer: answer,
  };
};

export default () => playGame(DESCRIPTION, getPrimeParams);
