import { useState, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Slider from './Slider.jsx';
import Instructions from './ButtonInstructions.jsx';
import Loader from './Loader.jsx'
import { AppContext } from '../ConnectDB.jsx';

const Layout = () => {


    const { loading, bgImage } = useContext(AppContext)

    return (
        <>
            <Navbar />
            <Slider />
            <Outlet />
        </>
    )
}


export default Layout

