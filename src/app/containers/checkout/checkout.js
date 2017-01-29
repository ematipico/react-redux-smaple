import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectProductsInCart } from 'app/containers/cart/cartReducer'
import _isEmpty from 'lodash/isEmpty'


class Checkout extends Component {

  render () {
    const { products } = this.props

    if (_isEmpty(products)) {
      return (
        <div>
          <h1>
            No items
          </h1>
        </div>
      )
    } else {
      return (
        <div className='checkout'>
          
        </div>
      )
    }
  }
}

function mapStateToProps (state) {
  const products = selectProductsInCart(state)
  return {
    products
  }
}

export default connect(mapStateToProps)(Checkout)
