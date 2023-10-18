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
    this.#questions = generator.generateMathProblemsMix(questionsPerTable)
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

  createResultGraph (canvas) {
    const correctedQuestions = this.#correctQuestions()
    const maxCorrectAnswers = this.#questionsAndAnswers.length / 9
    const graph = new Graph(canvas)
    graph.createGraph(correctedQuestions, maxCorrectAnswers)
  }

  #correctQuestions () {
    return this.#corrector.getTimesTablesStats(this.#questionsAndAnswers)
  }

  getFeedback () {
    const correctedAnswers = this.#correctQuestions()
    const feedbackCategories = {
      reallyNeedPractice: [],
      needPractice: [],
      perfect: []
    }

    for (const corrected of correctedAnswers) {
      if (corrected.amountCorrect === 0) {
        feedbackCategories.reallyNeedPractice.push(corrected.timesTable)
      } else if (corrected.amountIncorrect === 0) {
        feedbackCategories.perfect.push(corrected.timesTable)
      } else {
        feedbackCategories.needPractice.push(corrected.timesTable)
      }
    }
    return this.#generateFeedbackString(feedbackCategories)
  }

  #generateFeedbackString (feedbackCategories) {
    let feedbackString = ''
    if (feedbackCategories.perfect.length > 0) {
      feedbackString += `You are the master of time tables ${feedbackCategories.perfect.join(', ')}... `
    }
    if (feedbackCategories.needPractice.length > 0) {
      feedbackString += `You need to practice time tables ${feedbackCategories.needPractice.join(', ')}... `
    }
    if (feedbackCategories.reallyNeedPractice.length > 0) {
      feedbackString += `Have you ever heard of time tables ${feedbackCategories.reallyNeedPractice.join(', ')}? `
    }
    return feedbackString
  }
}
