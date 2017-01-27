import React, { Component, PropTypes } from 'react'

export default class ProductCard extends Component {

  static propTypes () {
    return {
      kind: PropTypes.object,
      data: PropTypes.object
    }
  }

  constructor (props) {
    super(props)
    this.onClick = this._onClick.bind(this)
  }

  _onClick (evt) {
    evt.preventDefault()
    console.log('clicked')
  }

  render () {
    const { kind, data: {
      title, selftext
    } } = this.props

    return (
      <div className='product'>
        <div className='column column-20'>
          {title} - {kind}
        </div>
        <div className='column column-60'>
          {selftext}
        </div>
        <div className='column column-20'>
          <button onClick={this.onClick}>Add to cart</button>
        </div>
      </div>
    )
  }
}
