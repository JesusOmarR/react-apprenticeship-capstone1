// Modules
import React, { useState, useContext } from 'react'
import RelatedVideos from '../RelatedVideos'
import {
  VideoComponentContainer,
  FavoritesButton,
} from './VideoComponent.styled'
import { useEffect } from 'react'
import { GlobalContext } from '../../providers/Global/Global.provider'

function VideoComponent({ video, relatedVideos }) {
  const [isOnFavorites, setIsOnFavorites] = useState(false)
  const { addToFavorites, removeFromFavorites, darkTheme } =
    useContext(GlobalContext)

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites'))
    if (favorites) {
      const isListed = favorites.find(
        (favorite) => favorite.etag === video?.etag
      )
      setIsOnFavorites(Boolean(isListed))
    }
  }, [video])

  const addToFavoriteVideos = () => {
    addToFavorites(video)
    setIsOnFavorites(true)
  }

  const removeFromFavoriteVideos = () => {
    removeFromFavorites(video)
    setIsOnFavorites(false)
  }

  return (
    <VideoComponentContainer>
      <div className="videoInfo-container">
        <div className="iframe-container">
          <iframe
            className="responsive-iframe"
            src={`https://www.youtube.com/embed/${video?.id?.videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
        <h3>{video?.snippet?.title}</h3>{' '}
        {isOnFavorites ? (
          <FavoritesButton
            darkTheme={darkTheme}
            onClick={removeFromFavoriteVideos}
          >
            Remove from Favorites
          </FavoritesButton>
        ) : (
          <FavoritesButton darkTheme={darkTheme} onClick={addToFavoriteVideos}>
            Add Favorites
          </FavoritesButton>
        )}
        <p>{video?.snippet?.description}</p>
      </div>
      <div className="related-list">
        <RelatedVideos related={relatedVideos} />
      </div>
    </VideoComponentContainer>
  )
}

export default VideoComponent
