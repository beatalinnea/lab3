/* eslint-disable jsdoc/require-jsdoc */

/**
 * Class for handling Input.
 */
export class Input {
  #dataForm = null
  #inputElement = null

  constructor () {
    this.#dataForm = document.getElementById('data-form')
    this.#inputElement = document.getElementById('data-input')

    this.#dataForm.addEventListener('submit', (Event) => {
      Event.preventDefault()
      const inputEvent = new CustomEvent('inputChanged', {
        detail: this.#inputElement.value
      })
      this.#inputElement.value = ''
      document.dispatchEvent(inputEvent)
    })
  }

  clearInputForm () {
    this.#dataForm.remove()
  }

  // controller can do this?
  createNewCanvas () {
    const canvas = document.createElement('canvas')
    canvas.setSize()
    canvas.width = 500
    canvas.height = 500
    return canvas
  }
}
