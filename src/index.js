import readlineSync from 'readline-sync'
import greeting from './cli.js'

const roundsCount = 3;

export default function gameEngine(description, generateRound) {
  const name = greeting()
  console.log(description)

  for (let i = 0; i < roundsCount; i += 1) {
    const { question, correctAnswer } = generateRound()

    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      )
      console.log(`Let's try again, ${name}!`)
      return
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}
