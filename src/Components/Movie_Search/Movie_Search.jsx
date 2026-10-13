import React from 'react';
import './Movie_Search.css';

// http://www.omdbapi.com/?i=tt3896198&apikey=1c6a2726//
// http://www.omdbapi.com/?i=tt3896198&apikey=1c6a2726&plot=full

// API to search for movies by keyword:
// http://www.omdbapi.com/?i=tt3896198&apikey=1c6a2726&s=${keyword}

// API to get movie details on a specific movie (IMDb ID):
// http://www.omdbapi.com/?apikey=1c6a2726&i=${imdbID}

// API to get full plot details of a specific movie (IMDb ID):
// https://www.omdbapi.com/?apikey=1c6a2726&i=${imdbID}&plot=full

// tt0232500 (Fast & Furious)
// tt1201607 (Harry Potter)


const Movie_Search = () => {
  return (
    <div>
      <div className="header__container">
        <div className="header__description">
          <h2>Browse For Your Favorite <span className="blue">Movies</span></h2>
        </div>
        <div className="header__search">
          <input
            type="text"
            className="header__search--input"
            placeholder="Search by Keyword"
            onchange="onSearchChange(event)"
          />
          <button className="header__search--btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Movie_Search;