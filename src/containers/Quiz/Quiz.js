import React, {Component} from 'react'
import styles from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

export default class Quiz extends Component {
  state = {
    quiz: [
      {
        question: 'What color is sky?',
        rightAnswerId: 2,
        answers: [
          {text: 'blue', id: 1},
          {text: 'green', id: 2},
          {text: 'gray', id: 3},
          {text: 'black', id: 4},
        ],
      },
    ],
  }

  onAnswerClickHandler = (answerId) => {
    console.log('answerId: ', answerId)
  }

  render() {
    return (
      <div className={styles.Quiz}>
        <div className={styles.QuizWrapper}>
          <h1>Choose the right answers:</h1>
          <ActiveQuiz
            question={this.state.quiz[0].question}
            answers={this.state.quiz[0].answers}
            onAnswerClick={this.onAnswerClickHandler}
          />
        </div>
      </div>
    )
  }
}
