import React, { Component } from 'react'
import Link from 'react-router-dom/Link'
import { connect } from 'react-redux'
import { selectProductsInCart } from 'app/containers/cart/cartReducer'

class NavBar extends Component {
  render () {
    const { numberOfItems } = this.props
    return (
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li>
            <div className='badge'>{numberOfItems}</div>
            <Link to='/cart' className='cart'>Cart</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

function mapStateToProps (state, ownProps) {
  const numberOfItems = Object.keys(selectProductsInCart(state)).length || 0
  return {
    numberOfItems
  }
}

export default connect(mapStateToProps)(NavBar)
