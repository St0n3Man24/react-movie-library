import React from 'react'
import './Navbar.css'
import Movie_Logo from '../../assets/movie_reel_logo.jpg'

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav__container">
            <img className="nav__logo" src={Movie_Logo} alt="" />
          <ul className="nav__links">
            <li className="nav__link">
              <a href="#" className="nav__link--anchor link__hover-effect">Home</a>
            </li>
            <li className="nav__link">
              <a href="#movies" className="nav__link--anchor link__hover-effect">Movies</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar