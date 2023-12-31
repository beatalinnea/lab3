/**
 * Generator Class for generating math problems.
 */
export class Generator {
  #numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  #method = '*' // default

  /**
   * Constructor for the Generator class. If no method is provided, the default method is multiplication.
   *
   * @param {string} method - Must be "+", "-", "*" or "/".
   */
  constructor (method) {
    if (method) {
      this.#setMethod(method)
    }
  }

  #setMethod (method) {
    if (method === '+' || method === '-' || method === '*' || method === '/') {
      this.#method = method
    } else {
      throw new Error('Invalid argument - must be "+", "-", "*" or "/"')
    }
  }

  generateMathProblem () {
    const number1 = this.#generateRandomNum()
    const number2 = this.#generateRandomNum()
    return `${number1} ${this.#method} ${number2}`
  }

  /**
   * Generates a set of math problems for all numbers between 1-9 to be the initial operand in the problem.
   *
   * @param {number} amountPerNumber - For each number between 1-9, how many problems should be generated.
   * @returns {string[]} An array of math problems in the form of strings.
   */
  generateMathProblemsMix (amountPerNumber) {
    const mathProblems = []
    for (const number of this.#numbers) {
      mathProblems.push(...this.#generateProblemsForNumber(number, amountPerNumber))
    }
    return mathProblems
  }

  #generateProblemsForNumber (initialOperand, problemsPerNumber) {
    const problems = []
    for (let i = 0; i < problemsPerNumber; i++) {
      problems.push(`${initialOperand} ${this.#method} ${this.#generateRandomNum()}`)
    }
    return problems
  }

  #generateRandomNum () {
    return this.#numbers[Math.floor(Math.random() * this.#numbers.length)]
  }
}
