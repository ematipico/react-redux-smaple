import React from 'react'
import { Provider } from 'react-redux'
import store from 'app/redux/store'
import BrowserRouter from 'react-router/BrowserRouter'
import Match from 'react-router/Match'
import Home from 'app/containers/home/home'
import Checkout from 'app/containers/checkout/checkout'
import Product from 'app/containers/product/product'
import Notification from 'app/components/Notification'
import NavBar from 'app/components/NavBar'
import Cart from 'app/containers/cart/cart'

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept()
  }
}

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <NavBar />
            <div className='container'>
              <Match exactly pattern='/' component={Home} />
              <Match pattern='/product/:productId' component={Product} />
              <Match pattern='/cart' component={Cart} />
              <Match pattern='/checkout' component={Checkout} />
            </div>
            <Notification />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}
