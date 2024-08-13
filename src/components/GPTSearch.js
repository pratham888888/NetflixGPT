
import React from 'react'
import GPTSearchBar from './GPTSearchBar';
import GPTMovieSuggestion from './GPTMovieSuggestion';
import { BG_URL } from '../utils/constants';

const GPTSearch = () => {
  return (
    <div>
      <img className='-z-20 absolute'  src={BG_URL} alt='Background'/>
      <GPTSearchBar/>
      <GPTMovieSuggestion/>
  </div>

  )
}

export default GPTSearch;