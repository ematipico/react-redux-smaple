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
    this.onClickDetail = this._onClickDetail.bind(this)
  }

  _onClick (evt) {
    evt.preventDefault()
    const { onClick } = this.props
    onClick && onClick(this.props.data)
  }

  _onClickDetail (id, evt) {
    evt.preventDefault()
    const { router } = this.context
    router.transitionTo('/product/' + id)
  }

  render () {
    const { kind, data: {
      title, selftext, id, price
    } } = this.props

    return (
      <div className='product-card'>
        <div className='column column-20'>
          <h3 className='title'>
            {title} - {kind}
          </h3>
        </div>
        <div className='column column-60 description'>
          {selftext}
        </div>
        <div className='column column-20 clearfix'>
          <span className='price animate float-left'>Price <mark>{price}</mark></span>
          <button onClick={this.onClick} className='float-right'>Add to cart</button>
          <button onClick={(evt) => this.onClickDetail(id, evt)} className='float-right'>Details</button>
        </div>
      </div>
    )
  }
}

ProductCard.contextTypes = {
  router: PropTypes.object
}
