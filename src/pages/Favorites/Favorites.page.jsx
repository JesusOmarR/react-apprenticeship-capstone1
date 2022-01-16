// Components
import React, { useEffect, useState, useContext } from 'react'
import { HomeContainer, HomeSubheader } from './Favorites.styled'
import ItemList from '../../components/ItemList'

// Context
import { GlobalContext } from '../../providers/Global/Global.provider'

function HomePage() {
  const [youtubeItems, setYoutubeItems] = useState([])
  const [loading, setLoading] = useState(false)

  // Use Context
  const { darkTheme } = useContext(GlobalContext)

  // Functions
  useEffect(() => {}, [])

  useEffect(() => {
    return () => {
      setYoutubeItems([])
      setLoading(false)
    }
  }, [])

  return loading ? (
    '...Loading'
  ) : (
    <HomeContainer darkTheme={darkTheme}>
      <HomeSubheader>Favorite videos</HomeSubheader>
      <ItemList items={youtubeItems} />
    </HomeContainer>
  )
}

export default HomePage
