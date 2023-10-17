/* eslint-disable jsdoc/require-jsdoc */
import { Canvas } from '../view/canvas.js'
import { Home } from '../view/home.js'
import { Input } from '../view/input.js'
import { Output } from '../view/output.js'
import { MathGame } from '../model/mathGame.js'

/**
 * The game of the application.
 */
export class Game {
  #input = new Input()
  #output = new Output()
  #mathGame = new MathGame()
  #home = new Home()
  #questions = []

  start () {
    document.addEventListener('madeChoice', (e) => {
      this.#home.hideRadioForm()
      this.startGame(e.detail)
    })
  }

  startGame (amount) {
    this.#input.showInputForm()
    this.#questions = this.#mathGame.getQuestions(amount)
    let questionCounter = 0
    this.showQuestion(questionCounter)

    document.addEventListener('inputChanged', (e) => {
      this.#mathGame.addAnswer(questionCounter, e.detail)
      questionCounter++
      if (questionCounter < this.#questions.length) {
        this.showQuestion(questionCounter)
      } else {
        this.showDone()
      }
    })
  }

  showQuestion (index) {
    this.#output.setLabel(this.#questions[index])
  }

  showDone () {
    this.#input.clearInputForm()
    this.#output.showResult(this.#mathGame.getFeedback())
    this.showGraph()
  }

  showGraph () {
    const canvasElement = new Canvas()
    this.#mathGame.createResultGraph(canvasElement.getCanvas())
  }
}

try {
  const game = new Game()
  game.start()
} catch (e) {
  // error message send to view
  console.log(e)
}
