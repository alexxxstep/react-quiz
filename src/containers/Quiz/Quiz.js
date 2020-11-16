import React, { Component } from 'react'
import styles from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

export default class Quiz extends Component {
  state = {
    results: {}, // {[id]: 'success' 'error'}
    isFinished: false,
    activeQuestion: 0,
    answerState: null, // {[id]: 'success' 'error'}
    quiz: [
      {
        id: 1,
        question: 'What color is sky?',
        rightAnswerId: 1,
        answers: [
          { text: 'blue', id: 1 },
          { text: 'green', id: 2 },
          { text: 'gray', id: 3 },
          { text: 'black', id: 4 },
        ],
      },
      {
        id: 2,
        question: 'What color is snow?',
        rightAnswerId: 3,
        answers: [
          { text: 'blue', id: 1 },
          { text: 'green', id: 2 },
          { text: 'white', id: 3 },
          { text: 'black', id: 4 },
        ],
      },
    ],
  }

  onAnswerClickHandler = (answerId) => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]

      if (this.state.answerState[key] === 'success') {
        return
      }
    }

    const question = this.state.quiz[this.state.activeQuestion]
    const results = this.state.results

    if (question.rightAnswerId === answerId) {
      if (!results[answerId]) {
        results[answerId] = 'success'
      }

      this.setState({
        answerState: { [answerId]: 'success' },
        results,
      })

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({ isFinished: true })
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          })
        }

        window.clearTimeout(timeout)
      }, 2000)
    } else {
      results[answerId] = 'error'
      this.setState({
        answerState: { [answerId]: 'error' },

        results,
      })
    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  render() {
    return (
      <div className={styles.Quiz}>
        <div className={styles.QuizWrapper}>
          <h1>Choose the right answers:</h1>

          {this.state.isFinished ? (
            <FinishedQuiz quiz={this.state.quiz} results={this.state.results} />
          ) : (
            <ActiveQuiz
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
            />
          )}
        </div>
      </div>
    )
  }
}
