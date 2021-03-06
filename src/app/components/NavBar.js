// @flow
import React, { Component } from 'react'
import Link from 'react-router-dom/Link'
import { connect } from 'react-redux'
import { selectProductsInCart } from 'app/containers/cart/cartReducer'
import { GenericState } from 'app/types'

type Props = {
  numberOfItems?: number;
}

export class NavBar extends Component<void, Props, void> {
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

function mapStateToProps (state: GenericState, ownProps: Props) {
  const numberOfItems = Object.keys(selectProductsInCart(state)).length || 0
  return {
    numberOfItems
  }
}

export default connect(mapStateToProps)(NavBar)
