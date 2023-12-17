import './MovieDetail.css';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";


const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  const [cast, setCast] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  const getMovieDetail = async () => {
    setLoading(true);
    try
    {
      const apiKey = import.meta.env.VITE_API_KEY;
      const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
      const castUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`;

      const responses = await Promise.all([
        fetch(movieUrl),
        fetch(castUrl)
      ]);

      const [movieResponse, castResponse] = responses;

      if (!movieResponse.ok || !castResponse.ok)
      {
        throw new Error('Failed to fetch data');
      }

      const movieData = await movieResponse.json();
      const castData = await castResponse.json();

      setMovieDetail(movieData);
      setCast(castData.cast);

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
    getMovieDetail();
  }, [id]);

  const toggleCastVisibility = () => {
    setIsExpanded(!isExpanded);
  };

  const maxVisibleActors = 6;

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: { error }</p>;
  if (!movieDetail) return <p>No movie details available.</p>;

  const genresString = movieDetail.genres.map(genre => genre.name).join(', ');
  const movieYear = movieDetail.release_date.slice(0, 4);
  const movieMonth = movieDetail.release_date.slice(5, 7);
  const movieDay = movieDetail.release_date.slice(8, 10);
  const userScore = Math.round(movieDetail.vote_average * 10);

  const actorsToShow = isExpanded ? cast : cast.slice(0, maxVisibleActors);


  return (
    <div className='movieDetail'>
      <h2>{ movieDetail.title } ({ movieYear })</h2>
      <p className='subtitle'>{ movieDetail.tagline }</p>
      <div className='detailBox'>
      <img src={ movieDetail.backdrop_path ? `https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}` : '/img/movie.png' } alt="movie poster" />
        <div className='detailDesc'>
          <p>Genres: { genresString }</p>
          <p>User score: { userScore }%</p>
          <p>Release date: { movieDay }. { movieMonth }. { movieYear }</p>
          <p>Original language: { movieDetail.original_language }</p>
          <p>Runtime: { movieDetail.runtime } min</p>
          <p>Homepage: <a href={ movieDetail.homepage }>{ movieDetail.homepage ? movieDetail.title : '' }</a>
          </p>
        </div>
      </div>
      <h3>Movie overview</h3>
      <p className='detailDescription'> { movieDetail.overview }</p>
      <h3>Cast</h3>
      <ul className='actorsList'>
        { actorsToShow.filter(actor => actor.known_for_department === "Acting").map(actor => (
          <li key={ actor.id }>
            <div className='actor'>
              <img src={ actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : "/img/actor.png" } alt={ `${actor.name} photo` } />
              <p>{ actor.name } </p>
            </div>
          </li>
        )) }
      </ul>
      <div>
        { cast.length > maxVisibleActors && (
          <button className='showActor' onClick={ toggleCastVisibility }>
            { isExpanded ? 'Show less actors' : 'Show more actors' }
          </button>
        ) }
      </div>
      <Link className='backLink' to="/">Back to movie list</Link>
    </div>
  );
};

export default MovieDetail;
