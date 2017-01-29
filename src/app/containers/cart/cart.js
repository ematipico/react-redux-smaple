import React, { Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { selectProductsInCart } from './cartReducer'

class Cart extends Component {

  constructor (props) {
    super(props)
    this.goToCheckout = this._goToCheckout.bind(this)
  }

  _goToCheckout (evt) {
    evt.preventDefault()
    const { router } = this.context
    router.transitionTo('/checkout')
  }

  render () {
    const { products } = this.props
    let totalPrice = 0
    return (
      <div className='cart'>
        {Object.keys(products).map((key) => {
          const product = products[key]
          const { price, title } = product
          totalPrice = totalPrice + price
          return (
            <div className='row product-summary clearfix' key={key}>
              <div className='column column-80 title'><p>{title}</p></div>
              <div className='column column-20 price'><span className='float-right '>{price}</span></div>
            </div>
          )
        })}
        <hr />
        <div className='totalPrice clearfix'>
          <span className='float-right'>Total price: {totalPrice}</span>
        </div>

        <button onClick={this.goToCheckout}>Pay now</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const products = selectProductsInCart(state)
  return {
    products
  }
}

Cart.contextTypes = {
  router: PropTypes.object
}

export default connect(mapStateToProps)(Cart)
