import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class Notification extends Component {
    render () {
      const { type, showing, text } = this.props
      const notificationClass = classNames('notification', {open: showing}, type)
      return (
        <div className={notificationClass}>
          {text}
        </div>
      )
    }
}
