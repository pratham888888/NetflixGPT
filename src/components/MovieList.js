
import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies}) => {
    return (
      <div className='mb-8' >
        <h1 className='text-3xl text-white p-6'>{title}</h1>
        <div className='flex overflow-x-scroll no-scrollbar pl-2'
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className='flex' style={{ WebkitOverflowScrolling: 'touch' }}>
            {movies.length > 0 ? (
              movies.map((movie) => (
                <MovieCard key={movie.id} posterPath={movie.poster_path} />
              ))
            ) : (
              <p className='text-white'>No movies available</p>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default MovieList;
  