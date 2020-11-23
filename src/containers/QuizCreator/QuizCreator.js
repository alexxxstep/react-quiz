import React, { Component } from 'react'
import Button from '../../components/UI/Button/Button'
import styles from './QuizCreator.module.css'

export default class QuizCreater extends Component {
  submitHandler = (event) => {
    event.preventDefault()
  }

  addQuestionHandler = () => {}

  createQuizHandler = () => {}

  render() {
    return (
      <div className={styles.QuizCreator}>
        <h1>Quiz</h1>
        <form onSubmit={this.submitHandler}>
          <input type="text"></input>
          <hr />
          <input type="text"></input>
          <input type="text"></input>
          <input type="text"></input>

          <select></select>
          <Button type="primary" onCLick={this.addQuestionHandler}>
            Add question
          </Button>
          <Button type="success" onCLick={this.createQuizHandler}>
            Create quiz
          </Button>
        </form>
      </div>
    )
  }                                              
}
