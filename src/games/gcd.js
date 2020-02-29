import { startRound, getRandomInt } from '../index.js';

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

const playGcd = (gameParams) => {
  console.log(gameParams.rules);
  let answerFlag = true;
  let round = 0;

  while (answerFlag && round < gameParams.rounds) {
    const firstNumber = getRandomInt(gameParams.min, gameParams.max);
    const secondNumber = getRandomInt(gameParams.min, gameParams.max);

    const gameExpression = `${firstNumber} ${secondNumber}`;
    const trueAnswer = getTrueAnswerGcd(firstNumber, secondNumber);
    answerFlag = startRound(gameExpression, trueAnswer);
    round += 1;
  }
};

export default playGcd;
