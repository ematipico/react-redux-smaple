import React, { Component } from 'react'

export default class ProductCard extends Component {
  render () {
    const { kind, data: {
      title
    } } = this.props

    return (
      <div className='column'>
        {title}
      </div>
    )
  }
}
