/* eslint-disable jsdoc/require-jsdoc */

/**
 * Class for handling Output.
 */
export class Output {
  #result
  #label

  constructor () {
    this.#result = document.getElementById('result')
    this.#label = document.getElementById('input-label')
  }

  setLabel (label) {
    this.#label.textContent = label
  }

  showResult (result) {
    this.#result.textContent = result
    const tryAgainButton = document.getElementById('try-again')
    tryAgainButton.classList.remove('hidden')
  }

  showResultTestObject (result) {
    this.#result.textContent = JSON.stringify(result)
  }
}
