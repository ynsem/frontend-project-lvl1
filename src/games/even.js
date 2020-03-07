import { startRound, getRandomInt, play } from '../index.js';

const GAME_PARAMS = {
  min: 1,
  max: 99,
  rounds: 3,
  rules: 'Answer "yes" if the number is even, otherwise answer "no".',
};

// проверяет на четность 'yes', если нечетное - вернет 'no'
const getTrueAnswerEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const startEvenRound = () => {
  const gameExpression = getRandomInt(GAME_PARAMS.min, GAME_PARAMS.max);
  const trueAnswer = getTrueAnswerEven(gameExpression);
  return startRound(gameExpression, trueAnswer);
};

const playEven = () => play(GAME_PARAMS, startEvenRound);

export default playEven;
