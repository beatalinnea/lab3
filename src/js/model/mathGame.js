/* eslint-disable jsdoc/require-jsdoc */
import { Generator } from './generator.js'

/**
 * @class Questions
 */
export class MathGame {
  getMixedQuestion () {
    const questions = []
    questions.push(this.createQuestions(5, '+'))
    questions.push(this.createQuestions(5, '-'))
    questions.push(this.createQuestions(5, '*'))
    questions.push(this.createQuestions(5, '/'))
    return questions.flat()
  }

  getMultiplicationProblems (amount) {
    const generator = new Generator('*')
    return generator.generateMultiplicationTable(amount)
  }

  createQuestions (amount, method) {
    const generator = new Generator(method)
    const questions = []
    for (let i = 0; i < amount; i++) {
      questions.push(generator.getMathProblem())
    }
    return questions
  }
}
