import { startRound, getRandomInt } from '../index.js';

// генерирует прогрессию
const getTrueAnswerProgression = (start, step) => {
  const progressionLength = 10;
  const result = [start];
  for (let i = 0; i < progressionLength - 1; i += 1) {
    result.push(result[i] + step);
  }

  return result;
};

const playProgression = (gameParams) => {
  console.log(gameParams.rules);
  let answerFlag = true;
  let round = 0;

  while (answerFlag && round < gameParams.rounds) {
    const start = getRandomInt(gameParams.min, gameParams.max);
    const step = getRandomInt(gameParams.min, gameParams.max);

    const progression = getTrueAnswerProgression(start, step);
    const randomIndex = getRandomInt(0, progression.length - 1);

    const trueAnswer = `${progression[randomIndex]}`;
    progression[randomIndex] = '..';

    const gameExpression = progression.join(' ');

    answerFlag = startRound(gameExpression, trueAnswer);
    round += 1;
  }
};

export default playProgression;
