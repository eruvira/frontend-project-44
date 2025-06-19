import readlineSync from "readline-sync";
import greeting from "../cli.js";

const operators = ["+", "-", "*"];

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const calculate = (a, b, operator) => {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

export default function playCalcGame() {
  const name = greeting();
  console.log("What is the result of the expression?");

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const a = getRandomInt(1, 50);
    const b = getRandomInt(1, 50);
    const operator = operators[getRandomInt(0, operators.length - 1)];

    const question = `${a} ${operator} ${b}`;
    const correctAnswer = calculate(a, b, operator).toString();

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
