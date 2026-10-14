import React, { useEffect, useState } from 'react';
import './Movie_Search.css';
import axios from 'axios';
import Movie_Img from '../../assets/movie_logo.jpg'

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
  const keyword = "";
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  async function searchMovies(keyword) {
    setLoading(true);
    const { data } = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=1c6a2726&s=${keyword}`);
    setMovies(data);

    await new Promise((resolve) => setTimeout(resolve, 800));
    setMovies(data);
    setLoading(false);
  }

  useEffect(() => {
    searchMovies(keyword);
  }, [])

  return (
    <>
      <div className="header__container">
        <div className="movies__search">
          <h2 className="movies__search--title">
            Find Your Favorite <span className="blue">Movies</span> Here!
          </h2>
          <input
            type="text"
            className="movie__search--input"
            placeholder="Search by Keyword"
          />
        </div>
        <div className="movie-card__container">
          {loading ? (
            <div className="movie-card">
              <div className="movie-card__img--skeleton"></div>
              <div className="movie-card__title--skeleton"></div>
              <div className="movie-card__year--skeleton"></div>
            </div>
          ) : (
            <>
              {movies.map((movie) => (
                <div className="movie-card">
                  <figure className="movie-card__img--wrapper">
                    <img
                      className="movie-card__img"
                      src={Movie_Img}
                      alt=""
                    />
                  </figure>
                  <div className="movie-card__description">
                    <h3 className="movie-card__title">Movie Title</h3>
                    <h4 className="movie-card__year">Movie Year</h4>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div> 
    </>
  )
}

export default Movie_Search;