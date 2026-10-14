import React from 'react'
import './Navbar.css'
import Movie_Logo from '../../assets/movie_reel_logo.jpg'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

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
                onClick={() => navigate('/movie')}>
                  Movies
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar