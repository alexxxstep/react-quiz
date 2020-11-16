import React from 'react'
import AnswersList from '../ActiveQuiz/AnswerList/AnswersList'
import styles from './ActiveQuiz.module.css'

const ActiveQuiz = (props) => {
  // console.log('ActiveQuiz: ', props)
  return (
    <div className={styles.ActiveQuiz}>
      <p className={styles.Question}>
        <span>
          <strong>{props.answerNumber}.</strong>
          &nbsp;{props.question}
        </span>
        <small>{props.answerNumber} from {props.quizLength}</small>
      </p>

      <AnswersList  answers={props.answers} onAnswerClick={props.onAnswerClick}
      state={props.state} />
    </div>
  )
}

export default ActiveQuiz
