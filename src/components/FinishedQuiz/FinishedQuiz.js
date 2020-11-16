import React from 'react'
import styles from './FinishedQuiz.module.css'

const FinishedQuiz = (props) => {
  const results = props.results

  console.log(results)

  return (
    <div className={styles.FinishedQuiz}>
      <ul>
        {props.quiz.map((quizItem, index) => {
          return (
            <li key={index}>
              <strong>{quizItem.id}. </strong>
              {quizItem.question}
              <i className={'material-icons ' + styles.error}>clear</i>
            </li>
          )
        })}

        {/* <li>
          <strong>1. </strong>
          How are you
          <i className={'material-icons ' + styles.error}>clear</i>
        </li>
        <li>
          <strong>2. </strong>
          How are you
          <i className={'material-icons ' + styles.success}>check_circle</i>
        </li> */}
      </ul>

      <p>Wright 4 from 12</p>

      <div className={''}>
        <button>Repeat</button>
      </div>
    </div>
  )
}

export default FinishedQuiz
