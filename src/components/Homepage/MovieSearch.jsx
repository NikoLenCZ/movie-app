import React from 'react';
import './MovieSearch.css';

const MovieSearch = ({ query, setQuery }) => {

  return (
    <div className='searchBox'>
      <label htmlFor="searchMovie">Search movie: </label>
      <input value={query} onChange={e => setQuery(e.target.value)} id="searchMovie" className="searchInput" type="search" />
    </div>
  );
}

export default MovieSearch;
