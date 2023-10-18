/* eslint-disable jsdoc/require-jsdoc */
import { ErrorView } from '../view/errorView.js'
import { Canvas } from '../view/canvas.js'
import { RadioInput } from '../view/radioInput.js'
import { AnswerInput } from '../view/answerInput.js'
import { Output } from '../view/output.js'
import { MathGame } from '../model/mathGame.js'

/**
 * The game of the application.
 */
export class App {
  #answerInput = new AnswerInput()
  #output = new Output()
  #mathGame = new MathGame()
  #radioInput = new RadioInput()
  #questions = []

  static main () {
    const app = new App()
    app.start()
  }

  start () {
    document.addEventListener('madeChoice', (e) => {
      try {
        this.#radioInput.hideRadioForm()
        this.startGame(e.detail)
      } catch (e) {
        this.#handleError(e)
      }
    })
  }

  // event listener, need try catch.
  startGame (amount) {
    this.#answerInput.showInputForm()
    this.#questions = this.#mathGame.getQuestions(amount)
    let questionCounter = 0
    this.#showQuestion(questionCounter)

    document.addEventListener('inputChanged', (e) => {
      try {
        this.#mathGame.addAnswer(questionCounter, e.detail)
        questionCounter++
        if (questionCounter < this.#questions.length) {
          this.#showQuestion(questionCounter)
        } else {
          this.#showDone()
        }
      } catch (e) {
        this.#handleError(e)
      }
    })
  }

  #showQuestion (index) {
    this.#output.viewQuestion(this.#questions[index])
  }

  #showDone () {
    this.#answerInput.clearInputForm()
    this.#output.showResult(this.#mathGame.getFeedback())
    this.#showGraph()
  }

  #showGraph () {
    const canvasElement = new Canvas()
    this.#mathGame.createResultGraph(canvasElement.createCanvas())
    canvasElement.viewCanvas()
  }

  #handleError (e) {
    const errorView = new ErrorView(e.message)
    errorView.viewError()
  }
}

try {
  App.main()
} catch (e) {
  e.message = 'An unexpected error occurred'
  const errorView = new ErrorView(e.message)
  errorView.viewError()
}
