
import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className=' pr-1 w-48 hover:opacity-70 cursor-pointer mr-2'>
        <img alt="Movie Poster"
         src= {IMG_CDN_URL+ posterPath}
        />
    </div>
  )
}

export default MovieCard