import React, { Component } from 'react'

import withMatchMediaProps from 'with-match-media-props'

class App extends Component {
  render () {
    return (
      <div className="with-media-query-props__example">
        <h1>WithMatchMediaProps</h1>
        <div>Props:</div>
        <pre>{JSON.stringify(this.props, null, 4)}</pre>
        <span>* Resize window to try it out</span>
      </div>
    )
  }
}

export default withMatchMediaProps({
  'screen and (min-width: 360px)': {
    mediaQuery: 360,
    mediaQuery360: '✅',
  },
  'screen and (min-width: 768px)': {
    mediaQuery: 768,
    mediaQuery768: '✅',
  },
  'screen and (min-width: 1024px)': {
    mediaQuery: 1024,
    mediaQuery1024: '✅',
  },
  'screen and (min-width: 1200px)': {
    mediaQuery: 1200,
    mediaQuery1200: '✅',
  },
})(App)
