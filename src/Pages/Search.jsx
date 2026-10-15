import React, { useEffect, useState } from 'react';
import "../index.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Movie_Logo from "../assets/movie_reel_logo.jpg";
import Movie_Img from "../assets/movie_logo.jpg";


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

const Search = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);

  async function showMovies() {
    const { data } = await axios.get(`http://www.omdbapi.com/?apikey=1c6a2726&s=${keyword}`);
    setMovies(data);
  }

  useEffect(() => {
    showMovies();
  }, [keyword]);

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

      <movies>
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
                  onChange={(e) => setKeyword(e.target.value)}
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
            <div className="movie__container">
              {loading ? (
                <div className="movie">
                  <div className="movie__img--skeleton"></div>
                  <div className="movie__title--skeleton"></div>
                  <div className="movie__year--skeleton"></div>
                </div>
              ) : (
                <>
                  <div className="movie">
                    <figure className="movie__img--wrapper">
                      <img
                        className="movie__img"
                        src={Movie_Img}
                        alt=""
                      />
                    </figure>
                    <div className="movie__description">
                      <h3 className="movie__title">Movie Title</h3>
                      <h4 className="movie__year">Movie Year</h4>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </movies>

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

export default Search;