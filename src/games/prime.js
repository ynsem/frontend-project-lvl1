import { startRound, getRandomInt } from '../index.js';

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


const playPrime = (gameParams) => {
  console.log(gameParams.rules);
  let answerFlag = true;
  let round = 0;

  while (answerFlag && round < gameParams.rounds) {
    const gameExpression = getRandomInt(gameParams.min, gameParams.max);
    const trueAnswer = getTrueAnswerPrime(gameExpression);
    answerFlag = startRound(gameExpression, trueAnswer);
    round += 1;
  }
};

export default playPrime;
