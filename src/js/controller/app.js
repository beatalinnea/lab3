/* eslint-disable jsdoc/require-jsdoc */
import { Input } from '../view/input.js'
import { Output } from '../view/output.js'

/**
 * The main starting point of the application.
 */
class App {
  input = new Input()
  output = new Output()

  constructor () {
    document.addEventListener('inputChanged', (e) => {
      this.output.showResult(e.detail)
    })
  }

  printHello () {
    console.log('hello')
  }
}

try {
  const app = new App()
  app.printHello()
} catch (e) {
  // error message send to view
  console.log(e)
}
