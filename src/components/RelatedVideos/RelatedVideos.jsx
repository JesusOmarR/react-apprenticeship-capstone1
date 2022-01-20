// Component
import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { RelatedContainer, RelatedItem, ItemImage } from './Related.styled'
import { GlobalContext } from '../../providers/Global/Global.provider'

function RelatedVideos({ related }) {
  const history = useHistory()
  const { darkTheme } = useContext(GlobalContext)

  // Functions
  const onClickItem = (id) => {
    history.push(`./${id}`)
  }

  // if  there are not related videos yet return a loading
  return !related ? (
    <>...Loading</>
  ) : (
    <RelatedContainer darkTheme={darkTheme}>
      {related.map((item) =>
        !item.snippet ? (
          ''
        ) : (
          <RelatedItem
            key={item.id.videoId}
            onClick={() => onClickItem(item.id.videoId)}
            darkTheme={darkTheme}
          >
            <ItemImage src={item?.snippet?.thumbnails?.high?.url} />
            <div className="item-info">
              <p className="item-title">{item?.snippet?.title}</p>
              <p className="item-channel">
                Published by: {item?.snippet?.channelTitle}
              </p>
            </div>
          </RelatedItem>
        )
      )}
    </RelatedContainer>
  )
}

export default RelatedVideos
