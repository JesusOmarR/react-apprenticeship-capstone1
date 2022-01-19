// Modules
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import VideoComponent from '../../components/VideoComponent/VideoComponent'
import { VideoDetailsContainer } from './VideoDetails.styled'
import useApiCall from '../../utils/hooks/useApiCall'

// Context
import { GlobalContext } from '../../providers/Global/Global.provider'

function VideoDetails() {
  // videoId param to search the video
  const { videoid } = useParams()
  const { darkTheme } = useContext(GlobalContext)

  const { data, loading: videoLoading } = useApiCall(`/search?q=${videoid}`)
  const { data: relatedVideos, loading: relatedLoading } = useApiCall(
    `/search?relatedToVideoId=${videoid}`
  )

  return videoLoading || relatedLoading || !data ? (
    '..Loading'
  ) : (
    <VideoDetailsContainer darkTheme={darkTheme}>
      <VideoComponent video={data[0]} relatedVideos={relatedVideos} />
    </VideoDetailsContainer>
  )
}

export default VideoDetails
