// Modules
import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import VideoComponent from '../../components/VideoComponent/VideoComponent'
import { FavoriteVideoDetailsContainer } from './FavoriteVideol.styled'
import { Redirect } from 'react-router-dom'

// Context
import { GlobalContext } from '../../providers/Global/Global.provider'

function FavoriteVideoDetails() {
  // videoId param to search the video
  const { videoid } = useParams()
  const { darkTheme, favoriteVideos } = useContext(GlobalContext)
  const [videoDetailed, setVideoDetailed] = useState({})
  const [loading, setLoading] = useState(false)

  // Functions
  useEffect(() => {
    setLoading(true)
    const favoriteVideo = favoriteVideos.find(
      (video) => video.id.videoId === videoid
    )
    setVideoDetailed(favoriteVideo)
    setLoading(false)
  }, [videoid])

  return loading ? (
    '..Loading'
  ) : (
    <FavoriteVideoDetailsContainer darkTheme={darkTheme}>
      {!videoDetailed && <Redirect to="/favorites" />}
      <VideoComponent video={videoDetailed} relatedVideos={favoriteVideos} />
    </FavoriteVideoDetailsContainer>
  )
}

export default FavoriteVideoDetails
