import React, { useEffect, useState } from 'react';
import './Movie_List.css';
import axios from 'axios';

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

const Movie_List = () => {
  const [movies, setMovies] = useState([]);

  async function showMovies() {
    const imdbID = data.imdbID
    const { data } = await axios.get(`http://www.omdbapi.com/?apikey=1c6a2726&i=${imdbID}`);
    setMovies(data);
  }

  useEffect(() => {
    showMovies();
  }, []);

  return (
    <div className="movies__container">
      <div className="row movie__row">
        <div className="movies__header">
          <div className="movies__search--list">
            <h2 className="movies__search--title">
              Search By Your Favorite <span className="blue">Movies</span> Here!
            </h2>
            <input
              type="text"
              className="movie__search--input"
              placeholder="Search by Keyword"
            />
          </div>
          <div className="movies__body">
            <h3 className="section__title">Movie Results:</h3>
            <select className="movies__sort" id="filter" onChange="filterMovies(event)">
              <option value="" disabled selected>Sort</option>
              <option value="ALPHA_A_Z">Alphabetical A to Z</option>
              <option value="ALPHA_Z_A">Alphabetical Z to A</option>
              <option value="NEW_OLD">Newest to Oldest</option>
              <option value="OLD_NEW">Oldest to Newest</option>
            </select>
          </div>
        </div>
        <div className="movies movies__loading">
          <i className="fas fa-spinner movies__loading--spinner"></i>
        </div>
        <div className="movies">
          <div className="movie">
            <figure className="movie__img--wrapper">
              <img
                className="movie__img"
                src=""
                alt=""
              />
            </figure>
            <div className="movie__description">
              <h3 className="movie__title"></h3>
              <h4 className="movie__year"></h4>
            </div>
          </div>
          <div className="movie">
            <figure className="movie__img--wrapper">
              <img
                className="movie__img"
                src=""
                alt=""
              />
            </figure>
            <div className="movie__description">
              <h3 className="movie__title"></h3>
              <h4 className="movie__year"></h4>
            </div>
          </div>
          <div className="movie">
            <figure className="movie__img--wrapper">
              <img
                className="movie__img"
                src=""
                alt=""
              />
            </figure>
            <div className="movie__description">
              <h3 className="movie__title"></h3>
              <h4 className="movie__year"></h4>
            </div>
          </div>
          <div className="movie">
            <figure className="movie__img--wrapper">
              <img
                className="movie__img"
                src=""
                alt=""
              />
            </figure>
            <div className="movie__description">
              <h3 className="movie__title"></h3>
              <h4 className="movie__year"></h4>
            </div>
          </div>
          <div className="movie">
            <figure className="movie__img--wrapper">
              <img
                className="movie__img"
                src=""
                alt=""
              />
            </figure>
            <div className="movie__description">
              <h3 className="movie__title"></h3>
              <h4 className="movie__year"></h4>
            </div>
          </div>
          <div className="movie">
            <figure className="movie__img--wrapper">
              <img
                className="movie__img"
                src=""
                alt=""
              />
            </figure>
            <div className="movie__description">
              <h3 className="movie__title"></h3>
              <h4 className="movie__year"></h4>
            </div>
          </div>
          <div className="movie">
            <figure className="movie__img--wrapper">
              <img
                className="movie__img"
                src=""
                alt=""
              />
            </figure>
            <div className="movie__description">
              <h3 className="movie__title"></h3>
              <h4 className="movie__year"></h4>
            </div>
          </div>
          <div className="movie">
            <figure className="movie__img--wrapper">
              <img
                className="movie__img"
                src=""
                alt=""
              />
            </figure>
            <div className="movie__description">
              <h3 className="movie__title"></h3>
              <h4 className="movie__year"></h4>
            </div>
          </div>
          <div className="movie">
            <figure className="movie__img--wrapper">
              <img
                className="movie__img"
                src=""
                alt=""
              />
            </figure>
            <div className="movie__description">
              <h3 className="movie__title"></h3>
              <h4 className="movie__year"></h4>
            </div>
          </div>
          <div className="movie">
            <figure className="movie__img--wrapper">
              <img
                className="movie__img"
                src=""
                alt=""
              />
            </figure>
            <div className="movie__description">
              <h3 className="movie__title"></h3>
              <h4 className="movie__year"></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie_List;