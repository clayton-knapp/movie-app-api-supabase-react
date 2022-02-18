import React from 'react';
import MovieItem from './MovieItem';

export default function MovieList({ movies, isOnWatchlist, fetchAndSetWatchlist }) {

  return (
    <div className='movie-list'>
      {
        movies.map((movie, i)=>
          <MovieItem key={movie + i}
            movie={movie}
            isOnWatchlist={isOnWatchlist}
            fetchAndSetWatchlist={fetchAndSetWatchlist}
          />
        )
      }
    </div>
  );
}
