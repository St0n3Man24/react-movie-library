import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../index.css";
import Movie_Logo from "../assets/movie_reel_logo.jpg";
import Movie_Time from "../assets/popcorn_movie_time.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchKeyDown(event) {
    if (event.key === "Enter" && searchTerm.trim() !== "") {
      navigate('/search', { state: { keyword: searchTerm.trim()}});
    }
  }

  function handleSearchClick() {
    if (searchTerm.trim() !== "") {
      navigate('/search', { state: { keyword: searchTerm.trim()}});
    }
  }

  return (
    <div>
      <div id="nav">
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
      </div>
      
      <div id="header">
        <div className="header__container">
          <h2 className="movies__search--title">
            Find Your Favorite <span className="blue">Movies</span> Here!
          </h2>
          <div className="movies__search">
            <input
              type="text"
              className="movie__search--input"
              placeholder="Search by Keyword"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => handleSearchKeyDown(e)}
            />
            <button
              className="movie__search--btn"
              onClick={handleSearchClick}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          <div className="header__img">
            <img src={Movie_Time} alt="" />
          </div>
        </div>
      </div>

      <div id="footer">
        <div className="footer__container">
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
        </div>
      </div>  
    </div>
  )
}

export default Home;