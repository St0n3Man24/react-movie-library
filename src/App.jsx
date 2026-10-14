import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Movie from './Pages/Movie';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default App;
