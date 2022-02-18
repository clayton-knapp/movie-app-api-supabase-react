import React from 'react';
import { useState, useEffect } from 'react';
import { fetchWatchList } from '../services/fetch-utils';
import WatchlistItem from '../components/WatchlistItem.jsx';

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

  return (
    <div className='watchlist-page'>
      <h2>Your Watchlist:</h2>
      <div className='movie-list'>
        {
          watchlist.map((watchlistMovie, i) =>
            <WatchlistItem key={watchlistMovie + i}
              watchlistMovie={watchlistMovie}
              fetchAndSetWatchlist={fetchAndSetWatchlist}
            />
          )
        }
      </div>
    </div>
  );
}
