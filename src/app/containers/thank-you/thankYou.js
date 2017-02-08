// @flow
import React, { Component } from 'react'

type Props = {
  message: string;
}

class ThankYou extends Component {
  props: Props;

  static defaultProps: { message: string }

  render () {
    const { message } = this.props
    return (
      <div className='thank-you'>
        <h2>{message}</h2>
      </div>
    )
  }
}

ThankYou.defaultProps = {
  message: 'Your are now finished your buying!'
}

export default ThankYou
