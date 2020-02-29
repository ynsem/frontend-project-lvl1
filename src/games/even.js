import { startRound, getRandomInt } from '../index.js';

// проверяет на четность 'yes', если нечетное - вернет 'no'
const getTrueAnswerEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const playEven = (gameParams) => {
  console.log(gameParams.rules);
  let answerFlag = true;
  let round = 0;

  while (answerFlag && round < gameParams.rounds) {
    const gameExpression = getRandomInt(gameParams.min, gameParams.max);
    const trueAnswer = getTrueAnswerEven(gameExpression);
    answerFlag = startRound(gameExpression, trueAnswer);
    round += 1;
  }
};

export default playEven;
