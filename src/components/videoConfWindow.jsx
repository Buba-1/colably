import React from 'react'
import LeftPanel from './leftpanel'
import VideoStream from './videoStream'

const videoConfWindow = () => {
  return (
    <div className='w-full '>
        <LeftPanel/>
        <VideoStream/>

    </div>
  )
}

export default videoConfWindow