/**
 * Class for correcting multiplication questions.
 */
export class Corrector {
  /**
   * Corrects the answers of the questions. Questions and answers should be equal after correction to be correct.
   *
   * @param {object[]} questionsAndAnswers - Key value pairs of questions and answers { question: '2 * 3', answer: '6' }
   * @returns {object[]} result - Amount of incorrect and correct answers for each times table.
   */
  correctAnswers (questionsAndAnswers) {
    const correctedAnswers = []
    for (const questionAndAnswer of questionsAndAnswers) {
      const whichTimesTable = this.#extractTimesTable(questionAndAnswer.question)
      const isCorrect = this.#isCorrect(questionAndAnswer.question, questionAndAnswer.answer)
      const correctedAnswer = {
        timesTable: whichTimesTable,
        isCorrect
      }
      correctedAnswers.push(correctedAnswer)
    }
    return this.#calculateStatistics(correctedAnswers)
  }

  #extractTimesTable (question) {
    const numbers = question.split('*')
    const initialOperand = parseInt(numbers[0])
    return initialOperand
  }

  #isCorrect (question, answer) {
    const correctAnswer = this.#getCorrectAnswer(question)
    return parseInt(answer) === correctAnswer
  }

  #getCorrectAnswer (question) {
    const numbers = question.split('*')
    const number1 = parseInt(numbers[0].trim())
    const number2 = parseInt(numbers[1].trim())
    return number1 * number2
  }

  #calculateStatistics (correctedAnswers) {
    const results = []
    for (const answer of correctedAnswers) {
      const timesTable = answer.timesTable
      let timesTableStats = results.find(stat => stat.timesTable === timesTable)
      if (!timesTableStats) {
        timesTableStats = { timesTable, amountCorrect: 0, amountIncorrect: 0 }
        results.push(timesTableStats)
      }
      if (answer.isCorrect) {
        timesTableStats.amountCorrect++
      } else {
        timesTableStats.amountIncorrect++
      }
    }
    return results
  }
}
