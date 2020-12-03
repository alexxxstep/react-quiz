import axios from '../../axios/axios-quiz'
import {
  FETCH_QUIZES_ERROR,
  FETCH_QUIZES_START,
  FETCH_QUIZES_SUCCESS,
  FETCH_QUIZ_SUCCESS,
  QUIZ_SET_STATE,
  FINISH_QUIZ,
  QUIZ_NEXT_QUESTION,
  QUIZ_RETRY,
} from './actionTypes'

export default function fetchQuizes() {
  return async (dispatch) => {
    dispatch(fetchQuizesStart())

    try {
      const response = await axios.get('quizes.json')

      const quizes = []
      Object.keys(response.data).forEach((quiz, index) => {
        quizes.push({
          id: quiz,
          name: `Quiz №${index + 1}`,
        })
      })

      dispatch(fetchQuizesSuccess(quizes))
    } catch (err) {
      dispatch(fetchQuizesError(err))
    }
  }
}

export function fetchQuizById(quizId) {
  return async (dispatch) => {
    dispatch(fetchQuizesStart())

    try {
      const response = await axios.get(`quizes/${quizId}.json`)
      const quiz = response.data
      dispatch(fetchQuizSuccess(quiz))
    } catch (err) {
      dispatch(fetchQuizesError(err))
    }
  }
}

export function fetchQuizesStart() {
  return {
    type: FETCH_QUIZES_START,
  }
}
export function fetchQuizesSuccess(quizes) {
  return {
    type: FETCH_QUIZES_SUCCESS,
    quizes,
  }
}
export function fetchQuizSuccess(quiz) {
  return {
    type: FETCH_QUIZ_SUCCESS,
    quiz,
  }
}

export function fetchQuizesError(err) {
  return {
    type: FETCH_QUIZES_ERROR,
    error: err,
  }
}

export function quizSetState(answerState, results) {
  return {
    type: QUIZ_SET_STATE,
    answerState,
    results,
  }
}

export function finishQuiz() {
  return {
    type: FINISH_QUIZ,
  }
}
export function quizNextQuestion(number) {
  return {
    type: QUIZ_NEXT_QUESTION,
    number,
  }
}

export function retryQuiz(){
  return  {
    type: QUIZ_RETRY,


  }
}

export function quizAnswerClick(answerId) {
  return (dispatch, getState) => {
    const state = getState().quiz

    if (state.answerState) {
      const key = Object.keys(state.answerState)[0]

      console.log('KEY', key)
      if (state.answerState[key] === 'success') {
        return
      }
    }

    const question = state.quiz[state.activeQuestion]
    const questionId = state.quiz[state.activeQuestion].id
    const results = state.results

    if (question.rightAnswerId === answerId) {
      if (!results[questionId]) {
        results[questionId] = 'success'
      }

      dispatch(quizSetState({ [answerId]: 'success' }, results))
    } else {
      results[questionId] = 'error'
      dispatch(quizSetState({ [answerId]: 'error' }, results))
    }

    const timeout = window.setTimeout(() => {
      if (isQuizFinished(state)) {
        dispatch(finishQuiz())
      } else {
        dispatch(quizNextQuestion(state.activeQuestion + 1))
      }

      window.clearTimeout(timeout)
    }, 1000)
  }
}

function isQuizFinished(state) {
  return state.activeQuestion + 1 === state.quiz.length
}
