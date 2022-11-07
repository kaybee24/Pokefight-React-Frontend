import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />}></Route>
    </Routes>
  )
}

export default App
