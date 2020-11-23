import React, { Component } from 'react'
import styles from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

export default class Quiz extends Component {
  state = {
    results: {},
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
    // console.log('answerId', answerId)

    // debugger
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]

      console.log('KEY', key)
      if (this.state.answerState[key] === 'success') {
        return
      }
    }

    const question = this.state.quiz[this.state.activeQuestion]
    const questionId = this.state.quiz[this.state.activeQuestion].id
    const results = this.state.results

    if (question.rightAnswerId === answerId) {
      if (!results[questionId]) {
        results[questionId] = 'success'
      }

      this.setState({
        answerState: { [answerId]: 'success' },
        results,
      })
    } else {
      results[questionId] = 'error'
      this.setState({
        answerState: { [answerId]: 'error' },
        results,
      })
    }

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
    }, 1000)
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {},
    })
  }

  componentDidMount  ()  {
    console.log('Quiz ID = ', this.props.match.params.id)

  }



  render() {
    return (
      <div className={styles.Quiz}>
        <div className={styles.QuizWrapper}>
          <h1>Choose the right answers:</h1>

          {this.state.isFinished ? (
            <FinishedQuiz
              quiz={this.state.quiz}
              results={this.state.results}
              onRetry={this.retryHandler}
            />
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
