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

  generateMathProblem () {
    const number1 = this.generateRandomNum()
    const number2 = this.generateRandomNum()
    return `${number1} ${this.#method} ${number2}`
  }

  generateMathProblemsMix (problemsPerNumber) {
    const mathProblems = []
    for (const number of this.#numbers) {
      mathProblems.push(...this.#generateProblemsForNumber(number, problemsPerNumber))
    }
    return mathProblems
  }

  #generateProblemsForNumber (initialOperand, problemsPerNumber) {
    const problems = []
    for (let i = 0; i < problemsPerNumber; i++) {
      problems.push(`${initialOperand} ${this.#method} ${this.generateRandomNum()}`)
    }
    return problems
  }

  generateRandomNum () {
    const random = this.#numbers[Math.floor(Math.random() * this.#numbers.length)]
    return random
  }
}
