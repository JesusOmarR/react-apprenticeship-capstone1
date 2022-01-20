import React from 'react'
import { Link } from 'react-router-dom'

import './NotFound.styled.js'
import { NotFounContainer } from './NotFound.styled'

function NotFoundPage() {
  return (
    <NotFounContainer>
      <Link to="/" className="home-link">
        home
      </Link>
      <h2 className="home-link"> Ups! :(</h2>
      <img
        src="https://c.tenor.com/0UrmsdcX2v0AAAAd/confused-dog-cute.gif"
        alt="page not found"
        className="image-notfound"
      />
    </NotFounContainer>
  )
}

export default NotFoundPage
