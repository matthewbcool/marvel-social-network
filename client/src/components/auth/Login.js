import React, { useState, Fragment } from 'react'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
const Login = () => {
  const [loginData, setLoginData] = useState({
    name: '',
    email: '',
    heroId: '',
    password: '',
    password2: ''
  })

  const { email, heroId, password, password2 } = loginData
  const onChange = event => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value
    })
  }
  const submitLogin = event => {
    event.preventDefault()

    setLoginData(loginData)
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
          variant='outlined'
        />
        <TextField
          id='outlined-password-input'
          label='Password'
          type='password'
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
          Sign-Up
        </Button>
      </FormControl>
    </Fragment>
  )
}

export default Login
