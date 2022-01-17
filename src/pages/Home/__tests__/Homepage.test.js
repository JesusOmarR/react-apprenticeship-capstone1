import React from 'react'
import HomePage from '../Home.page'
import { render, waitFor, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Testing HomePage component', () => {
  it('Render HomePage component', async () => {
    render(<HomePage />)

    screen.debug
    cleanup
  })

  it('shows a loading text', async () => {
    render(<HomePage />)

    expect(await screen.findByText('...Loading')).toBeInTheDocument
  })

  it('shows the HomePage Title', async () => {
    render(<HomePage />)

    await waitFor(
      () =>
        expect(screen.findAllByText('Welcome to Wize Tube!')[0])
          .toBeInTheDocument
    )
  })
})
