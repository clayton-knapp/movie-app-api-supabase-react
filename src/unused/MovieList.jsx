import React from 'react';
import MovieItem from '../components/MovieItem';

export default function MovieList({ 
  movies, 
  // fetchAndSetWatchlist, 
  isOnWatchlist, 
  isWatched,
  handleClick
}) {

  return (
    <div className='movie-list'>
      {
        movies.map((movie, i)=>
          <MovieItem key={movie + i}
            movie={movie}
            isOnWatchlist={isOnWatchlist}
            isWatched={isWatched}
            // fetchAndSetWatchlist={fetchAndSetWatchlist}
            handleClick={handleClick}
          />
        )
      }
    </div>
  );
}
