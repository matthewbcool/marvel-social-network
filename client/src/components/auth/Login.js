import React, { useState, Fragment } from 'react'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../actions/auth'

const Login = ({ login }) => {
  const [loginData, setLoginData] = useState({})

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
    console.log(loginData)
    login({ email, password })
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
          value={loginData.email}
          onChange={onChange}
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
  { login }
)(Login)
