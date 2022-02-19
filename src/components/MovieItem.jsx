import React from 'react';
import { addToWatchList } from '../services/fetch-utils';
import { useState, useEffect } from 'react';

export default function MovieItem({ 
  movie, 
  isOnWatchlist, 
  isWatched,
  // fetchAndSetWatchlist, 
  handleClick
}) {
  let onWatchlistBool;
  let isWatchedBool;

  //Run the bool functions only if they were passed as props
  if (isOnWatchlist) {
    onWatchlistBool = isOnWatchlist(movie.id);
  }
  if (isWatched) {
    isWatchedBool = isWatched(movie.id);
  }

  //function to return class names based on booleans
  function classNames(){
    if (onWatchlistBool && isWatchedBool) {
      return 'movie-item on-watchlist watched';
    }
    else if (onWatchlistBool) {
      return 'movie-item on-watchlist';
    }
    //THIS CASE SHOULD NEVER HAPPEN
    else if (isWatchedBool || movie.watched) {
      return 'movie-item watched';
    }
    else {
      return 'movie-item';
    }
  }

  return (
    <div 
      className={classNames()}
      onClick={()=> handleClick(movie)}
    >
      <p>
        {
          (isWatchedBool || movie.watched) && 'Watched ✅'
        }
      </p>
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
