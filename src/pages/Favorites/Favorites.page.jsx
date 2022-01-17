// Components
import React, { useEffect, useState, useContext } from 'react'
import { FavoritesContainer, FavoritesSubheader } from './Favorites.styled'
import ItemList from '../../components/ItemList'
import { Alert } from 'react-bootstrap'

// Context
import { GlobalContext } from '../../providers/Global/Global.provider'

function HomePage() {
  const [favoriteItems, setFavoriteItems] = useState([])

  // Use Context
  const { darkTheme } = useContext(GlobalContext)

  // Functions

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    setFavoriteItems(favorites)
  }, [])

  return (
    <FavoritesContainer darkTheme={darkTheme}>
      {favoriteItems.length > 0 ? (
        <>
          <FavoritesSubheader>Favorite videos</FavoritesSubheader>
          <ItemList redirectLink={'/favorites'} items={favoriteItems} />
        </>
      ) : (
        <Alert variant="danger">
          &apos;Ups you dont have favorite videos yet&apos;
        </Alert>
      )}
    </FavoritesContainer>
  )
}

export default HomePage
