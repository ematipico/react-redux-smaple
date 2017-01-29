import React, { Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { getProducts } from './homeActions'
import { addToCart } from 'app/containers/cart/cartActions'
import ProductCard from 'app/components/ProductCard'
import { sendMessage } from 'app/components/notificationActions'

class Home extends Component {

  static propTypes () {
    return {
      products: PropTypes.object,
      dispatchGetProducts: PropTypes.func
    }
  }

  componentDidMount () {
    const { dispatchGetProducts } = this.props
    dispatchGetProducts()
  }

  render () {
    const { products, dispatchAddToCart } = this.props
    if (Object.keys(products).length === 0) {
      return null
    }
    return (
      <div>
        <h1>Home Page - browse the products</h1>

        <div className='container'>
          {products.map((product, key) => {
            return <ProductCard key={key} {...product} onClick={dispatchAddToCart} />
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps (state, ownPros) {
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
