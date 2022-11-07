import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero.jsx';


function App() {
  /* 
   const [pokemonData, setPokemonData] = useState([]);
  
     useEffect(() => {
       fetch(import.meta.env.VITE_HEROKU_API)
         .then(res => {
           if (res.ok)
             return res.json()
         }).then(data => {
           setPokemonData(data)
           console.log(data)
         }
         )
         .catch(err => err.message)
     }, []);
    */
  return (
    <Routes>
      <Route path="/" element={<Hero />}></Route>
    </Routes>
  )
}

export default App
