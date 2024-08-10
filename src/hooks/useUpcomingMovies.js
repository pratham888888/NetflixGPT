import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies= ()=>{
    const dispatch = useDispatch();
    const movieList = async ()=>{
      const movies= await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
      const json = await movies.json();
       dispatch(addUpcomingMovies(json.results));
      
    }
    
    useEffect(()=>{
       movieList();
    },[]);
}

export default useUpcomingMovies;