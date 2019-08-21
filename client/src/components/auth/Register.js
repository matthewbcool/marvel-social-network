import React, { useState, Fragment } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { FormControl } from '@material-ui/core'

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
      <FormControl required autoComplete='off'>
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
          id='outlined-heroid-input'
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
          onClick={submitRegister}
          variant='contained'
          color='primary'>
          Sign-Up
        </Button>
      </FormControl>
    </Fragment>
  )
}

export default Register
