import React from 'react';
import { useNavigate } from 'react-router-dom';
import Movie_Logo from "../assets/movie_reel_logo.jpg";
import "../index.css";

const Navbar = () => {
  const navigate = useNavigate();

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
    </div>
  )
}

export default Navbar;