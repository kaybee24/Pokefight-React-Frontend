import React from 'react';
import ModalInstructions from './ModalInstructions.jsx';

const ButtonInstructions = () => {

    return (
        <>
            <label htmlFor="my-modal-3"
                className=" bg-slate-300 text-center border-4 border-sky-700 text-sky-700 py-3 rounded-full hover:bg-sky-700 hover:text-white cursor-pointer">
                Instructions
            </label>
            <ModalInstructions />
        </>
    )
}

export default ButtonInstructions

