// Modules
import React, { useState } from 'react'
import RelatedVideos from '../RelatedVideos'
import { VideoComponentContainer } from './VideoComponent.styled'
import { useEffect } from 'react'

function VideoComponent({ video, relatedVideos }) {
  const [isOnFavorites, setIsOnFavorites] = useState(false)

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites'))
    if (favorites) {
      const isListed = favorites.find(
        (favorite) => favorite.etag === video.etag
      )
      setIsOnFavorites(Boolean(isListed))
    }
  }, [])

  const addToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    favorites.push(video)
    localStorage.setItem('favorites', JSON.stringify(favorites))
    setIsOnFavorites(true)
  }

  const removeFromFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites'))
    favorites = favorites.filter((favorite) => {
      return favorite.etag !== video.etag
    })
    localStorage.setItem('favorites', JSON.stringify(favorites))
    setIsOnFavorites(false)
  }

  return (
    <VideoComponentContainer>
      <div className="videoInfo-container">
        <div className="iframe-container">
          <iframe
            className="responsive-iframe"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
        <h3>{video.snippet.title}</h3>{' '}
        {isOnFavorites ? (
          <button onClick={removeFromFavorites}>Remove from Favorites</button>
        ) : (
          <button onClick={addToFavorites}>Add Favorites</button>
        )}
        <p>{video.snippet.description}</p>
      </div>
      <div className="related-list">
        <RelatedVideos related={relatedVideos} />
      </div>
    </VideoComponentContainer>
  )
}

export default VideoComponent
