import React, { useState, Fragment } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { FormControl } from '@material-ui/core'
import axios from 'axios'

const Register = () => {
  const [registerData, setRegisterData] = useState({
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
  const submitRegister = async event => {
    event.preventDefault()
    setRegisterData(registerData)
    if (registerData.password !== registerData.password2) {
      console.log('passwords do not match')
      setRegisterData({ email: '', password: '', password2: '' })
    } else {
      const newUser = {
        email,
        heroId,
        password
      }
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        }
        console.log(newUser)
        const body = JSON.stringify(newUser)
        const res = await axios.post('/api/users', body, config)
        console.log(res.data)
        setRegisterData({ email: '', password: '', password2: '', heroId: '' })
      } catch (error) {
        console.error('there was an error')
      }
    }
  }

  return (
    <Fragment>
      <FormControl required autoComplete='off'>
        <TextField
          id='outlined-email-input'
          label='Email'
          type='email'
          name='email'
          value={registerData.email}
          onChange={onChange}
          autoComplete='email'
          margin='normal'
          variant='outlined'
        />
        <TextField
          id='outlined-heroid-input'
          label='Hero Id'
          onChange={onChange}
          value={registerData.heroId}
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
          value={registerData.password}
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
          value={registerData.password2}
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
