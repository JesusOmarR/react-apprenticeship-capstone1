import styled from 'styled-components'

export const RelatedContainer = styled.div`
  display: flex;
  width: 32vw;
  flex-direction: column;
  overflow-y: scroll;
  height: 100vh;
  padding: 0.5rem 1rem;
  cursor: pointer;
  align-items: center;
  margin: 0 auto;

  .item-info {
    padding: 0.5rem 0.5rem;
  }
  .item-title {
    font-size: 1rem;
  }
  .item-channel {
    font-size: 0.5rem;
    color: ${(props) => (props.darkTheme ? 'white' : 'grey')};
  }
  ::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 1080px) {
    width: 95%;
  }
`

export const RelatedItem = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.2rem 0;
  padding: 0;
  width: 90%;
  border: 1px solid grey;
  border-radius: 5px;
  background-color: ${(props) =>
    props.darkTheme ? '#8c8c8c' : 'rgba(216, 221, 253, 0.35)'};

  :hover {
    box-shadow: 1px 5px 3px grey;
  }
`

export const ItemImage = styled.img`
  max-width: 10rem;
  min-height: 8rem;
`
