import React from 'react';
import './index.css';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './Pages/Search';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movies/:id" element={<Movies />} />
      </Routes>
    </Router>
  );
}

export default App;
