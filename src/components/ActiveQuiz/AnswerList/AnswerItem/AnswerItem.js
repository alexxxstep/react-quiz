import React from 'react'
import styles from './AnswerItem.module.css'

const AnswerItem = (props) => {
  const stl = [styles.AnswerItem]

  if (props.state) {
    stl.push(styles[props.state])
  }

  // console.log(props)
  return (
    <li className={stl.join(' ')} onClick={() => props.onAnswerClick(props.answer.id)}>
      {props.answer.text}
    </li>
  )
}

export default AnswerItem
