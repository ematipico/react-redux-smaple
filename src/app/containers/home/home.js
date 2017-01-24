import React, { Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { getProducts } from './homeActions'
import ProductCard from 'app/components/ProductCard'

class Home extends Component {

  static propTypes () {
    return {
      products: PropTypes.object,
      dispatchGetProducts: PropTypes.func
    }
  }

  componentDidMount () {
    const { dispatchGetProducts } = this.props
    dispatchGetProducts()
  }

  render () {
    const { products } = this.props
    if (Object.keys(products).length === 0) {
      return null
    }
    return (
      <div>
        <h2>Home Page - browse the products</h2>

        <div className='container'>
          {products.map((product, key) => {
            return <ProductCard {...product} />
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps (state, ownPros) {
  console.log(state);
  return {
    products: state.products
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchGetProducts () {
      dispatch(getProducts())
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home)
