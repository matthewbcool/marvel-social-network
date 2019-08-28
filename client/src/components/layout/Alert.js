import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const Alert = ({ alerts }) => {
  const [open, setOpen] = useState(true)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }
  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map(alert => (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={open}
        ContentProps={{
          'aria-describedby': alert.msg
        }}
        message={<span id={alert.id}>{alert.msg}</span>}
        action={[
          <IconButton
            key='close'
            aria-label='close'
            color='inherit'
            onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        ]}
      />
    ))
  )
}

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  alerts: state.alert
})

export default connect(mapStateToProps)(Alert)
