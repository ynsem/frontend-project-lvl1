// скопировано с https://learn.javascript.ru/task/random-int-min-max
const getRandomInt = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

export default getRandomInt;
