import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Slider from './Slider.jsx';

const Layout = () => {
    return (
        <>
            <Navbar />
            <Slider />
            <Outlet />
        </>
    )
}

export default Layout