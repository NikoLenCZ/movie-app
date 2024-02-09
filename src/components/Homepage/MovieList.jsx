import './MovieList.css';
import { useState } from "react";
import Thumbnail from './Thumbnail';
import useMovies from '../hooks/useMovies';


const MovieList = () => {
  const [query] = useState('');
  const { movies, loading, error } = useMovies(query);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: { error }</p>;
  if (!MovieList) return <p>No movie details available.</p>;

  return (
    <div className='movieList'>
      { movies.length > 0 ? (
        <ul className="movieWrapper">
          { movies.map(movie => (
            <Thumbnail key={ movie.id } movie={movie} />
          )) }
        </ul>
      ) : null }
    </div>
  );
};

export default MovieList;