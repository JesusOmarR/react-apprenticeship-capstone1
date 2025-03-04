import styled from 'styled-components'

export const NotFounContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  .home-link {
    font-size: 1rem;
    text-decoration: none;
    display: block;
    text-align: right;
    padding: 0.2rem 0.3rem;
    margin: 0 auto;
  }

  .home-link::before {
    content: '←';
    padding-right: 0.2rem;
    display: inline-block;
  }
  .image-notfound {
    width: 60%;
    margin: 0 auto;
  }
`
