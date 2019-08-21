import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'

import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import '../../App.css'

const Navbar = () => {
  return (
    <div>
      <AppBar position='static' color='default'>
        <Toolbar className='nav-tool-bar'>
          <Typography variant='h6' color='inherit'>
            Marvel Social Network
          </Typography>
          <section className='nav-bar-btns'>
            <Button color='inherit' href='/'>
              Characters
            </Button>

            <Button color='inherit' href='/register'>
              Sign-Up
            </Button>

            <Button color='inherit' href='/login'>
              Login
            </Button>
          </section>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
