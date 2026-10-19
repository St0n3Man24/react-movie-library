import React, { useEffect, useState } from 'react';
import '../index.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Target_Movie = () => {
  const location = useLocation();
  const imdbID = location.state?.imdbID;
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
   if (!imdbID) {
    setLoading(false);
    return;
   }

    async function fetchMovie() {
      setLoading(true);

      try {
        const { data } = await axios.get(`https://www.omdbapi.com/?apikey=1c6a2726&i=${imdbID}&plot=full`);

        await new Promise(resolve => setTimeout(resolve, 800));

        if (data.Response === "True") {
          setMovie(data);
        } else {
          setMovie(null);
        }
      } catch (error) {
        console.error('Error fetching movie:', error);
        setMovie(null);
      } finally {
        setLoading(false);
      }
    }

    fetchMovie();
  }, [imdbID]);

  return (
    <div>
      <div id="movie">
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
                    src={movie.Poster}
                    alt=""
                  />
                </figure>
                <div className="target__movie__description">
                  <h3 className="target__movie__title">{movie.Title}</h3>
                  <h4 className="target__movie__year">{movie.Year}</h4>
                  <h4 className="target__movie__rating">{movie.Rating}</h4>
                  <h4 className="target__movie__release">{movie.Released}</h4>
                  <h4 className="target__movie__runtime">{movie.Runtime}</h4>
                  <h4 className="target__movie__genre">{movie.Genre}</h4>
                  <h4 className="target__movie__director">{movie.Director}</h4>
                  <h4 className="target__movie__actors">{movie.Actors}</h4>
                  <p 
                    className="target__movie__plot"
                    onClick={() => setShowFullDescription(!showFullDescription)}
                    style={{ cursor: 'pointer' }}>
                    {movie.Plot ? showFullDescription ? movie.Plot : `${movie.Plot.slice(0, 100)} ...` : ""}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Target_Movie;