// Components
import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Card, ListContainer } from './ItemList.styled'
import { GlobalContext } from '../../providers/Global/Global.provider'

function ItemList({ items, redirectLink }) {
  // Constanst
  const history = useHistory()
  const { addToFavorites, removeFromFavorites, favoriteVideos, darkTheme } =
    useContext(GlobalContext)

  // Functions
  const onClickCard = (id) => {
    history.push(`${redirectLink}/${id}`)
  }

  const addToFavoriteVideos = (video) => {
    addToFavorites(video)
  }

  const removeFromFavoriteVideos = (video) => {
    removeFromFavorites(video)
    console.log(video)
  }

  return (
    <ListContainer>
      {items.map((video) => (
        <>
          {' '}
          <Card key={video.etag} darkTheme={darkTheme}>
            <div
              className="items-container"
              onClick={() => onClickCard(video.id.videoId)}
            >
              <img
                className="cover-image"
                alt="preview"
                src={video?.snippet?.thumbnails?.high?.url}
              />
              <div className="infose-ction">
                <h3 className="card-title">{video?.snippet?.title}</h3>
                <p className="card-paragraph">{video?.snippet?.description}</p>
              </div>
            </div>
            {!favoriteVideos.find(
              (favorite) => favorite.id.videoId === video.id.videoId
            ) ? (
              <button
                className="favButton"
                onClick={() => addToFavoriteVideos(video)}
              >
                Add to favs
              </button>
            ) : (
              <button
                className="favButton"
                onClick={() => removeFromFavoriteVideos(video)}
              >
                remove from favs
              </button>
            )}
          </Card>
        </>
      ))}
    </ListContainer>
  )
}

export default ItemList
