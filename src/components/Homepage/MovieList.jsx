import './MovieList.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import MovieSearch from './MovieSearch';
import { Thumbnail } from './Thumbnail';


const MovieList = () => {

  const apiKey = import.meta.env.VITE_API_KEY;
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const URL_API = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
  const URL_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

  const getMovies = async () => {

    setLoading(true);
    try
    {
      let url = query ? URL_SEARCH : URL_API;
      const response = await fetch(url);
      const json = await response.json();
      setMovies(json.results);
    } catch (error)
    {
      setError(error.message);
    }
    finally
    {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, [query, apiKey]);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: { error }</p>;
  if (!MovieList) return <p>No movie details available.</p>;

  return (
    <div className='movieList'>
    {/* <MovieSearch query={ query } setQuery={ setQuery } /> */}
      { movies.length > 0 ? (
        <ul className="movieWrapper">
          { movies.map(movie => (
            <li key={ movie.id } className="movieCard">
              <Link to={ `/movie/${movie.id}` }>
                <img src={ movie.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : '/img/movie.png' } alt="movie poster" />
                <h3>{ movie.title }</h3>
              </Link>
            </li>
          )) }
        </ul>
      ) : null }
    </div>
  );
};

export default MovieList;