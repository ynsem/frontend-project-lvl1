import { startRound, getRandomInt } from '../index.js';

const getTrueAnswerCalc = (firstTerm, secondTerm, operator) => {
  let answer = 0;
  switch (operator) {
    case '+':
      answer = firstTerm + secondTerm;
      break;
    case '-':
      answer = firstTerm - secondTerm;
      break;
    case '*':
      answer = firstTerm * secondTerm;
      break;
    default:
  }

  return `${answer}`;
};

const playCalc = (gameParams) => {
  console.log(gameParams.rules);
  let answerFlag = true;
  let round = 0;

  const operators = ['+', '-', '*'];

  while (answerFlag && round < gameParams.rounds) {
    const firstTerm = getRandomInt(gameParams.min, gameParams.max);
    const secondTerm = getRandomInt(gameParams.min, gameParams.max);

    const operator = operators[getRandomInt(0, operators.length - 1)];

    const gameExpression = `${firstTerm} ${operator} ${secondTerm}`;

    const trueAnswer = getTrueAnswerCalc(firstTerm, secondTerm, operator);

    answerFlag = startRound(gameExpression, trueAnswer);
    round += 1;
  }
};

export default playCalc;
