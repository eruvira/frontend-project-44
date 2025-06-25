import gameEngine from '../index.js'
import getRandomInt from '../utility/generateRandomInt.js'

const description = 'Find the greatest common divisor of given numbers.'

const getGCD = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

const generateRound = () => {
  const a = getRandomInt(1, 100)
  const b = getRandomInt(1, 100)
  const question = `${a} ${b}`
  const correctAnswer = getGCD(a, b).toString()
  return { question, correctAnswer }
}

export default () => gameEngine(description, generateRound)
