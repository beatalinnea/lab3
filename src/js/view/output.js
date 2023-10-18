/* eslint-disable jsdoc/require-jsdoc */

/**
 * Class for handling Output.
 */
export class Output {
  #result
  #questionLabel

  constructor () {
    this.#result = document.getElementById('result')
    this.#questionLabel = document.getElementById('question-label')
  }

  viewQuestion (question) {
    this.#questionLabel.textContent = question
  }

  showResult (gameResult) {
    this.#result.textContent = gameResult
    const tryAgainButton = document.getElementById('try-again')
    tryAgainButton.classList.remove('hidden')
  }

  showErrorMessage (message) {
    this.#result.textContent = message
  }
}
