import { getRandomInt, playGame, isEven } from '../index.js';

const GAME_PARAMS = {
  min: 1,
  max: 99,
  roundsCount: 3,
  rule: 'Answer "yes" if the number is even, otherwise answer "no".',
};

// проверяет на четность 'yes', если нечетное - вернет 'no'
const getTrueAnswerEven = (number) => (isEven(number) ? 'yes' : 'no');

const getEvenParams = () => {
  // подумать над названием
  const gameParams = {};

  gameParams.expression = getRandomInt(GAME_PARAMS.min, GAME_PARAMS.max);
  gameParams.trueAnswer = getTrueAnswerEven(gameParams.expression);

  return gameParams;
};

const playEven = () => playGame(GAME_PARAMS, getEvenParams);

export default playEven;
