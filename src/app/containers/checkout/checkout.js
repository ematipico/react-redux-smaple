import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectProductsInCart } from 'app/containers/cart/cartReducer'
import _isEmpty from 'lodash/isEmpty'
import Form from './form'
import { checkoutError, fulfilCheckout } from './checkoutActions'
import { selectCheckoutError } from './checkoutReducer'

class Checkout extends Component {

  constructor (props) {
    super(props)
    this.handleSubmit = this._handleSubmit.bind(this)
  }

  _handleSubmit (values, middleware, formStatus) {
    if (_isEmpty(values)) {
      const { dispatchCheckoutError } = this.props
      dispatchCheckoutError('Fill the form correctly')
    } else {
      const {
        name, surname, gender, confirm
      } = values
    }
  }

  render () {
    const { inititialValues: { products }, error } = this.props
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
          {error &&
            <p className='label error'>{error}</p>
          }
          <Form onSubmit={this.handleSubmit} />
        </div>
      )
    }
  }
}

function mapStateToProps (state) {
  const products = selectProductsInCart(state)
  const error = selectCheckoutError(state)
  return {
    inititialValues: {
      products
    },
    error
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchCheckoutError (err) {
      dispatch(checkoutError(err))
    },
    dispatchFulFilCheckout () {
      dispatch(fulfilCheckout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
