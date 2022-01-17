// Components
import React, { useEffect, useState, useContext } from 'react'
import { HomeContainer, HomeSubheader } from './Favorites.styled'
import ItemList from '../../components/ItemList'
import { Alert } from 'react-bootstrap'

// Context
import { GlobalContext } from '../../providers/Global/Global.provider'

function HomePage() {
  const [favoriteItems, setFavoriteItems] = useState([])
  const [loading, setLoading] = useState(false)

  // Use Context
  const { darkTheme } = useContext(GlobalContext)

  // Functions

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    setFavoriteItems(favorites)
  }, [])

  return (
    <HomeContainer darkTheme={darkTheme}>
      {favoriteItems.length > 0 ? (
        <>
          <HomeSubheader>Favorite videos</HomeSubheader>
          <ItemList redirectLink={'/favorites'} items={favoriteItems} />{' '}
        </>
      ) : (
        <Alert variant="danger">'Ups you dont have favorite videos yet'</Alert>
      )}
    </HomeContainer>
  )
}

export default HomePage
