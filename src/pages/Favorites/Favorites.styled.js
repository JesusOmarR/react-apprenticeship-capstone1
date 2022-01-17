import styled from 'styled-components'

export const FavoritesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100vw;
  height: 100%;
  background-color: ${(props) =>
    !props.darkTheme ? 'white' : 'rgb(211,211,211)'};
`

export const FavoritesSubheader = styled.h1`
  color: rgb(121, 21, 21);
`
