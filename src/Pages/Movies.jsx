import React, { useEffect, useState } from 'react';
import "../index.css";
import Movie_Img from "../assets/movie_logo.jpg";
import Movie_Logo from "../assets/movie_reel_logo.jpg";
import { useNavigate } from 'react-router-dom';

const Movies = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  return (
    <>
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
              <a href="/search"
                className="nav__link--anchor link__hover-effect"
                onClick={() => navigate('/search')}>
                  Movies
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div id="movies">
        <div className="target__movie__container">
          {loading ? (
            <div className="target__movie">
              <div className="target__movie__img--skeleton"></div>
              <div className="target__movie__description">
                <div className="target__movie__title--skeleton"></div>
                <div className="target__movie__year--skeleton"></div>
                <div className="target__movie__rating--skeleton"></div>
                <div className="target__movie__release--skeleton"></div>
                <div className="target__movie__runtime--skeleton"></div>
                <div className="target__movie__genre--skeleton"></div>
                <div className="target__movie__director--skeleton"></div>
                <div className="target__movie__actors--skeleton"></div>
                <div className="target__movie__plot--skeleton"></div>
              </div>
            </div>
          ) : (
            <>
              <div className="target__movie">
                <figure className="target__movie__img--wrapper">
                  <img
                    className="target__movie__img"
                    src={Movie_Img} //movie.Poster
                    alt=""
                  />
                </figure>
                <div className="target__movie__description">
                  <h3 className="target__movie__title">Guardians of the Galaxy</h3>
                    {/* movie.Title */}
                  <h4 className="target__movie__year">(2016 - 2017)</h4>
                    {/* movie.Year */}
                  <h4 className="target__movie__rating">PG-13</h4>
                    {/* movie.Rating */}
                  <h4 className="target__movie__release">05 May 2017</h4>
                    {/* movie.Released */}
                  <h4 className="target__movie__runtime">136 min</h4>
                    {/* movie.Runtime */}
                  <h4 className="target__movie__genre">Action, Adventure, Comedy</h4>
                    {/* movie.Genre */}
                  <h4 className="target__movie__director">James Gunn</h4>
                    {/* movie.Director */}
                  <h4 className="target__movie__actors">Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel, Bradley Cooper</h4>
                    {/* movie.Actors */}
                  <p className="target__movie__plot">
                    lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                    {/* movie.Plot */}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div id="footer">
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
              <a href="/search"
                className="footer__link"
                onClick={() => navigate('/search')}>
                Movies
              </a>
            </div>
            <div className="footer__copyright">
              Copyright &copy; 2026 Movie Library
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Movies;