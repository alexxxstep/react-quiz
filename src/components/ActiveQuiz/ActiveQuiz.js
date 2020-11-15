import React from 'react'
import AnswersList from '../AnswerList/AnswersList'
import styles from './ActiveQuiz.module.css'

const ActiveQuiz = (props) => {
  // console.log('ActiveQuiz: ', props)
  return (
    <div className={styles.ActiveQuiz}>
      <p className={styles.Question}>
        <span>
          <strong>2. </strong>
          &nbsp;{props.question}
        </span>
        <small>4 from 12</small>
      </p>

      <AnswersList
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
      />
    </div>
  )
}

export default ActiveQuiz
