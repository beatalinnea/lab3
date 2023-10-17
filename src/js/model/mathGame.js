/* eslint-disable jsdoc/require-jsdoc */
import { Generator } from './generator.js'
import { Graph } from './graph.js'
import { Corrector } from './corrector.js'

/**
 * @class MathGame
 */
export class MathGame {
  #corrector = new Corrector()
  #questions
  #questionsAndAnswers = []

  getQuestions (amountPerNumber) {
    const generator = new Generator('*')
    this.#questions = generator.generateMixedMathProblems(amountPerNumber)
    return [...this.#questions]
  }

  addAnswer (questionIndex, answer) {
    const question = this.#questions[questionIndex]
    const questionAnswerPair = {}

    questionAnswerPair.question = question
    questionAnswerPair.answer = answer

    this.#questionsAndAnswers.push(questionAnswerPair)
  }

  #correctProblems () {
    const stats = this.#corrector.getTimesTablesStats(this.#questionsAndAnswers)
    return stats
  }

  getFeedback () {
    return this.#corrector.getFeedbackString(this.#correctProblems())
  }

  createResultGraph (canvas) {
    const graph = new Graph(canvas)
    graph.createGraph(this.#correctProblems())
  }
}
