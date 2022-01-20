import React from 'react'
import Favorites from '../Favorites.page'
import { render, waitFor, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Testing Favorite Videos page', () => {
  it('Render FavoritesPage component', async () => {
    render(<Favorites />)

    screen.debug
    cleanup
  })

  it('It shows a warning y there are not favorite videos', async () => {
    render(<Favorites />)

    expect(await screen.findByText("'Ups you dont have favorite videos yet'"))
      .toBeInTheDocument
  })

  it('shows the page title if there are favorite videos  ', async () => {
    render(<Favorites />)

    await waitFor(
      () => expect(screen.findAllByText('Favorite videos')[0]).toBeInTheDocument
    )
  })
})
