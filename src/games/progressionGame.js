import gameEngine from "../index.js";

const description = "What number is missing in the progression?";

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (start, step, length) => {
  return Array.from({ length }, (_, i) => start + i * step);
};

const generateRound = () => {
  const length = getRandomInt(5, 10);
  const start = getRandomInt(1, 20);
  const step = getRandomInt(1, 10);

  const progression = generateProgression(start, step, length);
  const hiddenIndex = getRandomInt(0, length - 1);
  const correctAnswer = progression[hiddenIndex].toString();

  const question = progression
    .map((num, i) => (i === hiddenIndex ? ".." : num))
    .join(" ");
  

  return { question, correctAnswer };
};

export default () => gameEngine(description, generateRound);
