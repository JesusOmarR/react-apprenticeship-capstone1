import { CHANGE_THEME, SET_SEARCH_PARAM, LOG_IN, LOG_OUT } from './GloBal.types'

export default (state, action) => {
  switch (action.type) {
    case SET_SEARCH_PARAM:
      return {
        ...state,
        searchParam: action.payload,
      }
    case CHANGE_THEME:
      localStorage.setItem('theme', !state.darkTheme)
      return {
        ...state,
        darkTheme: !state.darkTheme,
      }
    case LOG_IN:
      return {
        ...state,
        isAuth: true,
      }
    case LOG_OUT:
      return {
        ...state,
        isAuth: false,
      }
    default:
      return state
  }
}
