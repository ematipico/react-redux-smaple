// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectProduct } from './productsReducer'
import { addToCart } from 'app/containers/cart/cartActions'
import { sendMessage } from 'app/components/notificationActions'

type Props = {
  match: Object,
  product: {
    kind: string;
    data: {
      title: string;
      selftext: string;
    }
  };
  dispatchAddToCart: () => void;
}

class Product extends Component<void, Props, void> {
  render () {
    const { product: { kind, data: { title, selftext } }, dispatchAddToCart } = this.props
    return (
      <div className='product'>
        <h1>{title} - {kind}</h1>

        <div className='description'>
          <p>{selftext}</p>
          <button onClick={dispatchAddToCart}>Add to Cart</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state: Object, ownProps: Props) {
  const { productId } = ownProps.match.params
  const product = selectProduct(state, productId)
  return {
    product
  }
}

function mapDispatchToProps (dispatch: () => void, ownProps: Props) {
  return {
    dispatchAddToCart (product) {
      const item = product.data
      dispatch(addToCart(item))
      dispatch(sendMessage(`The item with ID ${item.id} has been added to the cart`))
    }
  }
}

function mergeProps (stateProps: Object, dispatchProps: Object, ownProps: Props) {
  return Object.assign({}, ownProps, {
    product: stateProps.product,
    dispatchAddToCart () {
      dispatchProps.dispatchAddToCart(stateProps.product)
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Product)
