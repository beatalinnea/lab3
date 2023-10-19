import { Generator } from './generator.js'
import { Graph } from './graph.js'
import { Corrector } from './corrector.js'

/**
 * Class for handling the main business logic of the math game.
 */
export class MathGame {
  #corrector = new Corrector()
  #questions
  #questionsAndAnswers = []

  /**
   * Gives you math problems for the game.
   *
   * @param {number} questionsPerTable - How many questions should be generated for each times table.
   * @returns {string[]} An array of math problems in the form of strings.
   */
  getQuestions (questionsPerTable) {
    const generator = new Generator('*')
    this.#questions = generator.generateMathProblemsMix(questionsPerTable)
    return [...this.#questions]
  }

  /**
   * Pairs the sent in answer with the question.
   *
   * @param {number} questionIndex - which question was answered.
   * @param {number} answer - The answer to the math question.
   */
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

  /**
   * Edits a graph showing the results based on the questions and given answers.
   *
   * @param {HTMLCanvasElement} canvas - The canvas element to be used in the graph.
   */
  createResultGraph (canvas) {
    const correctedQuestions = this.#correctQuestions()
    const maxCorrectAnswers = this.#questionsAndAnswers.length / 9
    const graph = new Graph(canvas)
    graph.createGraph(correctedQuestions, maxCorrectAnswers)
  }

  #correctQuestions () {
    return this.#corrector.correctAnswers(this.#questionsAndAnswers)
  }

  /**
   * Gives feedback based on the results of the game.
   *
   * @returns {string} A feedback string based on the results of the game.
   */
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
      feedbackString += `You are the master of times tables ${feedbackCategories.perfect.join(', ')}... `
    }
    if (feedbackCategories.needPractice.length > 0) {
      feedbackString += `You need to practice times tables ${feedbackCategories.needPractice.join(', ')}... `
    }
    if (feedbackCategories.reallyNeedPractice.length > 0) {
      feedbackString += `Have you ever heard of times tables ${feedbackCategories.reallyNeedPractice.join(', ')}? `
    }
    return feedbackString
  }
}
