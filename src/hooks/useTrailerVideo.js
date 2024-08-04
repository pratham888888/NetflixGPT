
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addVideoTrailer } from '../utils/movieSlice';

const useTrailerVideo = (id) => {

    const dispatch= useDispatch();
    const getMovieVideo=  async ()=>{
      
       
        const movie= await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US', API_OPTIONS)
        const json = await movie.json();
        console.log(json);

        const filterData= json.results.filter(video=> video.type==="Trailer");
        const trailer= filterData.length? filterData[0]: json.results[0];
        console.log(trailer);
        dispatch(addVideoTrailer(trailer));
        
    }

    useEffect(()=>{
        getMovieVideo()
    }    
    ,[]);

}

export default useTrailerVideo