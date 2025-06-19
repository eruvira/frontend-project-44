import readlineSync from "readline-sync";
import greeting from "../cli.js";

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (start, step, length) => {
  return Array.from({ length }, (_, i) => start + i * step);
};

export default function playProgressionGame() {
  const name = greeting();

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const length = getRandomInt(5, 10);
    const start = getRandomInt(1, 20);
    const step = getRandomInt(1, 10);

    const progression = generateProgression(start, step, length);
    const hiddenIndex = getRandomInt(0, length - 1);
    const correctAnswer = progression[hiddenIndex].toString();

    const question = progression
      .map((num, i) => (i === hiddenIndex ? ".." : num))
      .join(" ");

    console.log(`Question: ${question}`);
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
