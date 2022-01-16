import React, { useCallback, useReducer } from 'react'
import GlobalReducer from './Global.reducer'
import { CHANGE_THEME, LOG_IN, LOG_OUT, SET_SEARCH_PARAM } from './GloBal.types'

const initialState = {
  searchParam: 'wizeline',
  darkTheme: JSON.parse(localStorage.getItem('theme')),
  isAuth: Boolean(localStorage.getItem('Auth-Key')),
}

export const GlobalContext = React.createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState)

  const onSubmitSearch = useCallback((params) => {
    dispatch({
      type: SET_SEARCH_PARAM,
      payload: params,
    })
  }, [])

  const changeTheme = () => {
    dispatch({
      type: CHANGE_THEME,
    })
  }

  const login = (user) => {
    localStorage.setItem('Auth-Key', JSON.stringify(user))
    dispatch({
      type: LOG_IN,
    })
  }

  const logOut = () => {
    localStorage.removeItem('Auth-Key')
    dispatch({
      type: LOG_OUT,
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam: state.searchParam,
        darkTheme: state.darkTheme,
        onSubmitSearch,
        changeTheme,
        login,
        logOut,
        isAuth: state.isAuth,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
