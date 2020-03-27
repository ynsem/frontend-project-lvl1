import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

const playGame = (description, getGameData) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Welcome to the Brain Games!');
  console.log(description);

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const params = getGameData();

    const userAnswer = readlineSync.question(`Question: ${params.expression}\n`);
    console.log(`Your answer: ${userAnswer}`);

    if (userAnswer !== params.trueAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${params.trueAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
