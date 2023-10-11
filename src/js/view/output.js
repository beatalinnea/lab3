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

  setLabel (question) {
    this.#label.textContent = question
  }

  showResult (result) {
    this.#result.textContent = result
  }
}
