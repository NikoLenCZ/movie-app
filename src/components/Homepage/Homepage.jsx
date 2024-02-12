import MovieSearch from './MovieSearch';
import MovieList from './MovieList';
import { useState } from 'react';
import { MainTitle } from '../General/MainTitle';

export const Homepage = () => {
  const [query, setQuery] = useState('');
  return (
    <>
      <MainTitle>Popular movies</MainTitle>
      <MovieSearch
        query={query}
        setQuery={setQuery}
      />
      <MovieList query={query} />
    </>
  );
};
