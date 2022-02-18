import React from 'react';
import { updateWatched } from '../services/fetch-utils';

export default function WatchlistItem({ watchlistMovie, fetchAndSetWatchlist }) {

  async function handleWatchlistItemClick() {
    await updateWatched(watchlistMovie.api_id);
    //after click re-fetch and set watchlist
    await fetchAndSetWatchlist();
  }

  return (
    <div className={(watchlistMovie.watched) ? 'movie-item watched' : 'movie-item'}
      onClick={handleWatchlistItemClick}
    >
      <p>{(watchlistMovie.watched) && 'Watched: ✅'}</p>
      <h2>{watchlistMovie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${watchlistMovie.poster_path}`}></img>
      <p>{watchlistMovie.overview}</p>
    </div>
  );
}
