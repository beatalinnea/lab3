/* eslint-disable jsdoc/require-jsdoc */

/**
 * Class for handling Radio button Input.
 */
export class RadioInput {
  #radioForm
  #radioButtons

  constructor () {
    this.#radioForm = document.getElementById('radio-form')
    this.#radioButtons = document.querySelectorAll('input[type="radio"]')

    this.setupButtonListeners()
  }

  setupButtonListeners () {
    this.#radioButtons.forEach((radio) => {
      radio.addEventListener('change', () => {
        this.#handleRadioChange(radio)
      })
    })
  }

  #handleRadioChange (radio) {
    if (!radio.checked) return
    this.#dispatchMadeChoiceEvent(radio.value)
  }

  #dispatchMadeChoiceEvent (value) {
    const choiceEvent = new CustomEvent('madeChoice', { detail: value })
    document.dispatchEvent(choiceEvent)
  }

  showRadioForm () {
    this.#radioForm.classList.remove('hidden')
  }

  hideRadioForm () {
    this.#radioForm.classList.add('hidden')
  }
}
