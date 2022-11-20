import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero.jsx';
import Layout from './components/Layout.jsx';
import { AppContext } from './ConnectDB.jsx';

function App() {

  const { bgImage } = useContext(AppContext)

  return (


    <div className="background-el" style={{ backgroundImage: `url(${bgImage.value})` }}>
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
