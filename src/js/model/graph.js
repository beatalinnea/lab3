/* eslint-disable jsdoc/require-jsdoc */
import { BarChart } from 'very-simple-bar-chart'
/**
 * Class for handling a graph.
 */
export class Graph {
  #barChart

  constructor (canvas) {
    this.#barChart = new BarChart(canvas)
  }

  /*
  convertArray (array) {
    const dataArray = []
    for (const obj of array) {
      let amount = 0
      amount = obj.isCorrect
      for (let i = 0; i < amount; i++) {
        dataArray.push(obj.timesTable)
      }
    }
    return dataArray
  }
  */

  convertData (array) {
    const dataArray = []
    for (const obj of array) {
      const newObj = {}
      newObj.x = `table ${obj.timesTable}`
      newObj.y = obj.isCorrect
      dataArray.push(newObj)
    }
    return dataArray
  }

  createGraph (array) {
    this.#barChart.addSpecificValues(this.convertData(array))
    this.#barChart.addHeadline(`Correct Values out of ${(array[0].isCorrect + array[0].isIncorrect)}`)
    this.#barChart.resize(600, 300)
  }
}
