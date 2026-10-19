import React from 'react';
import "../index.css";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div>
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

export default Footer;