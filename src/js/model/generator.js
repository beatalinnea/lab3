/* eslint-disable jsdoc/require-jsdoc */
/**
 * Class for generating a set of questions.
 */
export class Generator {
  #numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  #method = '+' // default

  constructor (method) {
    this.setMethod(method)
  }

  setMethod (method) {
    if (method === '+' || method === '-' || method === '*' || method === '/') {
      this.#method = method
    } else {
      throw new Error('Invalid method')
    }
  }

  getQuestion (method) {
    const number1 = this.#getRandomNumber()
    const number2 = this.#getRandomNumber()
    if (method) {
      return `${number1} ${method} ${number2}`
    } else {
      return `${number1} ${this.#method} ${number2}`
    }
  }

  #getRandomNumber () {
    const random = this.#numbers[Math.floor(Math.random() * this.#numbers.length)]
    return random
  }
}
