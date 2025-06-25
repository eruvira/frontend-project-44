import gameEngine from '../index.js'
import getRandomInt from '../utility/generateRandomInt.js'

const description = `Answer "yes" if given number is prime. Otherwise answer "no".`

const isPrime = (num) => {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false
  }
  return true
}

const generateRound = () => {
  const number = getRandomInt(2, 100)
  const question = `${number}`
  const correctAnswer = isPrime(number) ? 'yes' : 'no'
  return { question, correctAnswer }
}

export default () => gameEngine(description, generateRound)
