import readlineSync from 'readline-sync';

// скопировано с https://learn.javascript.ru/task/random-int-min-max
export const getRandomInt = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

export const isEven = (number) => number % 2 === 0;

export const playGame = (gameParams, play) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`Welcome to the Brain Games!\n${gameParams.rule}`);

  for (let i = 0; i < gameParams.roundsCount; i += 1) {
    const params = play();

    const userAnswer = readlineSync.question(`Question: ${params.expression}\n`);
    console.log(`Your answer: ${userAnswer}`);

    if (userAnswer !== params.trueAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${params.trueAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    console.log('Correct!');
  }
};
