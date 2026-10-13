import React, { useEffect, useState } from 'react';
import './Movie_Search.css';
import axios from 'axios';
import Popcorn_Logo from '../../assets/popcorn_movie_time.svg';
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

  async function searchMovies(keyword) {
    const { data } = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=1c6a2726&s=${keyword}`);
  }

  useEffect(() => {
    searchMovies(keyword);
  }, [])

  return (
    <>
      <div className="header__container">
        <div className="movie-card__container">
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
        </div>
        <div className="header__movie-logo">
          <img src={Popcorn_Logo} alt="" />
        </div>
      </div> 
    </>
  )
}

export default Movie_Search;