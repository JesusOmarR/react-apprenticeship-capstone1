// Components
import React, { useState, useContext } from 'react'
import {
  Navbar,
  Container,
  Offcanvas,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap'
import {
  NavContainer,
  ItemsNavContainer,
  IconImage,
  SideToogle,
  SideLink,
} from './NavBar.styled'
import { useHistory } from 'react-router-dom'
import userAvatar from '../../assets/download.png'

// Context
import { GlobalContext } from '../../providers/Global/Global.provider'

function NavBar() {
  const [params, setParams] = useState('wizeline')
  const { onSubmitSearch, changeTheme, darkTheme, isAuth, logOut } =
    useContext(GlobalContext)
  const history = useHistory()

  // Functions
  const onSubmit = (e) => {
    e.preventDefault()
    history.push('/')
    onSubmitSearch(params)
  }

  const onToogleChange = () => {
    changeTheme()
  }

  return (
    <NavContainer>
      <Navbar collapseOnSelect bg={darkTheme ? 'dark' : 'light'} expand={false}>
        <Container fluid>
          <ItemsNavContainer darkTheme={darkTheme}>
            <Navbar.Toggle
              bsPrefix="navbar-toggler"
              aria-controls="offcanvasNavbar"
            />
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={params}
                onChange={(e) => setParams(e.target.value)}
                onKeyPress={(e) => {
                  e.key === 'Enter' && e.preventDefault()
                }}
              />
              <Button
                role={'search'}
                onClick={onSubmit}
                variant="outline-success"
              >
                Search
              </Button>
            </Form>

            <div className="login-container">
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  onChange={onToogleChange}
                  checked={darkTheme ? true : false}
                  label="Dark theme"
                  className="formcheck"
                />
              </Form>
              <div className="link-container">
                {isAuth ? (
                  <a onClick={logOut} href="/">
                    LogOut
                  </a>
                ) : (
                  <a href={'/login'}>Login</a>
                )}
                <IconImage
                  src={isAuth.avatarUrl ? isAuth.avatarUrl : userAvatar}
                ></IconImage>
              </div>
            </div>
          </ItemsNavContainer>

          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Wize Tube
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <SideToogle>
                <Form>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    onChange={onToogleChange}
                    checked={darkTheme ? true : false}
                    label="Dark theme"
                    className="formcheck"
                  />
                </Form>
              </SideToogle>

              <p>
                <a href="/">Home</a>
              </p>
              {isAuth ? (
                <a href="/favorites">Favorites</a>
              ) : (
                <a href="/login">Login</a>
              )}

              <SideLink>
                <div className="side-link">
                  {isAuth ? (
                    <a onClick={logOut} href="/">
                      LogOut
                    </a>
                  ) : (
                    <a href={'/login'}>Login</a>
                  )}
                </div>
              </SideLink>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </NavContainer>
  )
}

export default NavBar
