import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Movie_Search from '../Components/Movie_Search/Movie_Search';
import Footer from '../Components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Movie_Search />
      <Footer />
    </div>
  )
}

export default Home;