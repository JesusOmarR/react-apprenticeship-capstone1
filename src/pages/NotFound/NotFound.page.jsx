import React from 'react'
import { Link } from 'react-router-dom'

import './NotFound.styles.css'

function NotFoundPage() {
  return (
    <section className="not-found">
      <Link to="/" className="home-link">
        home
      </Link>
      <h2>Ups! :(</h2>
      <img
        src="https://c.tenor.com/0UrmsdcX2v0AAAAd/confused-dog-cute.gif"
        alt="page not found"
      />
    </section>
  )
}

export default NotFoundPage
