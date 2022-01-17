import styled from 'styled-components'

export const VideoComponentContainer = styled.div`
  display: flex;
  flex-direction: row;

  .videoInfo-container {
    width: 68vw;
  }

  .iframe-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%;
  }

  .responsive-iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`
export const FavoritesButton = styled.button`
  background-color: ${(props) => (!props.darkTheme ? '#3ca2c3' : 'black')};
  box-shadow: none;
  border: 0;
  padding: 0.3rem 0.7rem;
  color: white;
  border-radius: 5px;

  :hover {
    background-color: #30829c;
  }
`
