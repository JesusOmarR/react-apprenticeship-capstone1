import styled from 'styled-components'

export const NavContainer = styled.div`
  width: 100vw;
  background-color: red;
`
export const ItemsNavContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .login-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    a {
      margin: 0 1rem;
    }
  }

  .formcheck {
    color: ${(props) => (!props.darkTheme ? 'black' : 'white')};
  }

  .navbar-toggler {
    background-color: white;
  }
`
export const IconImage = styled.img`
  width: 2rem;
  border-radius: 50%;
  margin-right: 0.5rem;
`
