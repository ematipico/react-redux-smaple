// @flow
import React, { Component } from 'react'

type Props = {
  kind: String;
  data: Object;
  onClick?: () => void;
}
export default class ProductCard extends Component<void, Props, void> {
  onClick: (() => void) => void;
  onClickDetail: (id: String, evt: Object) => void;

  constructor (props: Props) {
    super(props)
    this.onClick = this._onClick.bind(this)
    this.onClickDetail = this._onClickDetail.bind(this)
  }

  _onClick (evt: Object) {
    evt.preventDefault()
    const { onClick } = this.props
    onClick && onClick(this.props.data)
  }

  _onClickDetail (id: String, evt: Object) {
    evt.preventDefault()
    // TODO
    // transition
  }

  render () {
    const { kind, data: {
      title, selftext, id = String, price
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
          <button onClick={this.onClick} className='float-right add-to-cart'>Add to cart</button>
          <button onClick={(evt) => this.onClickDetail(id, evt)} className='float-right details'>Details</button>
        </div>
      </div>
    )
  }
}
