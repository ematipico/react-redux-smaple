import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'

class Form extends Component {

  render () {
    const { onSubmit, handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <button className='wide' type='submit'>BUY NOW</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'checkout' // a unique name for this form
})(Form)
