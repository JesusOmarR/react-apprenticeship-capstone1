// Components
import React, { useContext } from 'react'
import { FavoritesContainer, FavoritesSubheader } from './Favorites.styled'
import ItemList from '../../components/ItemList'
import { Alert } from 'react-bootstrap'

// Context
import { GlobalContext } from '../../providers/Global/Global.provider'

function HomePage() {
  // Use Context
  const { darkTheme, favoriteVideos } = useContext(GlobalContext)

  return (
    <FavoritesContainer darkTheme={darkTheme}>
      {favoriteVideos.length > 0 ? (
        <>
          <FavoritesSubheader>Favorite videos</FavoritesSubheader>
          <ItemList redirectLink={'/favorites'} items={favoriteVideos} />
        </>
      ) : (
        <div className="alert-div">
          <Alert variant="danger">
            &apos;Ups you dont have favorite videos yet&apos;
          </Alert>
        </div>
      )}
    </FavoritesContainer>
  )
}

export default HomePage
