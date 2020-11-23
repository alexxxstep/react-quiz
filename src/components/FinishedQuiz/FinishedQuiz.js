import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../UI/Button/Button'
import styles from './FinishedQuiz.module.css'

const FinishedQuiz = (props) => {
  const successCounter = Object.keys(props.results).reduce((acc, key) => {
    if (props.results[key] === 'success') {
      acc++
    }
    return acc
  }, 0)

  // console.log('successCounter', successCounter)

  return (
    <div className={styles.FinishedQuiz}>
      <ul>
        {props.quiz.map((quizItem, index) => {
          let style = {}

          if (props.results[quizItem.id] === 'success') {
            style = {
              cls: 'success',
              val: 'check_circle',
            }
          } else {
            style = {
              cls: 'error',
              val: 'clear',
            }
          }

          return (
            <li key={index}>
              <strong>{index + 1}. </strong>
              {quizItem.question}
              <i className={'material-icons ' + styles[style.cls]}>
                {style.val}
              </i>
            </li>
          )
        })}
      </ul>

      <p>
        {`Wright ${successCounter}`} from {props.quiz.length}
      </p>

      <div className={''}>
        <Button onClick={props.onRetry} type="primary">
          repeat
        </Button>

        <Link to='/'>
          <Button type="success">go to the list of quizes</Button>
        </Link>
      </div>
    </div>
  )
}

export default FinishedQuiz
