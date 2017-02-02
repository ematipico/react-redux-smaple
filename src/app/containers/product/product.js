import React, { Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { selectProduct } from './productsReducer'
import { addToCart } from 'app/containers/cart/cartActions'
import { sendMessage } from 'app/components/notificationActions'
class Product extends Component {

  render () {
    const { product: {
      kind, data: {
        title, selftext
      }
    }, dispatchAddToCart } = this.props
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

function mapStateToProps (state, ownProps) {
  const { productId } = ownProps.match.params
  const product = selectProduct(state, productId)
  return {
    product
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    dispatchAddToCart (product) {
      const item = product.data
      dispatch(addToCart(item))
      dispatch(sendMessage(`The item with ID ${item.id} has been added to the cart`))
    }
  }
}

function mergeProps (stateProps, dispatchProps, ownProps) {
  return Object.assign({}, ownProps, {
    product: stateProps.product,
    dispatchAddToCart () {
      dispatchProps.dispatchAddToCart(stateProps.product)
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Product)
