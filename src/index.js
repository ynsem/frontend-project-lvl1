import readlineSync from 'readline-sync';

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

// скопировано с https://learn.javascript.ru/task/random-int-min-max
export const getRandomInt = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

// ход раунда
export const startRound = (gameExpression, trueAnswer) => {
  const userAnswer = readlineSync.question(`Question: ${gameExpression}\n`);
  console.log(`Your answer: ${userAnswer}`);

  if (userAnswer === trueAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${trueAnswer}".\nLet's try again, ${userName}!`);
  return false;
};

export const play = (gameParams, playGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameParams.rules);

  for (let i = 0; i < gameParams.rounds; i += 1) {
    if (!playGame()) {
      break;
    }
  }
};
