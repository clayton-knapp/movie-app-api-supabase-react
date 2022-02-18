import React from 'react';
import { addToWatchList } from '../services/fetch-utils';
import { useState, useEffect } from 'react';
import { fetchWatchList } from '../services/fetch-utils';

export default function MovieItem({ movie }) {
  const [watchlistMovies, setWatchlistMovies] = useState();

  async function fetchAndSetWatchlist() {
    const watchlistMovies = await fetchWatchList();
    setWatchlistMovies(watchlistMovies);
  }

  useEffect(() => {
    fetchAndSetWatchlist();
  }, []);

  // console.log(watchlistMovies);
  


  async function handleMovieClick() {
    const movieObj = {
      api_id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      overview: movie.overview
    };

    await addToWatchList(movieObj);
    //on click re-fetch and watchlist
    fetchAndSetWatchlist();
  }

  return (
    <div className='movie-item'
      onClick={handleMovieClick}
    >
      <p>
        {
          (watchlistMovies) &&
          watchlistMovies.map((watchlistMovie, i) =>
            (watchlistMovie.api_id === movie.id) && 'In Watchlist 👀'
          )
        }
      </p>
      <h2>{movie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
      <p>{movie.overview}</p>
    </div>
  );
}
