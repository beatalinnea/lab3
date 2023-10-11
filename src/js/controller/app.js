/* eslint-disable jsdoc/require-jsdoc */
import { Input } from '../view/input.js'
import { Output } from '../view/output.js'
import { MathGame } from '../model/mathGame.js'

/**
 * The main starting point of the application.
 */
class App {
  input = new Input()
  output = new Output()
  mathGame = new MathGame()
  questions = null
  answers = []

  constructor () {
    this.questions = this.mathGame.getMixedQuestion()
    let counter = 0
    this.showQuestion(counter)
    document.addEventListener('inputChanged', (e) => {
      // save input to answers instead.
      // this.output.showResult(e.detail)
      this.answers.push(e.detail)
      counter++
      if (counter < this.questions.length) {
        this.showQuestion(counter)
      } else {
        this.showDone()
      }
    })
    this.printHello(this.questions)
  }

  showQuestion (index) {
    this.output.setLabel(this.questions[index])
  }

  showDone () {
    this.output.setLabel('Done')
    console.log(this.answers)
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
