import React, { useEffect, useState } from 'react';
import "../index.css";
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import Movie_Img from "../assets/movie_logo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Movies_List = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [keyword, setKeyword] = useState(location.state?.keyword || '');
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(location.state?.keyword || '');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    async function showMovies() {
    setLoading(true);
    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=1c6a2726&s=${keyword}`);

    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    console.log(data.Search);
    setMovies(data.Search || []);
  }
  
    if (keyword.trim() !== "") {
      showMovies();
    }
  }, [keyword]);

  function searchMovies(event) {
    if (event.key === "Enter") {
      setKeyword(searchTerm);
    }
  }

  function searchMoviesIcon() {
    if(searchTerm !== "") {
      setKeyword(searchTerm);
    }
  }

  function filterMovies() {
    const sortedMovies = [...movies];
    if (filter === "ALPHA_A_Z") {
      sortedMovies.sort((a, b) => a.Title.localeCompare(b.Title));
    } else if (filter === "ALPHA_Z_A") {
      sortedMovies.sort((a, b) => b.Title.localeCompare(a.Title));
    } else if (filter === "NEW_OLD") {
      sortedMovies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
    } else if (filter === "OLD_NEW") {
      sortedMovies.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
    }
    return sortedMovies;
  }

  return (
    <div>
      <div id="movies">
        <div className="movies__container">
          <div className="row movie__row">
            <div className="movies__header">
              <h2 className="movies__search--title">
                Search By Your Favorite <span className="blue">Movies</span> Here!
              </h2>
                <div className="movies__search">
                  <input
                    type="text"
                    className="movie__search--input"
                    placeholder="Search by Keyword"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={(e) => searchMovies(e)}
                  />
                  <button
                    className="movie__search--btn" 
                    onClick={searchMoviesIcon}
                  >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                </div>
              <div className="movies__body">
                <h3 className="section__title">Movie Results:</h3>
                <select
                  className="movies__sort"
                  id="filter"
                  value={filter}
                  onChange={(e) =>setFilter(e.target.value)}
                >
                  <option value="" disabled>Sort</option>
                  <option value="ALPHA_A_Z">Alphabetical A to Z</option>
                  <option value="ALPHA_Z_A">Alphabetical Z to A</option>
                  <option value="NEW_OLD">Newest to Oldest</option>
                  <option value="OLD_NEW">Oldest to Newest</option>
                </select>
              </div>
            </div>
            <div className="movie__container">
              {loading ? (
                Array.from({ length: 10 }).map((_, index) => (
                  <div className="movie" key={index}>
                    <div className="movie__img--skeleton"></div>
                    <div className="movie__title--skeleton"></div>
                    <div className="movie__year--skeleton"></div>
                  </div>
                ))
              ) : (
                <>
                  {filterMovies().map((movie) => (
                    <div className="movie" key={movie.imdbID}>
                      <figure className="movie__img--wrapper">
                        <img
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = Movie_Img;
                          }}
                          className="movie__img"
                          src={
                            movie.Poster && movie.Poster !== "N/A"
                              ? movie.Poster
                              : Movie_Img
                          }
                          alt=""
                          onClick={() => navigate(
                            '/movies', 
                            { state: { imdbID: movie.imdbID } }
                          )}
                        />
                      </figure>
                      <div className="movie__description">
                        <h3 className="movie__title">{movie.Title}</h3>
                        <h4 className="movie__year">{movie.Year}</h4>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movies_List;