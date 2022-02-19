import React from 'react';
import { useState, useEffect } from 'react';
import { fetchWatchList } from '../services/fetch-utils';
import MovieItem from '../components/MovieItem';
import { updateWatched } from '../services/fetch-utils';

export default function WatchlistPage() {
  //track watchlist in state
  const [watchlist, setWatchlist] = useState([]);

  //on load fetch and set watchlist
  async function fetchAndSetWatchlist() {
    const watchlist = await fetchWatchList();
    setWatchlist(watchlist);
  }

  useEffect(() => {
    fetchAndSetWatchlist();
  }, []);

  async function handleWatchlistItemClick(movie) {
    await updateWatched(movie.api_id);
    //after click re-fetch and set watchlist
    await fetchAndSetWatchlist();
  }


  return (
    <div className='watchlist-page'>
      <h2>Your Watchlist:</h2>
      <div className='movie-list'>
        {
          watchlist.map((movie, i)=>
            <MovieItem key={movie + i}
              movie={movie}
              // isOnWatchlist={isOnWatchlist}
              // isWatched={isWatched}
              fetchAndSetWatchlist={fetchAndSetWatchlist}
              handleClick={handleWatchlistItemClick}
            />
          )
        }
      </div>
    </div>
  );
}
