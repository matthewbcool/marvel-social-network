import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'

import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { logout } from '../../actions/auth'
import '../../App.css'

const Navbar = ({ auth: { isAuthenticated, loaded }, logout }) => {
  const authLinks = (
    <div>
      <Button onClick={logout} color='inherit' href='/'>
        Logout
      </Button>
    </div>
  )

  const guestLinks = (
    <div>
      <Button color='inherit' href='/'>
        Characters
      </Button>

      <Button color='inherit' href='/register'>
        Sign-Up
      </Button>

      <Button color='inherit' href='/login'>
        Login
      </Button>
    </div>
  )
  return (
    <div>
      <AppBar position='static' color='default'>
        <Toolbar className='nav-tool-bar'>
          <Typography variant='h6' color='inherit'>
            Marvel Social Network
          </Typography>
          <section className='nav-bar-btns'>
            {!loaded && isAuthenticated ? authLinks : guestLinks}
          </section>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { logout }
)(Navbar)
