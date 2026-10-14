import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Movie from './Pages/Movie';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movies/:id" element={<Movies />} />
      </Routes>
    </Router>
  );
}

export default App;
