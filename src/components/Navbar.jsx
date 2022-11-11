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
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
                <div className="gap-2">
                    <FilterButtons />
                </div>
            </div>
        </div>
    )
}

export default Navbar
