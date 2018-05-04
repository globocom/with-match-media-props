# with-match-media-props

> CSS Media Queries detection HOC for React

[![NPM](https://img.shields.io/npm/v/@globocom/with-match-media-props.svg)](https://www.npmjs.com/package/@globocom/with-match-media-props) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This is a HOC desgined to help you define props according to media queries breakpoints.

Just as CSS media queries, you can combine and/or override props with multi-matching media queries.

## Install

```bash
npm install --save @globocom/with-match-media-props
```

## Usage

```jsx
import React, { Component } from 'react'

import withMatchMediaProps from '@globocom/with-match-media-props'

const Component = (props) => (
  <div>
    <span>MediaQuery: {props.mediaQuery}</span>
    <span>Is larger or equal to 360px: {!!props.mediaQuery360}</span>
    <span>Is larger or equal to 768px: {!!props.mediaQuery768}</span>
  </div>
)
const EnhancedComponent = withMatchMediaProps({
  'screen and (min-width: 360px)': {
    mediaQuery: 360,
    mediaQuery360: true,
  },
  'screen and (min-width: 768px)': {
    mediaQuery: 768,
    mediaQuery768: true,
  },
})(Component)

class Example extends Component {
  render () {
    return (
      <EnhancedComponent mediaQuery={1} otherProps="example" />
    )
  }
}
```

[📺 Check out live demo](https://globocom.github.io/with-match-media-props/)

## License

MIT © [globocom](https://github.com/globocom)
