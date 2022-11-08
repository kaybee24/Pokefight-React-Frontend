import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero.jsx';
import ModalInstructions from './components/ModalInstructions.jsx';
import Layout from './components/Layout.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Hero />}></Route>

        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App
