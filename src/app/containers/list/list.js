// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProducts } from 'app/containers/list/listActions'
import { addToCart } from 'app/containers/cart/cartActions'
import ProductCard from 'app/components/ProductCard'
import { sendMessage } from 'app/components/notificationActions'
import { GenericState } from 'app/types'

type Props = {
  products: Array<Object>;
  dispatchGetProducts: () => void;
  dispatchAddToCart: () => void;
}

export class List extends Component<void, Props, void> {

  componentDidMount () {
    const { dispatchGetProducts } = this.props
    dispatchGetProducts()
  }

  render () {
    const { products, dispatchAddToCart } = this.props
    if (products && Object.keys(products).length === 0) {
      return null
    }
    return (
      <div className='list'>
        <h1>Browse the products</h1>

        <div className='container'>
          {products.map((product, key) => {
            return <ProductCard key={key} {...product} onClick={dispatchAddToCart} />
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps (state: GenericState, ownProps) {
  return {
    products: state.products
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchGetProducts () {
      dispatch(getProducts())
    },
    dispatchAddToCart (item) {
      dispatch(addToCart(item))
      dispatch(sendMessage(`The item with ID ${item.id} has been added to the cart`))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
