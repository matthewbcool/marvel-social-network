import React, { Fragment } from 'react'
import TextField from '@material-ui/core/TextField'

const Register = () => {
  return (
    <Fragment>
      <form noValidate autoComplete='off'>
        <TextField
          id='outlined-email-input'
          label='Email'
          type='email'
          name='email'
          autoComplete='email'
          margin='normal'
          variant='outlined'
        />
        <TextField
          id='outlined-email-input'
          label='Hero Id'
          type='number'
          name='heroid'
          margin='normal'
          variant='outlined'
        />
        <TextField
          id='outlined-password-input'
          label='Password'
          type='password'
          autoComplete='current-password'
          margin='normal'
          variant='outlined'
        />
      </form>
    </Fragment>
  )
}

export default Register
