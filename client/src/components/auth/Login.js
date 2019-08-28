import React, { useState, Fragment } from 'react'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import axios from 'axios'

const Login = () => {
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
    if (loginData.email.length > 3 && loginData.password.length > 6) {
      try {
        const loginBody = {
          email,
          password
        }
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        }
        const res = await axios.post('api/auth', loginBody, config)
        console.log(res.data)
      } catch (error) {}
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
          variant='outlined'
        />
        <TextField
          id='outlined-password-input'
          label='Password'
          name='password'
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
          Sign-In
        </Button>
      </FormControl>
    </Fragment>
  )
}

export default Login
