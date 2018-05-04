# with-match-media-props

> CSS Media Queries detection HOC for React

[![NPM](https://img.shields.io/npm/v/with-match-media-props.svg)](https://www.npmjs.com/package/with-match-media-props) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save with-match-media-props
```

## Usage

```jsx
import React, { Component } from 'react'

import withMatchMediaProps from 'with-match-media-props'

const MyComponent = (props) => (
  <pre>{JSON.stringify(props, null, 4)}</pre>
)
const MyComponentWithMatchMedia = withMatchMediaProps({
  'screen and (min-width: 360px)': {
    mediaQuery: 360,
    mediaQuery360: '✅',
  },
  'screen and (min-width: 768px)': {
    mediaQuery: 768,
    mediaQuery768: '✅',
  },
})(MyComponent)

class Example extends Component {
  render () {
    return (
      <MyComponentWithMatchMedia mediaQuery={1} otherProps="example" />
    )
  }
}
```

## License

MIT © [globocom](https://github.com/globocom)
