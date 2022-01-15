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
