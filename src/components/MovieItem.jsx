import React from 'react';
import { addToWatchList } from '../services/fetch-utils';
import { useState, useEffect } from 'react';

export default function MovieItem({ movie, isOnWatchlist, fetchAndSetWatchlist, isWatched }) {

  // console.log('api_id', movie.id);
  const onWatchlistBool = isOnWatchlist(movie.id);
  const isWatchedBool = isWatched(movie.id);

  function classNames(){
    if (onWatchlistBool && isWatchedBool) {
      return 'movie-item on-watchlist watched';
    }
    else if (onWatchlistBool) {
      return 'movie-item on-watchlist';
    }
    //THIS CASE SHOULD NEVER HAPPEN
    else if (isWatchedBool) {
      return 'movie-item watched';
    }
    else {
      return 'movie-item';
    }
  }

  // const classNameShouldBe = classNames();
  // console.log(classNameShouldBe);
  
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
    <div 
      className={classNames()}
      // (onWatchlistBool) ? 'movie-item on-watchlist' : 'movie-item' 
      // className={(isWatched) ? 'is-watched' : ''} 
      onClick={handleMovieClick}
    >
      <p>
        {
          (isWatchedBool) && 'Watched ✅'
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
