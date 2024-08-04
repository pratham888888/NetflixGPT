
import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {

     const movies= useSelector(state=> state.movies?.nowPlayingMovies);
     if(!movies) return;
     const mainMovie= movies[0];
     if(!mainMovie) return;
     console.log(mainMovie);
     const {original_title, overview,id}= mainMovie;

  return (
    <div className='relative w-full h-full'><VideoBackground   id={id}/>
        <VideoTitle  title={original_title} overview={overview} /></div>
    
  )
}

export default MainContainer