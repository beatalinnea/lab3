/**
 * Class for viewing catched errors.
 */
export class ErrorView {
  /**
   * Constructor for the ErrorView class.
   *
   * @param {Error} errorMessage - The error to be viewed.
   */
  constructor (errorMessage) {
    this.errorMessage = errorMessage
  }

  /**
   * View the error.
   */
  viewError () {
    const errorContainer = document.getElementById('result-container')
    const errorText = document.createElement('p')
    errorText.textContent = this.errorMessage
    errorContainer.appendChild(errorText)
  }
}
