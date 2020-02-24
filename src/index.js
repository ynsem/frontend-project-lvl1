import readlineSync from 'readline-sync';

// для brain-games

const getUsername = () => readlineSync.question('May I have your name? ');

// имя пользователя
const userName = getUsername();

export const greetUser = () => {
  console.log(`Welcome to the Brain Games!\nHello, ${userName}!`);
};

// для brain-even

const MIN_NUMBER = 1;
const MAX_NUMBER = 99;
const GAME_ROUNDS = 3;

// даст вам неравномерное распределение, тут подойдет, а если надо равномерное?
const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

// проверяет на четность true, если нечетное - вернет false
const getTrueAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');

// получаем случайное число
export const playGame = () => {
  let trueAnswerCount = 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < GAME_ROUNDS; i += 1) {
    const gameNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
    const trueAnswer = getTrueAnswer(gameNumber);

    const answer = readlineSync.question(`Question: ${gameNumber} \n`, {
      trueValue: trueAnswer,
    });

    console.log(`Your answer: ${answer}`);

    if (answer === true) {
      console.log('Correct!');
      trueAnswerCount += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}".\nLet's try again, ${userName}!`);
    }
  }

  if (trueAnswerCount === GAME_ROUNDS) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`You loosed, ${userName} ;(`);
  }
};
