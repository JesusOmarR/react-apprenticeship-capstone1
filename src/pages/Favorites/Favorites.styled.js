import styled from 'styled-components'

export const FavoritesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: fixed;
  background-color: ${(props) =>
    !props.darkTheme ? 'white' : 'rgb(211,211,211)'};

  .alert-div {
    height: 100vh;
  }
`

export const FavoritesSubheader = styled.h1`
  color: rgb(121, 21, 21);
`
