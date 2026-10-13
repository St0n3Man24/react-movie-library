import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__row">
          <figure className="footer__logo">
            <img src="./assets/movie-time_logo.jpg" className="footer__logo--img" alt="" />
          </figure>
        <div className="footer__links">
            <a href="#" className="footer__link">Home</a>
            <a href="#movies" className="footer__link">Movies</a>
        </div>
        <div className="footer__copyright">Copyright &copy; 2026 Movie Library</div>
      </div>
    </div>
  )
}

export default Footer;