import readlineSync from 'readline-sync';

// для brain-games
const getUsername = () => readlineSync.question('May I have your name? ');

// имя пользователя
let userName = '';

export const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  userName = getUsername();
  console.log(`Hello, ${userName}!`);
};

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
