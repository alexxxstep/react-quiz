import React from 'react'
import styles from './Input.module.css'

function isInvalid({ valid, touched, shouldValidate }) {
  return !valid && shouldValidate && touched
}

const Input = (props) => {
  const inputType = props.type || 'text'
  const stl = [styles.Input]
  const htmlFor = `${inputType}-${Math.random()}`

  if (isInvalid(props)) {
    stl.push(stl.invalid)
  }

  return (
    <div className={stl.join(' ')}>
      <label htmlFor="">{props.label}</label>
      <input
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      />

      {isInvalid(props) ? (
        <span>{props.errorMessage || 'Input wright value'}</span>
      ) : null}
    </div>
  )
}

export default Input
