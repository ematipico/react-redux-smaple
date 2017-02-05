/* eslint-disable */

import React from 'react'
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

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept()
  }
}

export default class App extends React.Component {

  constructor (props) {
    super(props)
    this.routes = [
      {
        path: '/cart',
        render: () => {
          System.import('app/containers/cart/cart')
            .then(Cart => {
              return Cart;

            })
        },
      },
      {
        path: '/checkout',
        render: ({callback}) => {
          return System.import('app/containers/checkout/checkout')
          .then(Checkout => {
            callback(null, Checkout)
          })
        },
      },
      {
        path: '/list',
        render: () => {
          return new Promise(function(resolve) {
            System.import('app/containers/list/list')
              .then(List => {
                resolve(List)
              })
          })
        }
      },
      {
        path: '/cart',
        render: () => {
          System.import('app/containers/cart/cart')
            .then(Cart => {
              callback(null, Cart)

          })
        }
      }
    ]
  }

  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <NavBar />
            <Link to='/list' >Start browsing</Link>
            <div className='container'>
              <Route path='/list' component={List} />
              <Route path='/product/:productId' component={Product} />
              <Route path='/cart' component={Cart} />
              <Route path='/checkout' component={Checkout} />
            </div>
            <Notification />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}
