import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Navbar = () => {
  return (
    <div>
      <AppBar position='static' color='default'>
        <Toolbar>
          <Typography variant='h6' color='inherit'>
            Marvel Social Network
          </Typography>

          <Button color='inherit' href='/'>
            Characters
          </Button>

          <Button color='inherit' href='/register'>
            Sign-Up
          </Button>

          <Button color='inherit' href='/login'>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
