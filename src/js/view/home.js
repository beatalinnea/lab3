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

    // Add event listeners to radio buttons
    this.#addListeners()
  }

  #addListeners () {
    this.#radioButtons.forEach((radio) => {
      radio.addEventListener('change', function () {
        if (this.checked) {
          const choiceEvent = new CustomEvent('madeChoice', {
            detail: this.value
          })
          document.dispatchEvent(choiceEvent)
        }
      })
    })
  }

  hideRadioForm () {
    this.#radioForm.classList.add('hidden')
  }
}
