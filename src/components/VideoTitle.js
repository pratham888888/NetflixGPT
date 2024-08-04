
import React from 'react'

const VideoTitle = ({overview,title}) => {
  return (
    <div className='absolute top-0 left-0 px-28 pt-80 z-50 w-full aspect-video bg-gradient-to-r from-black text-white' ><h1 className='pb-10 font-bold text-5xl'>{title}</h1>
    <h2  className='w-1/3'>{overview}</h2>
    <div className='flex'>
    <button className=' my-4 font-semibold bg-white text-black w-54 px-16 py-4 rounded-md hover:opacity-80 text-lg'> {"Play"}</button>
    <button className=' mx-4 my-4 bg-slate-800 text-white w-54 px-12 py-4 rounded-md hover:opacity-80 border-1 border-black text-lg'> {"More info"}</button>
    </div>
    </div>
  )
}

export default VideoTitle