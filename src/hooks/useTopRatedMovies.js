import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies= ()=>{
    const dispatch = useDispatch();
    const movieList = async ()=>{
      const movies= await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
      const json = await movies.json();
       dispatch(addTopRatedMovies(json.results));
      
    }
    
    useEffect(()=>{
       movieList();
    },[]);
}

export default useTopRatedMovies;