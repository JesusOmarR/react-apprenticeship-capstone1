import styled from 'styled-components'

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(19rem, 1fr));
  width: 90vw;
`
export const Card = styled.div`
  width: 19rem;
  fit-content(20em);
  display: flex;
  justify-content: left;
  align-items: flex-start;
  margin: 1rem auto;
  border-radius: 5px;
  flex-direction: column;
  box-shadow:  ${(props) =>
    props.darkTheme ? '0 4px 2px black' : '0 4px 2px grey'};
  cursor: pointer;
  background-color: ${(props) =>
    props.darkTheme ? '#8c8c8c' : 'rgba(216, 221, 253, 0.35)'};
    color:black;
  

  .items-container{
    width:100%;
    padding:0 !important;
  }
  
  .cover-image {
    border-radius: 8px 5px 0 0;
    width: 100%;
    height: 10rem;
  }
  .infose-ction {
    padding: 1rem 0.5rem;
    height: 16rem;
    max-width:18rem;
    
  }

  .card-title {
    font-size:1.3rem;
  }

  .card-paragraph {
    text-align: left;
    font-size:0.8rem;
    
  }

  .favButton{
    display:none;
    position:absolute;
    border:none;
    background-color:white;
    padding: 0.2rem 0.5rem;
    border-radius: 5px;

    :hover{
      background-color: grey;
      color: white;
    }
  }

  :hover{
  
   .favButton{
    display:block;
   }
  }
`
