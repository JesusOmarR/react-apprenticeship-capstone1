// Components
import React, { useEffect, useState, useContext } from 'react'
import { HomeContainer, HomeSubheader } from './Favorites.styled'
import ItemList from '../../components/ItemList'

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

  return favoriteItems.length > 0 ? (
    <HomeContainer darkTheme={darkTheme}>
      <HomeSubheader>Favorite videos</HomeSubheader>
      <ItemList items={favoriteItems} />
    </HomeContainer>
  ) : (
    'Ups you dont have favorite videos yet'
  )
}

export default HomePage
