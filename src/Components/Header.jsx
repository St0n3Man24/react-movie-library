import React, { useState } from 'react';
import "../index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Movie_Time from "../assets/popcorn_movie_time.svg";
import { useNavigate } from 'react-router-dom';

const Header = () => {
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
    </div>
  )
}

export default Header;