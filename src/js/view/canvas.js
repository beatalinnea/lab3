/* eslint-disable jsdoc/require-jsdoc */
/**
 * Class for handling the Canvas element.
 */
export class Canvas {
  constructor () {
    this.canvas = document.getElementById('my-canvas')
  }

  getCanvas () {
    return this.canvas
  }
}
