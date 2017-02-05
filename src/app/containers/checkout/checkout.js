import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectProductsInCart } from 'app/containers/cart/cartReducer'
import _isEmpty from 'lodash/isEmpty'
import { Field, reduxForm } from 'redux-form'

class Checkout extends Component {

  constructor (props) {
    super(props)
    this.onSubmit = this._onSubmit.bind(this)
  }

  _onSubmit () {
    
  }

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
          <form onSubmit={this.onSubmit}>
            <fieldset>
              <label htmlFor='name'>Name</label>
              <Field name='name' component='input' type='text' />

              <label htmlFor='surname'>Surname</label>
              <Field name='surname' component='input' type='text' />
            </fieldset>
            <fieldset>
              <label htmlFor='gender'>Gender</label>
              <Field name='gender' component='input' type='radio' value='male' id='male' />
              <label htmlFor='male' className='inline'>Male</label>
              <Field name='gender' component='input' type='radio' value='female' id='female' />
              <label htmlFor='female' className='inline'>Female</label>
            </fieldset>
            <fieldset>
              <label htmlFor='confirm'>Type inside the input 'I want to buy' to confirm</label>
              <Field name='confirm' component='input' type='text' />
            </fieldset>
            <button className='wide'>BUY NOW</button>
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
