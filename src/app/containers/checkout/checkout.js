import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectProductsInCart } from 'app/containers/cart/cartReducer'
import _isEmpty from 'lodash/isEmpty'
import { Field, reduxForm } from 'redux-form'

class Checkout extends Component {

  render () {
    const { inititialValues: { products } } = this.props
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
          <form>
            <fieldset>
              <label htmlFor='name'>Name</label>
              <Field name='name' component='input' type='text' />

              <label htmlFor='surname'>Surnma</label>
              <Field name='surname' component='input' type='text' />
            </fieldset>
            <fieldset>
              <label htmlFor='gender'>Gender</label>
              <Field name='gender' component='input' type='radio' value='male' id='male' />
              <label htmlFor='male' className='inline'>Male</label>
              <Field name='gender' component='input' type='radio' value='female' id='female' />
              <label htmlFor='female' className='inline'>Female</label>
            </fieldset>
          </form>
        </div>
      )
    }
  }
}

function mapStateToProps (state) {
  const products = selectProductsInCart(state)
  return {
    inititialValues: {
      products
    }
  }
}

export default connect(mapStateToProps)(reduxForm({
  form: 'checkout' // a unique name for this form
})(Checkout))
