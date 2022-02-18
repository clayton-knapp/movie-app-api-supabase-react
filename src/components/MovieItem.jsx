import React from 'react';
import { addToWatchList } from '../services/fetch-utils';

export default function MovieItem({ movie }) {
  async function handleMovieClick() {
    const movieObj = {
      api_id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      overview: movie.overview
    };

    await addToWatchList(movieObj);
  }

  return (
    <div className='movie-item'
      onClick={handleMovieClick}
    >
      <h2>{movie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
      <p>{movie.overview}</p>
    </div>
  );
}
