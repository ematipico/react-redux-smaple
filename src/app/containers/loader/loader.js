import React, { Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { selectLoaderState } from './loaderReducer'

class Loader extends Component {

  render () {
    const { showLoader } = this.props

    if (showLoader) {
      return (
        <div className='loader'>
          <div className='contain'>
            <svg height='80' width='210'>
              <ellipse cx='25' cy='20' fill='none' rx='10' ry='10' />
            </svg>
            <svg height='80' width='210'>
              <ellipse cx='25' cy='20' fill='none' rx='10' ry='10' />
            </svg>
            <svg height='80' width='210'>
              <ellipse cx='25' cy='20' fill='none' rx='10' ry='10' />
            </svg>
            <svg height='80' width='210'>
              <ellipse cx='25' cy='20' fill='none' rx='10' ry='10' />
            </svg>
            <svg height='80' width='210'>
              <ellipse cx='25' cy='20' fill='none' rx='10' ry='10' />
            </svg>
            <svg height='80' width='210'>
              <ellipse cx='25' cy='20' fill='none' rx='10' ry='10' />
            </svg>
            <svg height='80' width='210'>
              <ellipse cx='25' cy='20' fill='none' rx='10' ry='10' />
            </svg>
            <svg height='80' width='210'>
              <ellipse cx='25' cy='20' fill='none' rx='10' ry='10' />
            </svg>
            <svg height='80' width='210'>
              <ellipse cx='25' cy='20' fill='none' rx='10' ry='10' />
            </svg>
            <svg height='80' width='210'>
              <ellipse cx='25' cy='20' fill='none' rx='10' ry='10' />
            </svg>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

function mapStateToProps (state) {
  return {
    showLoader: selectLoaderState(state)
  }
}

Loader.propTypes = {
  showLoader: PropTypes.bool
}

export default connect(mapStateToProps)(Loader)
