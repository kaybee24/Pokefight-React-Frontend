import React from 'react';
import Searchbar from "./Search.jsx";
import Theme from './Theme.jsx';
import FilterButtons from './Filter.jsx';


const Navbar = () => {
    return (
        <div className="navbar bg-slate-300 flex justify-between">
            <div>
                <a className="w-40"><img src="src/assets/Pokemon_logo.svg" /></a>
            </div>
            <Searchbar />
            <FilterButtons />
        </div>
    )
}

export default Navbar
