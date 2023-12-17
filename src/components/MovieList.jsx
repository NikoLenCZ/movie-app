import './MovieList.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const MovieList = () => {

  const apiKey = import.meta.env.VITE_API_KEY;
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));

  const getMovies = async () => {
    setLoading(true);
    try
    {
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`);
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
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: { error }</p>;
  if (!MovieList) return <p>No movie details available.</p>;

  return (
    <div className='movieList'>
      <div className='searchBox'>
        <label htmlFor="searchMovie">Search movie: </label>
        <input value={ query } onChange={ e => setQuery(e.target.value) } id="searchMovie" className="serachInput" type="search" />
      </div>
      { movies.length > 0 ? (
        <ul className="movieWrapper">
          { filteredMovies.map(movie => (
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