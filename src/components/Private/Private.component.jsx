import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { GlobalContext } from '../../providers/Global/Global.provider'

// eslint-disable-next-line react/prop-types
function Private({ children, ...rest }) {
  const { isAuth } = useContext(GlobalContext)
  return (
    <Route
      {...rest}
      render={() => (isAuth ? children : <Redirect to="/login" />)}
    />
  )
}

export default Private
