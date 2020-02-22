import readlineSync from 'readline-sync';

const getUsername = () => readlineSync.question('May I have your name? ');

const greetUser = () => console.log(`Hello, ${getUsername()}!`);

export default greetUser;
