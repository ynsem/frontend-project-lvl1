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
const getRandomInteger = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

// проверяет на четность 'yes', если нечетное - вернет 'no'
const getTrueAnswerEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

// для brain-calc
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

// ход раунда
const startRound = (gameExpression, trueAnswer) => {
  const userAnswer = readlineSync.question(`Question: ${gameExpression}\n`);
  console.log(`Your answer: ${userAnswer}`);

  if (userAnswer === trueAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${trueAnswer}".\nLet's try again, ${userName}!`);
  return false;
};

export const playEven = (gameParams) => {
  console.log(gameParams.rules);
  let answerFlag = true;
  let round = 0;

  while (answerFlag && round < gameParams.rounds) {
    const gameExpression = getRandomInteger(gameParams.min, gameParams.max);
    const trueAnswer = getTrueAnswerEven(gameExpression);
    answerFlag = startRound(gameExpression, trueAnswer);
    round += 1;
  }
};

export const playCalc = (gameParams) => {
  console.log(gameParams.rules);
  let answerFlag = true;
  let round = 0;

  const operators = ['+', '-', '*'];

  while (answerFlag && round < gameParams.rounds) {
    const firstTerm = getRandomInteger(gameParams.min, gameParams.max);
    const secondTerm = getRandomInteger(gameParams.min, gameParams.max);
    const operator = operators[getRandomInteger(0, operators.length - 1)];

    const gameExpression = `${firstTerm} ${operator} ${secondTerm}`;
    const trueAnswer = getTrueAnswerCalc(firstTerm, secondTerm, operator);
    answerFlag = startRound(gameExpression, trueAnswer);
    round += 1;
  }
};
