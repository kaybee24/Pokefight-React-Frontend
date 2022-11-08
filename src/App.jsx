import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero.jsx';
import Layout from './components/Layout.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Hero />}></Route>
      </Route>
    </Routes>
  )
}

export default App
