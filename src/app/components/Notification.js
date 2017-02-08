// @flow
import React, { Component } from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { selectMessage } from './notificationReducer'
import { GenericState } from 'app/types'

type Props = {
  notification?: {
    message?: string;
    type?: string;
  }
}

class Notification extends Component<void, Props, void> {
  render () {
    const { notification } = this.props
    if (notification) {
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
    return null
  }
}

function mapStateToProps (state: GenericState, ownProps: Props) {
  const notification = selectMessage(state)
  return {
    notification
  }
}

export default connect(mapStateToProps)(Notification)
