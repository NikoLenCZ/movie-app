import React from 'react';
import { Link } from "react-router-dom";

const Thumbnail = ({movie}) => {
  return (
    <li className="movieCard">
              <Link to={ `/movie/${movie.id}` }>
                <img src={ movie.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : '/img/movie.png' } alt="movie poster" />
                <h3>{ movie.title }</h3>
              </Link>
            </li>
  )
}

export default Thumbnail;