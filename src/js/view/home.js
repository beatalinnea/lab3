/* eslint-disable jsdoc/require-jsdoc */

/**
 * Class for handling Input.
 */
export class Home {
  #radioForm
  #radioButtons

  constructor () {
    this.#radioForm = document.getElementById('radio-form')
    this.#radioButtons = document.querySelectorAll('input[type="radio"]')

    this.#listenToButtons()
  }

  #listenToButtons () {
    this.#radioButtons.forEach((radio) => {
      radio.addEventListener('change', () => {
        if (!radio.checked) return
        const choiceEvent = new CustomEvent('madeChoice', { detail: radio.value })
        document.dispatchEvent(choiceEvent)
      })
    })
  }

  hideRadioForm () {
    this.#radioForm.classList.add('hidden')
  }
}
