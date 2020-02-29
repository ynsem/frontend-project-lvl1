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

export const playEven = (gameParams) => {
  let trueAnswerCount = 0;

  console.log(gameParams.rules);

  for (let i = 0; i < gameParams.rounds; i += 1) {
    //
    const gameExpression = getRandomInteger(gameParams.min, gameParams.max);
    const trueAnswer = getTrueAnswerEven(gameExpression);
    //

    const userAnswer = readlineSync.question(`Question: ${gameExpression}\n`);

    console.log(`Your answer: ${userAnswer}`);

    if (userAnswer === trueAnswer) {
      console.log('Correct!');
      trueAnswerCount += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${trueAnswer}".\nLet's try again, ${userName}!`);
    }
  }

  if (trueAnswerCount === gameParams.rounds) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`You loosed, ${userName} ;(`);
  }
};

export const playCalc = (gameParams) => {
  let trueAnswerCount = 0;

  console.log(gameParams.rules);

  for (let i = 0; i < gameParams.rounds; i += 1) {
    //
    const operators = ['+', '-', '*'];
    const firstTerm = getRandomInteger(gameParams.min, gameParams.max);
    const secondTerm = getRandomInteger(gameParams.min, gameParams.max);
    const operator = operators[getRandomInteger(0, operators.length - 1)];
    const gameExpression = `${firstTerm} ${operator} ${secondTerm}`;
    const trueAnswer = getTrueAnswerCalc(firstTerm, secondTerm, operator);
    //

    const userAnswer = readlineSync.question(`Question: ${gameExpression}\n`);

    console.log(`Your answer: ${userAnswer}`);

    if (userAnswer === trueAnswer) {
      console.log('Correct!');
      trueAnswerCount += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${trueAnswer}".\nLet's try again, ${userName}!`);
    }
  }

  if (trueAnswerCount === gameParams.rounds) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`You loosed, ${userName} ;(`);
  }
};
