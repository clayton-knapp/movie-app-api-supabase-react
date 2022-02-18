import React from 'react';

export default function MovieList({ movies }) {
  return (
    <div className='movie-list'>
      {
        movies.map((movie, i)=>
          <div key={movie + i} className='movie-item'>
            <h2>{movie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
            <p>{movie.overview}</p>
          </div>
        )
      }
    </div>
  );
}
