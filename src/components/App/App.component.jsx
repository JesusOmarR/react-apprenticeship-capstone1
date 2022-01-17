import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Providers
import { GlobalProvider } from '../../providers/Global/Global.provider'

// Pages
import HomePage from '../../pages/Home'
import LoginPage from '../../pages/Login'
import NotFound from '../../pages/NotFound'
import Private from '../Private'
import Layout from '../Layout'
import Favorites from '../../pages/Favorites'
import VideoDetails from '../../pages/VideoDetails'
import FavoriteVideoDetails from '../../pages/FavoriteVideoDetails'

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/video/:videoid">
              <VideoDetails />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Private exact path="/favorites">
              <Favorites />
            </Private>
            <Private exact path="/favorites/:videoid">
              <FavoriteVideoDetails />
            </Private>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </GlobalProvider>
    </BrowserRouter>
  )
}

export default App
