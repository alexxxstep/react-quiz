import React from 'react'
import AnswerItem from './AnswerItem/AnswerItem'
import styles from './AnswersList.module.css'

const AnswersList = (props) => {
  // console.log('AnswersList', props)
  return (
    <ul className={styles.AnswersList}>
      {props.answers.map((answer, index) => {
        return (
          <AnswerItem
            key={index}
            answer={answer}
            onAnswerClick={props.onAnswerClick}
            state={props.state ? props.state[answer.id] : null}
          />
        )
      })}
    </ul>
  )
}

export default AnswersList
