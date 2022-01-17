import React from 'react'
import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router, Switch, Route } from 'react-router-dom'
import Favorites from '../../../pages/Favorites'
import LoginPage from '../../../pages/Login'
import Private from '../../Private'
import { GlobalContext } from '../../../providers/Global/Global.provider'

it('redirects unauthenticated users to SignIn', async () => {
  const history = createMemoryHistory({ initialEntries: ['/favorites'] })

  render(
    <Router history={history}>
      <Switch>
        <GlobalContext.Provider value={{ isAuth: false }}>
          <Private exact path="/favorites">
            <Favorites />
          </Private>
          <Route exact path="/login" component={LoginPage} />
        </GlobalContext.Provider>
      </Switch>
    </Router>
  )

  expect(history.location.pathname).toBe('/login')
})
