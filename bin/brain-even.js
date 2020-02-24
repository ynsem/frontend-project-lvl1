#!/usr/bin/env node

import readlineSync from 'readline-sync';

const MIN_NUMBER = 1;
const MAX_NUMBER = 99;
const GAME_ROUNDS = 3;

console.log('Answer "yes" if the number is even, otherwise answer "no".');

// даст вам неравномерное распределение, тут подойдет, а если надо равномерное?
const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

// проверяет на четность true, если нечетное - вернет false
const getTrueAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');

// получаем случайное число
const playGame = (gameRounds, userName) => {
  let trueAnswerCount = 0;
  for (let i = 0; i < gameRounds; i += 1) {
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

  if (trueAnswerCount === gameRounds) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`You loosed, ${userName} ;(`);
  }
};

playGame(GAME_ROUNDS);
