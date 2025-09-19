import React from 'react'
import LeftPanel from './leftpanel'
import VideoStream from './videoStream'

const VideoConfWindow = () => {
  return (
    <div className='w-full flex flex-row'>
        <LeftPanel/>
        <VideoStream/>

    </div>
  )
}

export default VideoConfWindow