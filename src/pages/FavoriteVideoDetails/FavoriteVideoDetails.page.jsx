// Modules
import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import VideoComponent from '../../components/VideoComponent/VideoComponent'
import { VideoDetailsContainer } from './FavoriteVideol.styled'
import { Redirect } from 'react-router-dom'

// Context
import { GlobalContext } from '../../providers/Global/Global.provider'

function FavoriteVideoDetails() {
  // videoId param to search the video
  const { videoid } = useParams()
  const { darkTheme, favoriteVideos } = useContext(GlobalContext)
  const [videoDetailed, setVideoDetailed] = useState(null)
  const [relatedVideos, setRelatedVideos] = useState([])
  const [loading, setLoading] = useState(false)

  // Functions
  useEffect(() => {
    const favoriteVideo = favoriteVideos.find(
      (video) => video.id.videoId === videoid
    )

    setVideoDetailed(favoriteVideo)
    setRelatedVideos(favoriteVideos)
  }, [videoid])

  return loading || !videoDetailed ? (
    '..Loading'
  ) : (
    <VideoDetailsContainer darkTheme={darkTheme}>
      <VideoComponent video={videoDetailed} relatedVideos={favoriteVideos} />
    </VideoDetailsContainer>
  )
}

export default FavoriteVideoDetails
