import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero.jsx';
import ModalInstructions from './components/ModalInstructions.jsx';
import Layout from './components/Layout.jsx';

function App() {

  return (
    <div className="background-el" style={{ backgroundImage: "src()" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Hero />}></Route>
          </Route>
        </Routes>
      </BrowserRouter >
    </div>
  )
}

export default App
