/* eslint-disable */
// @flow
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from 'app/redux/store'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import Route from 'react-router-dom/Route'
import Link from 'react-router-dom/Link'
import List from 'app/containers/list/list'
import Checkout from 'app/containers/checkout/checkout'
import Product from 'app/containers/product/product'
import Notification from 'app/components/Notification'
import NavBar from 'app/components/NavBar'
import Cart from 'app/containers/cart/cart'
import Loader from 'app/containers/loader/loader'
import ThankYou from 'app/containers/thank-you/thankYou'

const hot: Object = module.hot

if (process.env.NODE_ENV === 'development') {
  if (hot) {
    hot.accept()
  }
}

export default class App extends Component {

  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <NavBar />
            <Loader />
            <Link to='/list' >Start browsing</Link>
            <div className='container'>
              <Route path='/list' component={List} />
              <Route path='/product/:productId' component={Product} />
              <Route path='/cart' component={Cart} />
              <Route path='/checkout' component={Checkout} />
              <Route path='/thank-you' component={ThankYou} />
            </div>
            <Notification />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}
