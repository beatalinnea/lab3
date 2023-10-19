import { ErrorView } from '../view/errorView.js'
import { Canvas } from '../view/canvas.js'
import { RadioInput } from '../view/radioInput.js'
import { AnswerInput } from '../view/answerInput.js'
import { Output } from '../view/output.js'
import { MathGame } from '../model/mathGame.js'

/**
 * This is the main class of the application.
 */
export class TimesTablesGame {
  #answerInput = new AnswerInput()
  #output = new Output()
  #mathGame = new MathGame()
  #radioInput = new RadioInput()
  #questions = []

  static main () {
    const app = new TimesTablesGame()
    app.makeGameChoice()
  }

  makeGameChoice () {
    document.addEventListener('madeChoice', (e) => {
      try {
        const questionAmount = e.detail
        this.startGame(questionAmount)
      } catch (e) {
        this.#handleError(e)
      }
    })
  }

  startGame (questionAmount) {
    this.#questions = this.#mathGame.getQuestions(questionAmount)
    this.#switchForms()
    this.#runQuestions()
  }

  #switchForms () {
    this.#radioInput.hideRadioForm()
    this.#answerInput.showInputForm()
  }

  #runQuestions () {
    let questionCounter = 0
    this.#showQuestion(questionCounter)
    document.addEventListener('inputChanged', (e) => {
      try {
        this.#mathGame.addAnswerToQuestion(questionCounter, e.detail)
        questionCounter++
        this.#nextQuestion(questionCounter)
      } catch (e) {
        this.#handleError(e)
      }
    })
  }

  #nextQuestion (index) {
    if (index < this.#questions.length) {
      this.#showQuestion(index)
    } else {
      this.#showDone()
    }
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
    const canvas = new Canvas()
    this.#mathGame.createResultGraph(canvas.create())
    canvas.view()
  }

  #handleError (e) {
    this.#answerInput.hideInputForm()
    const errorView = new ErrorView(e.message)
    errorView.viewError()
  }
}

try {
  TimesTablesGame.main()
} catch (e) {
  e.message = 'An unexpected error occurred'
  const errorView = new ErrorView(e.message)
  errorView.viewError()
}
