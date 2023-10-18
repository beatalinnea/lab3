/* eslint-disable jsdoc/require-jsdoc */

/**
 * Class for handling Answer Input.
 */
export class AnswerInput {
  #dataForm
  #inputElement

  constructor () {
    this.#dataForm = document.getElementById('data-form')
    this.#inputElement = document.getElementById('data-input')

    this.#setupInputListener()
  }

  #setupInputListener () {
    this.#dataForm.addEventListener('submit', (event) => {
      event.preventDefault()
      this.#handleInputEvent(this.#inputElement.value)
      this.#inputElement.value = ''
    })
  }

  #handleInputEvent (inputValue) {
    const inputEvent = new CustomEvent('inputChanged', { detail: inputValue })
    document.dispatchEvent(inputEvent)
  }

  showInputForm () {
    this.#dataForm.classList.remove('hidden')
  }

  hideInputForm () {
    this.#dataForm.classList.add('hidden')
  }

  clearInputForm () {
    this.#dataForm.remove()
  }
}
