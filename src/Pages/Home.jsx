import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../index.css";
import Movie_Logo from "../assets/movie_reel_logo.jpg";
import Movie_Time from "../assets/popcorn_movie_time.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

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

const Home = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState("");

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
    <div>
      <nav>
        <div className="nav__container">
            <a href="/">
              <img className="nav__logo" src={Movie_Logo} alt="" />
            </a>
          <ul className="nav__links">
            <li className="nav__link">
              <div
                className="nav__link--anchor link__hover-effect"
                onClick={() => navigate('/')}>
                  Home
              </div>
            </li>
            <li className="nav__link">
              <div
                className="nav__link--anchor link__hover-effect"
                onClick={() => navigate('/search')}>
                  Movies
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <header className="header__container">
        <h2 className="movies__search--title">
          Find Your Favorite <span className="blue">Movies</span> Here!
        </h2>
        <div className="movies__search">
          <input
            type="text"
            className="movie__search--input"
            placeholder="Search by Keyword"
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button className="movie__search--btn">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className="header__img">
          <img src={Movie_Time} alt="" />
        </div>
      </header>

      <footer className="footer__container">
        <div className="footer__row">
          <figure className="footer__logo">
            <img src="./assets/movie-time_logo.jpg" className="footer__logo--img" alt="" />
          </figure>
          <div className="footer__links">
              <div
                className="footer__link"
                onClick={() => navigate('/')}>
                  Home
              </div>
              <div 
                className="footer__link"
                onClick={() => navigate('/search')}>
                  Movies
              </div>
          </div>
          <div className="footer__copyright">
            Copyright &copy; 2026 Movie Library
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home;