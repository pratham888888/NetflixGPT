import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies= ()=>{
    const dispatch = useDispatch();
    const movieList = async ()=>{
      const movies= await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
      const json = await movies.json();
       dispatch(addPopularMovies(json.results));
      
    }
    
    useEffect(()=>{
       movieList();
    },[]);
}

export default usePopularMovies;