import { BarChart } from 'very-simple-bar-chart'
/**
 * Class for handling a graph.
 */
export class Graph {
  #barChart

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
    this.#barChart.addHeadline(`Correct answer out of ${maxScore}`)
    this.#barChart.changeSize(700, 300)
    this.#barChart.changeBackgroundColor('rgb(114, 189, 255)')
  }

  #convertToDataEntries (result) {
    const axisValues = []
    for (const obj of result) {
      const newValue = {}
      newValue.x = `table ${obj.timesTable}`
      newValue.y = obj.amountCorrect
      axisValues.push(newValue)
    }
    return axisValues
  }
}
