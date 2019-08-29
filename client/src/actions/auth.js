import axios from 'axios'
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR
} from './types'
import setAuthToken from '../utls/setAuthToken'

import { setAlert } from './alert'

export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }

  try {
    const res = await axios.get('/api/auth')
    dispatch({
      type: USER_LOADED,
      payload: res.data
    })
  } catch (error) {
    dispatch({
      type: AUTH_ERROR
    })
  }
}

export const register = ({ email, heroId, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify({ email, heroId, password })
  try {
    const res = await axios.post('/api/users', body, config)
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    })
  } catch (err) {
    const errors = err.response.data.errors

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }

    dispatch({
      type: REGISTER_FAIL
    })
  }
}
