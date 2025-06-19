import readlineSync from 'readline-sync';
import greeting from '../cli.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getGCD = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

export default function playGcdGame() {
  const name = greeting();
  console.log('Find the greatest common divisor of given numbers.');

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const a = getRandomInt(1, 100);
    const b = getRandomInt(1, 100);
    const correctAnswer = getGCD(a, b).toString();

    console.log(`Question: ${a} ${b}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}
