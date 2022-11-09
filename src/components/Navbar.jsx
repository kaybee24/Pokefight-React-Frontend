import React from 'react';
import Search from './Search.jsx';
import Theme from './Theme.jsx';

const Navbar = () => {
    return (
        <div className="navbar bg-slate-300 flex justify-between">
            <div>
                <a className="w-40"><img src="src/assets/Pokemon_logo.svg" /></a>
            </div>
            <div className="gap-2">
                <Search />
                <Theme />
            </div>
        </div>
    )
}

export default Navbar
