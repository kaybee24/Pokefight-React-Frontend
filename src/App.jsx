import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorPage from './components/Error.jsx';
import Hero from './components/Hero.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
  )
}

export default App
