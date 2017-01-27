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
    const { onClick } = this.props
    onClick && onClick(this.props.data)
  }

  render () {
    const { kind, data: {
      title, selftext
    } } = this.props

    return (
      <div className='product'>
        <div className='column column-20'>
          <h3 className='title'>
            {title} - {kind}
          </h3>
        </div>
        <div className='column column-60 description'>
          {selftext}
        </div>
        <div className='column column-20 clearfix'>
          <button onClick={this.onClick} className='float-right'>Add to cart</button>
        </div>
      </div>
    )
  }
}
