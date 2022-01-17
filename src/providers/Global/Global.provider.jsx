import React, { useCallback, useReducer, useEffect } from 'react'
import GlobalReducer from './Global.reducer'
import {
  CHANGE_THEME,
  LOG_IN,
  LOG_OUT,
  SET_SEARCH_PARAM,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from './GloBal.types'

// Initial state to declare the reducer
const initialState = {
  searchParam: 'wizeline',
  darkTheme: JSON.parse(localStorage.getItem('theme')),
  isAuth: Boolean(localStorage.getItem('Auth-Key')),
  favoriteVideos: JSON.parse(localStorage.getItem('favorites')),
}

// context creation
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

  const addToFavorites = (video) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    favorites.push(video)
    localStorage.setItem('favorites', JSON.stringify(favorites))
    dispatch({
      type: ADD_TO_FAVORITES,
      payload: favorites,
    })
  }

  const removeFromFavorites = (video) => {
    let favorites = JSON.parse(localStorage.getItem('favorites'))
    favorites = favorites.filter((favorite) => {
      return favorite.etag !== video.etag
    })
    localStorage.setItem('favorites', JSON.stringify(favorites))
    dispatch({
      type: REMOVE_FROM_FAVORITES,
      payload: favorites,
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam: state.searchParam,
        darkTheme: state.darkTheme,
        isAuth: state.isAuth,
        favoriteVideos: state.favoriteVideos,
        onSubmitSearch,
        changeTheme,
        login,
        logOut,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
