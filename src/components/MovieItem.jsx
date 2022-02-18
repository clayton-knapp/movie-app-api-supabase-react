import React from 'react';
import { addToWatchList } from '../services/fetch-utils';
import { useState, useEffect } from 'react';

export default function MovieItem({ movie, isOnWatchlist, fetchAndSetWatchlist }) {

  // console.log('api_id', movie.id);
  const onWatchlistBool = isOnWatchlist(movie.id);
  
  async function handleMovieClick() {
    const movieObj = {
      api_id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      overview: movie.overview
    };

    await addToWatchList(movieObj);
    // on click re-fetch and watchlist
    fetchAndSetWatchlist();
  }

  return (
    <div className='movie-item'
      onClick={handleMovieClick}
    >
      <p>
        {
          (onWatchlistBool) && 'In Watchlist 👀'
        }
      </p>
      <h2>{movie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
      <p>{movie.overview}</p>
    </div>
  );
}
