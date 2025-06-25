import gameEngine from '../index.js'
import getRandomInt from '../utility/generateRandomInt.js'

const operators = ['+', '-', '*']

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+': return a + b
    case '-': return a - b
    case '*': return a * b
    default: throw new Error(`Unknown operator ${operator}`)
  }
}

const description = 'What is the result of the expression?'

const generateRound = () => {
  const a = getRandomInt(1, 20)
  const b = getRandomInt(1, 20)
  const operator = operators[getRandomInt(0, operators.length - 1)]
  const question = `${a} ${operator} ${b}`
  const correctAnswer = calculate(a, b, operator).toString()

  return { question, correctAnswer }
}

export default () => gameEngine(description, generateRound)
