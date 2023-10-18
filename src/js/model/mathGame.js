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

  getQuestions (questionsPerTable) {
    const generator = new Generator('*')
    this.#questions = generator.getMixedMathProblems(questionsPerTable)
    return [...this.#questions]
  }

  addAnswerToQuestion (questionIndex, answer) {
    if (!this.#questions) {
      throw new Error('No questions to answer')
    }
    const question = this.#questions[questionIndex]
    const paired = {}
    paired.question = question
    paired.answer = answer
    this.#questionsAndAnswers.push(paired)
  }

  getFeedback () {
    return this.#corrector.getFeedbackString(this.#correctQuestions())
  }

  createResultGraph (canvas) {
    const correctedQuestions = this.#correctQuestions()
    const maxCorrectAnswers = this.#getMaxPossible()
    const graph = new Graph(canvas)
    graph.createGraph(correctedQuestions, maxCorrectAnswers)
  }

  #getMaxPossible () {
    return this.#questionsAndAnswers.length / 9
  }

  #correctQuestions () {
    return this.#corrector.getTimesTablesStats(this.#questionsAndAnswers)
  }
}
