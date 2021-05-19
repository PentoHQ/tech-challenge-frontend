import React from 'react'
import { render, screen } from '@testing-library/react'
import { Main as App } from './index'
import { BrowserRouter as Router } from 'react-router-dom'

test('Renders the main component', () => {
  render(<App />)
})
