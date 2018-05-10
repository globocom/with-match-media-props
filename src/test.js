import React from 'react'

import { mount } from 'enzyme'

import withMatchMediaProps from './'

const mockMatchMedia = (matchMedias) => {
  window.matchMedia = jest.fn().mockImplementation((mediaQuery) => ({
    matches: matchMedias.includes(mediaQuery)
  }))
}

describe('withMatchMediaProps', () => {
  const Component = () => <div />
  const renderComponent = ({ matchMedias, props }) => {
    const ComponentWithMatchMedia = withMatchMediaProps(matchMedias)(Component)
    return mount(<ComponentWithMatchMedia {...props} />)
  }

  it('forwards all other props', () => {
    const component = renderComponent({ props: { test: 'prop' } })
    expect(component.props()).toEqual({ test: 'prop' })
  })

  describe('when unmounted', () => {
    it('does not inject any match media prop', () => {
      mockMatchMedia(['min-width: 1024px'])

      const component = renderComponent({
        matchMedias: {
          'max-width: 1023px': { isMobile: true },
          'min-width: 1024px': { isDesktop: true }
        }
      })
      component.setState({ mounted: false })
      expect(component.find(Component).props()).toEqual({})
    })
  })

  describe('when mounted', () => {
    it('inject props matched by media query', () => {
      mockMatchMedia(['min-width: 1024px'])

      const component = renderComponent({
        matchMedias: {
          'max-width: 1023px': { isMobile: true },
          'min-width: 1024px': { isDesktop: true }
        }
      })
      expect(component.find(Component).props()).toEqual({ isDesktop: true })
    })

    it('keeps all matched media query props', () => {
      mockMatchMedia(['mix-width: 768px', 'min-width: 1024px'])

      const component = renderComponent({
        matchMedias: {
          'mix-width: 768px': { media768: true },
          'min-width: 1024px': { media1024: true }
        }
      })
      expect(component.find(Component).props()).toEqual({
        media768: true,
        media1024: true
      })
    })

    it('overrides matched media query props', () => {
      mockMatchMedia(['mix-width: 768px', 'min-width: 1024px'])

      const component = renderComponent({
        matchMedias: {
          'mix-width: 768px': { items: 3 },
          'min-width: 1024px': { items: 4 }
        }
      })
      expect(component.find(Component).props()).toEqual({ items: 4 })
    })

    it('keeps the last matched media query overrided props, just as css', () => {
      mockMatchMedia(['mix-width: 768px', 'min-width: 1024px'])

      const component = renderComponent({
        matchMedias: {
          'min-width: 1024px': { items: 4 },
          'mix-width: 768px': { items: 3 }
        }
      })
      expect(component.find(Component).props()).toEqual({ items: 3 })
    })
  })
})
