/**
 * @class withMatchMediaProps
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _debounce from 'lodash.debounce'

const withMatchMediaProps = (matchMediaMapper = {}) =>
  (BaseComponent) => (
    class extends Component {
      state = {
        mounted: false
      }

      handleResize = _debounce(() => {
        this.forceUpdate()
      }, 50)

      componentDidMount() {
        this.setState({ mounted: true })
        window && window.addEventListener('resize', this.handleResize)
      }

      componentWillUnmount() {
        window && window.removeEventListener('resize', this.handleResize)
      }

      getMediaQueriesProps() {
        const mediaQueries = typeof matchMediaMapper === 'function'
          ? matchMediaMapper(this.props)
          : matchMediaMapper

        return Object
          .entries(mediaQueries)
          .reduce((props, [mediaQuery, mapProps]) => (
            this.state.mounted && window.matchMedia && window.matchMedia(mediaQuery).matches
              ? { ...props, ...mapProps }
              : props
          ), {})
      }

      render() {
        return <BaseComponent {...this.props} {...this.getMediaQueriesProps()} />
      }
    }
  )

withMatchMediaProps.propTypes = {
  matchMediaMapper: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func
  ])
}

export default withMatchMediaProps
