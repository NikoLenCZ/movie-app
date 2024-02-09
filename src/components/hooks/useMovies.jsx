import { useState, useEffect } from 'react';
import { getMovies } from '../fetch';

const useMovies = (query) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      try {
        const results = await getMovies(query);
        setMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, [query]);

  return { movies, loading, error };
};

export default useMovies;
