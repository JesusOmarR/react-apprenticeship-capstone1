// Components
import React from 'react'
import { useHistory } from 'react-router-dom'
import { Card, ListContainer } from './ItemList.styled'

function ItemList({ items, redirectLink }) {
  // Constanst
  const history = useHistory()

  // Functions
  const onClickCard = (id) => {
    history.push(`${redirectLink}/${id}`)
  }

  return (
    <ListContainer>
      {items.map((item) => (
        <Card key={item.etag} onClick={() => onClickCard(item.id.videoId)}>
          <img
            className="cover-image"
            alt="preview"
            src={item?.snippet?.thumbnails?.high?.url}
          />
          <div className="infose-ction">
            <h3 className="card-title">{item?.snippet?.title}</h3>
            <p className="card-paragraph">{item?.snippet?.description}</p>
          </div>
        </Card>
      ))}
    </ListContainer>
  )
}

export default ItemList
