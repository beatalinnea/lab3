/* eslint-disable jsdoc/require-jsdoc */

/**
 * Class for handling Answer Input.
 */
export class AnswerInput {
  #gameForm
  #answerInputField

  constructor () {
    this.#gameForm = document.getElementById('game-form')
    this.#answerInputField = document.getElementById('answer-input')
    this.#setupInputListener()
  }

  #setupInputListener () {
    this.#gameForm.addEventListener('submit', (event) => {
      event.preventDefault()
      this.#handleInputEvent(this.#answerInputField.value)
      this.#answerInputField.value = ''
    })
  }

  #handleInputEvent (inputValue) {
    const inputEvent = new CustomEvent('inputChanged', { detail: inputValue })
    document.dispatchEvent(inputEvent)
  }

  showInputForm () {
    this.#gameForm.classList.remove('hidden')
  }

  hideInputForm () {
    this.#gameForm.classList.add('hidden')
  }

  clearInputForm () {
    this.#gameForm.remove()
  }
}
