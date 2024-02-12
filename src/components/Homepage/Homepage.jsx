import MovieSearch from "./MovieSearch";
import MovieList from "./MovieList";
import { useState } from "react";


export const Homepage = () => {
  const [query, setQuery] = useState('');
  return (
    <>
      <MovieSearch query={ query } setQuery={ setQuery } />
      <MovieList query={ query } />
    </>
  );
};
