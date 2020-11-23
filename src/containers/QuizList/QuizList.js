import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Quiz.module.css'

export default class QuizList extends Component {
  renderQuizes() {
    return [1, 2, 3].map((quiz, index) => {
      return (
        <li key={index}>
          <NavLink to={'/quiz/' + quiz}> Quiz {quiz}</NavLink>
        </li>
      )
    })
  }

  render() {
    return (
      <div className={styles.QuizList}>
        <div>
          <h1>Quiz List</h1>

          <ul>{this.renderQuizes()}</ul>
        </div>
      </div>
    )
  }
}
