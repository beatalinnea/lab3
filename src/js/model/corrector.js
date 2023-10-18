/* eslint-disable jsdoc/require-jsdoc */
/**
 * Class for correcting multiplication questions.
 */
export class Corrector {
  getTimesTablesStats (questionsAndAnswers) {
    if (!Array.isArray(questionsAndAnswers)) {
      throw new Error('Input must be an array of objects')
    }
    const correctedAnswers = []
    for (const questionAndAnswer of questionsAndAnswers) {
      const whichTimesTable = this.#getWhichTimesTable(questionAndAnswer.question)
      const isCorrect = this.#isCorrect(questionAndAnswer.question, questionAndAnswer.answer)
      const correctedAnswer = {
        timesTable: whichTimesTable,
        isCorrect
      }
      correctedAnswers.push(correctedAnswer)
    }
    return this.#toStats(correctedAnswers)
  }

  #getWhichTimesTable (question) {
    const numbers = question.split('*')
    const number1 = parseInt(numbers[0])
    return number1
  }

  #isCorrect (question, answer) {
    const correctAnswer = this.#getCorrectAnswer(question)
    // boolean - returns true if correct, false if not
    return parseInt(answer) === correctAnswer
  }

  #getCorrectAnswer (question) {
    const numbers = question.split('*')
    const number1 = parseInt(numbers[0].trim())
    const number2 = parseInt(numbers[1].trim())
    return number1 * number2
  }

  #toStats (correctedAnswers) {
    const stats = []

    for (const correctedAnswer of correctedAnswers) {
      const timesTable = correctedAnswer.timesTable
      let timesTableStats = stats.find(stat => stat.timesTable === timesTable)

      if (!timesTableStats) {
        timesTableStats = {
          timesTable,
          amountCorrect: 0,
          amountIncorrect: 0
        }
        stats.push(timesTableStats)
      }

      if (correctedAnswer.isCorrect) {
        timesTableStats.amountCorrect++
      } else {
        timesTableStats.amountIncorrect++
      }
    }
    return stats
  }
}
