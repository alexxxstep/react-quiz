import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-15e82.firebaseio.com/',
})