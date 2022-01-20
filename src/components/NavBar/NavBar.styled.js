import styled from 'styled-components'

export const NavContainer = styled.div`
  max-width: 100vw;
  background-color: red;

  .side-toogle {
  }
  .side-menu__mobil {
  }
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
    @media only screen and (max-width: 570px) {
      display: none;
    }
  }

  .link-container {
    display: flex;
    @media only screen and (max-width: 720px) {
      display: none;
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
  margin-right: 0.8rem;
`
export const SideToogle = styled.div`
  display: none;

  @media only screen and (max-width: 570px) {
    display: block;
  }
`
export const SideLink = styled.div`
  display: none;

  @media only screen and (max-width: 720px) {
    display: block;
  }
`
