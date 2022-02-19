import React from 'react';
import { addToWatchList } from '../services/fetch-utils';
import { useState, useEffect } from 'react';

export default function MovieItem({ 
  movie, 
  isOnWatchlist, 
  isWatched,
  // fetchAndSetWatchlist, 
  handleMovieClick
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
    else if (isWatchedBool) {
      return 'movie-item watched';
    }
    else {
      return 'movie-item';
    }
  }

  // const classNameShouldBe = classNames();
  // console.log(classNameShouldBe);
  
  // async function handleMovieClick() {
  //   const movieObj = {
  //     api_id: movie.id,
  //     title: movie.title,
  //     poster_path: movie.poster_path,
  //     overview: movie.overview
  //   };

  //   await addToWatchList(movieObj);
  //   // on click re-fetch and watchlist
  //   fetchAndSetWatchlist();
  // }

  return (
    <div 
      className={classNames()}
      onClick={()=> handleMovieClick(movie)}
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
