import { render } from '@testing-library/react'
import React from 'react'
import App from './App'

describe('Test App', () => {
  it('should show h1 title', () => {
    // given
    const wrapper = render(<App />)

    // when
    const result = wrapper.getByTestId('title').textContent

    // then
    expect(result).toBe('练功房前端脚手架')
  })
})
