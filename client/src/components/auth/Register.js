import React, { useState, Fragment } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const Register = () => {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    heroId: '',
    password: '',
    password2: ''
  })

  const { email, heroId, password, password2 } = registerData
  const onChange = event => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value
    })
  }
  const submitRegister = event => {
    event.preventDefault()
    console.log('form submitted', registerData)
    setRegisterData(registerData)
    console.log(registerData)
  }

  return (
    <Fragment>
      <form noValidate autoComplete='off'>
        <TextField
          id='outlined-email-input'
          label='Email'
          type='email'
          name='email'
          onChange={onChange}
          autoComplete='email'
          margin='normal'
          variant='outlined'
        />
        <TextField
          id='outlined-email-input'
          label='Hero Id'
          onChange={onChange}
          type='number'
          name='heroId'
          margin='normal'
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
        <TextField
          id='outlined-password-input-2'
          label='Re-type Password'
          name='password2'
          type='password'
          onChange={onChange}
          autoComplete='current-password'
          margin='normal'
          variant='outlined'
        />
        <Button
          type='submit'
          onSubmit={submitRegister}
          onClick={submitRegister}
          contained
          variant='contained'
          color='primary'>
          Sign-Up
        </Button>
      </form>
    </Fragment>
  )
}

export default Register
