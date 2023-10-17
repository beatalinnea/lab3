/* eslint-disable jsdoc/require-jsdoc */
import { Canvas } from '../view/canvas.js'
import { Input } from '../view/input.js'
import { Output } from '../view/output.js'
import { MathGame } from '../model/mathGame.js'

/**
 * The main starting point of the application.
 */
class App {
  #input = new Input()
  #output = new Output()
  #mathGame = new MathGame()
  #questions = []

  constructor () {
    this.#questions = this.#mathGame.getQuestions(2)
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
    console.log(this.#mathGame.getFeedback())
    this.#output.showResult(this.#mathGame.getFeedback())
    this.showGraph()
  }

  showGraph () {
    const canvasElement = new Canvas()
    this.#mathGame.createResultGraph(canvasElement.getCanvas())
  }

  printHello (hello) {
    console.log(hello)
  }
}

try {
  const app = new App()
  app.printHello('hej')
} catch (e) {
  // error message send to view
  console.log(e)
}
