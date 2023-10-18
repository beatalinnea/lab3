/* eslint-disable jsdoc/require-jsdoc */
/**
 * Class containing methods for creating and appending a canvas element to the DOM.
 */
export class Canvas {
  create () {
    this.canvas = document.createElement('canvas')
    return this.canvas
  }

  view () {
    if (!this.canvas) {
      throw new Error('Canvas not created')
    }
    const resultContainer = document.getElementById('result-container')
    resultContainer.appendChild(this.canvas)
  }
}
