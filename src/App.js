import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Pages/Home';
import PopularDish from './components/Pages/popularDish';
import Reviews from './components/Pages/Reviews';
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
      <>
          <div className="container">
              <NavBar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/popular" element={<PopularDish />} />
                  <Route path="/reviews" element={<Reviews />} />
              </Routes>
          </div>
      </>
  );
}

export default App;
