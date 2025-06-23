import gameEngine from '../index.js'

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const isEven = (num) => num % 2 === 0

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const generateRound = () => {
  const number = getRandomInt(1, 100)
  const correctAnswer = isEven(number) ? 'yes' : 'no'
  return {
    question: number.toString(),
    correctAnswer,
  }
}

export default () => gameEngine(description, generateRound)
