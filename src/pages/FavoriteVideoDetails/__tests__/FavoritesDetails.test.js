import React from 'react'
import FavoriteDetails from '../FavoriteVideoDetails.page'
import { render, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Route, Router, Switch } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import {
  GlobalContext,
  GlobalProvider,
} from '../../../providers/Global/Global.provider'
import mockedData from '../../../mock/searchVideo.MockData.json'

describe('Testing favorite videos deatils component', () => {
  it('Render the FavoriteVideoDetails page', () => {
    const history = createMemoryHistory({ initialEntries: ['/nmXMgqjQzls'] })
    render(
      <Router history={history}>
        <Switch>
          <GlobalProvider>
            <FavoriteDetails />
          </GlobalProvider>
        </Switch>
      </Router>
    )
  })

  it('Render the  Favorite VideoDetails info on the page', async () => {
    const history = createMemoryHistory({ initialEntries: ['/nmXMgqjQzls'] })
    render(
      <Router history={history}>
        <Switch>
          <GlobalContext.Provider value={{ favoriteVideos: [mockedData] }}>
            <Route exact path="/:videoid">
              <FavoriteDetails />
            </Route>
          </GlobalContext.Provider>
        </Switch>
      </Router>
    )
    await waitFor(async () => {
      const videoTitle = screen.findByText(
        'Video Tour | Welcome to Wizeline Guadalajara'
      )
      expect(videoTitle).toBeInTheDocument
    })
  })
})
