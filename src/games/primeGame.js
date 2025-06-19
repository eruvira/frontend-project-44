import readlineSync from "readline-sync";
import greeting from "../cli.js";

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

export default function playPrimeGame() {
  const name = greeting();
  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const number = getRandomInt(2, 100);
    const correctAnswer = isPrime(number) ? "yes" : "no";

    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question("Your answer: ");

    if (userAnswer === correctAnswer) {
      console.log("Correct!");
      correctAnswers += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}
