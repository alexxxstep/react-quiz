import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {
  const stl = [styles.Button, styles[props.type]]
  return (
    <button
      onClick={props.onClick}
      className={stl.join(' ')}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}

export default Button
