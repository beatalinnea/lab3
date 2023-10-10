/* eslint-disable jsdoc/require-jsdoc */

/**
 * Class for handling Output.
 */
export class Output {
  #result
  constructor () {
    this.#result = document.getElementById('result')
  }

  // controller can do this?
  showResult (result) {
    this.clearResult()
    const p = document.createElement('p')
    p.textContent = result
    this.#result.appendChild(p)
  }

  clearResult () {
    if (this.#result.childElementCount !== 0) {
      this.#result.removeChild(this.#result.lastElementChild)
    }
  }
}
