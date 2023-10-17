/* eslint-disable jsdoc/require-jsdoc */
import { Canvas } from '../view/canvas.js'
import { Input } from '../view/input.js'
import { Output } from '../view/output.js'
import { Graph } from '../model/graph.js'
import { MathGame } from '../model/mathGame.js'
import { Corrector } from '../model/corrector.js'

/**
 * The main starting point of the application.
 */
class App {
  // views
  input = new Input()
  output = new Output()

  questions
  questionsAndAnswers = []

  constructor () {
    const mathGame = new MathGame()
    this.questions = mathGame.getMultiplicationProblems(2)
    let counter = 0
    this.showQuestion(counter)

    document.addEventListener('inputChanged', (e) => {
      this.pairQuestionWithAnswer(counter, e.detail)
      counter++
      if (counter < this.questions.length) {
        this.showQuestion(counter)
      } else {
        this.showDone()
      }
    })
  }

  pairQuestionWithAnswer (index, answer) {
    const question = this.questions[index]
    const questionAnswerPair = {}

    questionAnswerPair.question = question
    questionAnswerPair.answer = answer

    this.questionsAndAnswers.push(questionAnswerPair)
  }

  showQuestion (index) {
    this.output.setLabel(this.questions[index])
  }

  showDone () {
    this.input.clearInputForm()
    const corrector = new Corrector()
    const stats = corrector.getTimesTablesStats(this.questionsAndAnswers)
    this.output.showResult(corrector.getFeedbackString(stats))
    this.showGraph(stats)
  }

  showGraph (stats) {
    const canvasView = new Canvas()
    const graph = new Graph(canvasView.getCanvas())
    graph.createGraph(stats)
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
