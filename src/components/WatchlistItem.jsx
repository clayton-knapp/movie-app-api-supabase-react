import React from 'react';

export default function WatchlistItem({ watchlistMovie }) {
  return (
    <div className='movie-item'
      // onClick={handleMovieClick}
    >
      <h2>{watchlistMovie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${watchlistMovie.poster_path}`}></img>
      <p>{watchlistMovie.overview}</p>
    </div>
  );
}
