import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

describe('App', () => {
  test('should render App properly', async () => {
    expect(render(<App />)).toBeTruthy()
  })
})
