import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies= ()=>{
    const dispatch = useDispatch();
    const movieList = async ()=>{
      const movies= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
      const json = await movies.json();
       dispatch(addNowPlayingMovies(json.results));
      console.log(json.results);
    }
    
    useEffect(()=>{
       movieList();
    },[]);
}

export default useNowPlayingMovies;
