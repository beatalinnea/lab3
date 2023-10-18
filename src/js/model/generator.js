/* eslint-disable jsdoc/require-jsdoc */
/**
 * Class for generating a set of questions.
 */
export class Generator {
  #numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  #method = '*' // default

  constructor (method) {
    if (method) {
      this.setMethod(method)
    }
  }

  setMethod (method) {
    if (method === '+' || method === '-' || method === '*' || method === '/') {
      this.#method = method
    } else {
      throw new Error('Invalid argument - must be "+", "-", "*" or "/"')
    }
  }

  generateMathProblem (method) {
    const number1 = this.#getRandomNumber()
    const number2 = this.#getRandomNumber()
    if (method) {
      return `${number1} ${method} ${number2}`
    } else {
      return `${number1} ${this.#method} ${number2}`
    }
  }

  // problems per 1 - 9 as the parameter.
  getMixedMathProblems (problemsPerNumber) {
    const multiplicationProblems = []

    for (const number of this.#numbers) {
      for (let i = 0; i < problemsPerNumber; i++) {
        multiplicationProblems.push(`${number} ${this.#method} ${this.#getRandomNumber()}`)
      }
    }
    return multiplicationProblems
  }

  #getRandomNumber () {
    const random = this.#numbers[Math.floor(Math.random() * this.#numbers.length)]
    return random
  }
}
