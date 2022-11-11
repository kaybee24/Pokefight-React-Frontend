import { useState, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Slider from './Slider.jsx';
import Instructions from './Instructions.jsx';
import Loader from './Loader.jsx'
import { AppContext } from '../ConnectDB.jsx';

const Layout = () => {


    const { loading, bgImage } = useContext(AppContext)

    return (
        <>
            {/* <div className="background-el" style={{ backgroundImage: `url(${bgImage.value})` }}> */}

            <Navbar />
            <Slider />
            <Outlet />

            {/* </div> */}
        </>
    )
}


export default Layout

