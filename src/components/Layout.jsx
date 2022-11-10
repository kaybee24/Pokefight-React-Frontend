import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Slider from './Slider.jsx';
import Instructions from './Instructions.jsx';
import Loader from './Loader.jsx'
import { AppContext } from '../ConnectDB.jsx';

const Layout = () => {

    const { loading } = useState(AppContext)

    return (
        <>
            {loading ?
                <Loader />
                :
                <>
                    <Navbar />
                    <Slider />
                    <Outlet />
                </>
            }
        </>
    )
}


export default Layout

