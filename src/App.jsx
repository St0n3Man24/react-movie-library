import React from 'react';
import './index.css';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './Pages/Search';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
