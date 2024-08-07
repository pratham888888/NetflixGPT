
import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addVideoTrailer } from '../utils/movieSlice';
import useTrailerVideo from '../hooks/useTrailerVideo';

const VideoBackground = ({id}) => {
    
    useTrailerVideo(id);
    const trailer= useSelector(state=> state.movies?.videoTrailer)
    
  return (
    <div className='w-full'><iframe className='w-full aspect-video' 
    src= {"https://www.youtube.com/embed/"+trailer?.key+"?si=Idh8n5XuYIA&autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe></div>
  )
}

export default VideoBackground