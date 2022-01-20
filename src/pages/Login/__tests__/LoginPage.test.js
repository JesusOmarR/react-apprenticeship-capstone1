import React from 'react'
import { screen, render, fireEvent, waitFor } from '@testing-library/react'
import LoginPage from '../Login.page'
import HomePage from '../../Home/Home.page'
import { GlobalContext } from '../../../providers/Global/Global.provider'
import { createMemoryHistory } from 'history'
import { Router, Switch, Route } from 'react-router-dom'

describe('Testing LoginPage', () => {
  it('Renders the login Page', () => {
    render(<LoginPage />)
  })

  it('Display the inputs for user and password', () => {
    render(<LoginPage />)

    screen.getByLabelText('username')
    screen.getByLabelText('password')
  })

  it('Redirects when a user is logged in', async () => {
    const history = createMemoryHistory({ initialEntries: ['/login'] })
    render(
      <Router history={history}>
        <Switch>
          <GlobalContext.Provider value={{ isAuth: false, login: jest.fn() }}>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/" component={HomePage} />
          </GlobalContext.Provider>
        </Switch>
      </Router>
    )
    const userNameInput = screen.getByLabelText('username')
    const passWordInput = screen.getByLabelText('password')
    const sumbitButton = screen.getByRole('button')

    fireEvent.change(userNameInput, { target: { value: 'wizeline' } })
    fireEvent.change(passWordInput, { target: { value: 'Rocks!' } })
    fireEvent.click(sumbitButton)

    await waitFor(() => expect(history.location.pathname).toBe('/'))
  })
})
