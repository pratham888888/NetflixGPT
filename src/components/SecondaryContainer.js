
import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {

    const movies= useSelector(store=> store.movies)


  return (
    movies?.nowPlayingMovies&&(<div className=' bg-black max-w-full '>
        <div className='-my-60 relative z-20'>
        <MovieList  title={"Now Playing Movies"} movies={movies.nowPlayingMovies} />
        <MovieList className="" title={"Top Rated Now"} movies={movies.topRatedMovies} />
        <MovieList className="" title={"Popular Movies"} movies={movies.popularMovies} />
        <MovieList className="" title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        </div>
        
        </div>
    )
  )
}

export default SecondaryContainer