import React from 'react';
import { useState, useEffect } from 'react';
import Spinner from '../components/Spinner.jsx';
import MovieItem from '../components/MovieItem.jsx';
import { fetchWatchList } from '../services/fetch-utils.js';
import { addToWatchList } from '../services/fetch-utils.js';


export default function SearchPage() {
  const [search, setSearch] = useState('Jaws');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [watchlistMovies, setWatchlistMovies] = useState();

  async function fetchAndSetWatchlist() {
    const watchlistMovies = await fetchWatchList();
    setWatchlistMovies(watchlistMovies);
  }

  useEffect(() => {
    fetchAndSetWatchlist();
  }, []);

  // function to check if given a movie ID if it matches an api id of a watchlist item and if so should return true for match
  function isOnWatchlist(api_id) {
    //find() returns the value of the first element that passes a test
    const match = watchlistMovies.find(watchlistMovie => watchlistMovie.api_id === api_id);
    // console.log(Boolean(match));
    return Boolean(match);
  }

  function isWatched(api_id) {
    //find() returns the value of the first element that passes a test
    const match = watchlistMovies.find(watchlistMovie => watchlistMovie.api_id === api_id && watchlistMovie.watched === true);
    // console.log(match);
    return Boolean(match);
  }


  async function handleSearchSubmit(e){
    e.preventDefault();
    setIsLoading(true);

    // use fetch to make a request to your netlify movie function. Be sure to pass the search as a query param in the URL
    const response = await fetch(`/.netlify/functions/movie-db?search=${search}`);

    //jsonify string
    const json = await response.json();
    // console.log(json.results);

    setMovies(json.results);

    setIsLoading(false);
  }

  //passed down as prop to MovieItem
  async function handleMovieClick(movie) {
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
    <div className='search-page'>
      <h2>Search Page</h2>
      <form
        onSubmit={handleSearchSubmit}
      >
        <label>
            Search by Title: 
          <input
            onChange={(e)=>setSearch(e.target.value)}
          ></input>
        </label>
        <button>Submit</button>
      </form>
      <div className='movie-results'>
        {
          (isLoading)
            ? <Spinner/>
            : <div className='movie-list'>
              {
                movies.map((movie, i)=>
                  <MovieItem key={movie + i}
                    movie={movie}
                    isOnWatchlist={isOnWatchlist}
                    isWatched={isWatched}
                  // fetchAndSetWatchlist={fetchAndSetWatchlist}
                    handleClick={handleMovieClick}
                  />
                )
              }
            </div>
        }

      </div>
    </div>
  );
}
