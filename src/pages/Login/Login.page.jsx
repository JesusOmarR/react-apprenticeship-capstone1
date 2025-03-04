import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import { LoginContainer, LoginForm } from './LoginPage.styled'
import loginApi from '../../utils/login.api'
import { GlobalContext } from '../../providers/Global/Global.provider'
import { Alert } from 'react-bootstrap'

function LoginPage() {
  const [user, setUser] = useState({
    userName: '',
    password: '',
  })
  const [loginError, setLoginError] = useState(false)
  const { isAuth, login } = useContext(GlobalContext)
  const { userName, password } = user
  const history = useHistory()

  useEffect(() => {
    if (isAuth) {
      history.push('/')
    }
    // eslint-disable-next-line
  }, [isAuth])

  const authenticate = (event) => {
    event.preventDefault()

    loginApi(userName, password)
      .then((response) => {
        console.log(response)
        login(response)
        history.push('/')
      })
      .catch((err) => {
        console.log(err)
        setLoginError(true)
        setTimeout(() => {
          setLoginError(false)
        }, 3000)
      })
  }

  const onChangeInput = (event) => {
    console.log(event.target.name)
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <LoginContainer>
      <h1>Welcome back!</h1>
      {loginError && <Alert variant="danger">Invalid credentials</Alert>}
      <LoginForm>
        <div className="form-group">
          <label htmlFor="username">
            <strong>username </strong>
            <input
              value={user.userName}
              required
              name="userName"
              type="text"
              id="username"
              onChange={onChangeInput}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <strong>password </strong>
            <input
              value={user.password}
              required
              name="password"
              type="password"
              id="password"
              onChange={onChangeInput}
            />
          </label>
        </div>
        <button onClick={authenticate} type="submit">
          login
        </button>
      </LoginForm>
    </LoginContainer>
  )
}

export default LoginPage
