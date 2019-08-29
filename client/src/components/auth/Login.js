import React, { useState, Fragment } from 'react'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../actions/auth'
import { setAlert } from '../../actions/alert'

const Login = ({ setAlert, login }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = loginData
  const onChange = event => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value
    })
  }
  const submitLogin = async event => {
    event.preventDefault()
    setLoginData(loginData)
    console.log(loginData.password.length)
    if (loginData.password.length < 5) {
      setAlert('Password should be 6 characters or longer', 'secondary')
      setLoginData({ ...loginData, password: '' })
    } else {
      login({ email, password })
    }
  }

  return (
    <Fragment>
      <FormControl>
        <TextField
          id='outlined-email-input'
          label='Email'
          type='email'
          name='email'
          autoComplete='email'
          margin='normal'
          onChange={onChange}
          value={loginData.email}
          variant='outlined'
        />
        <TextField
          id='outlined-password-input'
          label='Password'
          name='password'
          type='password'
          value={loginData.password}
          onChange={onChange}
          autoComplete='current-password'
          margin='normal'
          variant='outlined'
        />
        <Button
          type='submit'
          onClick={submitLogin}
          variant='contained'
          color='primary'>
          Sign-In
        </Button>
      </FormControl>
    </Fragment>
  )
}

Login.protoTypes = {
  login: PropTypes.func.isRequired
}

export default connect(
  null,
  { setAlert, login }
)(Login)
