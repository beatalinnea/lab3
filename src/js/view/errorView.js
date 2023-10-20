/**
 * Class for viewing catched errors.
 */
export class ErrorView {
  constructor (errorMessage) {
    this.errorMessage = errorMessage
  }

  viewError () {
    const errorContainer = document.getElementById('result-container')
    const errorText = document.createElement('p')
    errorText.textContent = this.errorMessage
    errorContainer.appendChild(errorText)
  }
}
