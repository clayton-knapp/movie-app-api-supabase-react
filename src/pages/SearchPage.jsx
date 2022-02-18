import React from 'react';
import { useState } from 'react';
import Spinner from '../components/Spinner.jsx';
import MovieList from '../components/MovieList.jsx';


export default function SearchPage() {
  const [search, setSearch] = useState('Jaws');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  async function handleSearchSubmit(e){
    e.preventDefault();
    setIsLoading(true);

    // use fetch to make a request to your netlify movie function. Be sure to pass the search as a query param in the URL
    const response = await fetch(`/.netlify/functions/movie-db?search=${search}`);

    //jsonify string
    const json = await response.json();
    console.log(json.results);

    setMovies(json.results);

    setIsLoading(false);
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
            : <MovieList movies={movies}/>
        }

      </div>
    </div>
  );
}
