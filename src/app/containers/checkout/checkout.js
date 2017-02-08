// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectProductsInCart } from 'app/containers/cart/cartReducer'
import _isEmpty from 'lodash/isEmpty'
import Form from './form'
import { checkoutError, fulfilCheckout, buyProducts } from './checkoutActions'
import { selectCheckoutError } from './checkoutReducer'

class Checkout extends Component {

  handleSubmit: (
    values: {
      name?: string;
      surname?: string;
      gender?: string,
      confirm: string
    },
    middleware: () => void,
    formStatus: Object
  ) => void

  constructor (props) {
    super(props)
    this.handleSubmit = this._handleSubmit.bind(this)
  }

  _handleSubmit (values, middleware, formStatus) {
    const { dispatchCheckoutError, dispatchBuyProducts } = this.props
    if (_isEmpty(values)) {
      dispatchCheckoutError('Fill the form correctly')
    } else {
      const {
        name, surname, gender, confirm
      } = values
      if (confirm === 'I want to buy') {
        dispatchBuyProducts({name, surname, gender, confirm})
      } else {
        dispatchCheckoutError('The confirmation phrase is not correct')
      }
    }
  }

  render () {
    const { inititialValues: {
      products
     }, error } = this.props
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
    },
    dispatchBuyProducts () {
      dispatch(buyProducts())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
