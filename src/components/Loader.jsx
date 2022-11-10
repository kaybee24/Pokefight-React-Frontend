// import { useContext, useState } from 'react';
// import { AppContext } from '../ConnectDB';
import CircleLoader from "react-spinners/CircleLoader"


export default function Loader() {

    // const { loading } = useContext(Context);

    return (
        <div id='Loading-spinner' style={{ height: "80vh" }} className='is-flex is-justify-content-center is-align-items-center is-fullheight '>
            <CircleLoader color={'#ef6b3b'} loading={true} size={50} />
        </div>
    )

}