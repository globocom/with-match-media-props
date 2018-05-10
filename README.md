# with-match-media-props  [![NPM](https://img.shields.io/npm/v/@globocom/with-match-media-props.svg)](https://www.npmjs.com/package/@globocom/with-match-media-props) [![CircleCI](https://circleci.com/gh/globocom/with-match-media-props/tree/master.svg?style=shield)](https://circleci.com/gh/globocom/with-match-media-props/tree/master) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> This is a HOC desgined to help you define props according to media queries breakpoints.
>
> Just as CSS media queries, you can combine and/or override props with multi-matching media queries.

## Install

```bash
npm install --save @globocom/with-match-media-props
```

## Usage

```js
withMatchMediaProps(
  matchMediaMapper: (ownerProps: Object) => Object | Object
): HigherOrderComponent
```

This HOC accepts a static object mapping `media-queries` to props, or a function that receives the component props and return the mapped `media-queries`.

Ex:

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
