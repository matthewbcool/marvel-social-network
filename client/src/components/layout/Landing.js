import React from 'react'
import Button from '@material-ui/core/Button'

const Landing = () => {
  return (
    <section className='landing'>
      <div className='landing-overlay'>
        <div className='landing-inner'>
          <h1>Marvel Social Network</h1>
        </div>
        <Button size='large' href='/register'>
          Register
        </Button>
        <Button size='large' href='/login'>
          Login
        </Button>
      </div>
    </section>
  )
}

export default Landing
