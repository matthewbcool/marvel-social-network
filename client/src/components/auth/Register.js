import React, { useState, Fragment } from 'react'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { FormControl } from '@material-ui/core'
import axios from 'axios'
import { setAlert } from '../../actions/alert'
import { register } from '../../actions/auth'
import PropTypes from 'prop-types'

const Register = ({ setAlert, register }) => {
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
      setAlert('Passwords do not match', 'danger')
      setRegisterData({
        email: registerData.email,
        heroId: registerData.heroId,
        password: '',
        password2: ''
      })
    } else {
      register({ email, heroId, password })
      setRegisterData({ email: '', password: '', password2: '', heroId: '' })
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

Register.protoTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
}

export default connect(
  null,
  { setAlert, register }
)(Register)
