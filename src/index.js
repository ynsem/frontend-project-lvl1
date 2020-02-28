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

// для brain-even

// посмотрим как пойдет дальше, может вообще будет для каждой игры своя


// даст неравномерное распределение, тут подойдет, а если надо равномерное?
const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

// проверяет на четность 'yes', если нечетное - вернет 'no'
const getTrueAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');

// получаем случайное число
export const playGame = (boundaries, rounds) => {
  let trueAnswerCount = 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < rounds; i += 1) {
    const gameNumber = getRandomNumber(boundaries.min, boundaries.max);
    const trueAnswer = getTrueAnswer(gameNumber);

    const userAnswer = readlineSync.question(`Question: ${gameNumber}\n`);

    console.log(`Your answer: ${userAnswer}`);

    if (userAnswer === trueAnswer) {
      console.log('Correct!');
      trueAnswerCount += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${trueAnswer}".\nLet's try again, ${userName}!`);
    }
  }

  if (trueAnswerCount === rounds) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`You loosed, ${userName} ;(`);
  }
};
