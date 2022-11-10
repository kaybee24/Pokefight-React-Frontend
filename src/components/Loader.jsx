// import { useContext, useState } from 'react';
// import { AppContext } from '../ConnectDB';
import CircleLoader from "react-spinners/CircleLoader"


export default function Loader() {

    // const { loading } = useContext(Context);

    return (
        <div id='Loading-spinner' style={{ height: "80vh" }} className='flex justify-center items-center'>
            <CircleLoader color={'#ef6b3b'} loading={true} size={400} />
        </div>
    )

}