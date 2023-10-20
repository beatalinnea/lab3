import { BarChart } from 'very-simple-bar-chart'

/**
 * Class for wrapping and handling a graph created using external library very-simple-bar-chart.
 */
export class Graph {
  #barChart

  /**
   * Creates a graph using the canvas element.
   *
   * @param {HTMLCanvasElement} canvas - The canvas element to be used in the graph.
   */
  constructor (canvas) {
    this.#barChart = new BarChart(canvas)
  }

  /**
   * Creates a graph based on the data.
   *
   * @param {[object]} gameResult - The data to be used in the graph.
   * @param {number} maxScore - The maximum score possible.
   */
  createGraph (gameResult, maxScore) {
    this.#barChart.addValues(this.#convertToDataEntries(gameResult))
    this.#barChart.addHeadline(`Correct answer out of ${maxScore} possible - Max total is ${maxScore * 9}`)
    this.#barChart.changeSize(700, 300)
    this.#barChart.changeBackgroundColor('rgb(114, 189, 255)')
  }

  #convertToDataEntries (results) {
    const dataEntries = []
    for (const result of results) {
      const newEntry = {}
      newEntry.x = `table ${result.timesTable}`
      newEntry.y = result.amountCorrect
      dataEntries.push(newEntry)
    }
    return dataEntries
  }
}
