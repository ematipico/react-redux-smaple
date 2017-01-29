import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { selectMessage } from './notificationReducer'

class Notification extends Component {
  render () {
    const { notification } = this.props
    const { message, type } = notification
    const notificationClass = classNames('notification', {
      'open': Object.keys(notification).length > 0
    }, type)
    return (
      <div className={notificationClass}>
        {message}
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  const notification = selectMessage(state)
  return {
    notification
  }
}

export default connect(mapStateToProps)(Notification)
