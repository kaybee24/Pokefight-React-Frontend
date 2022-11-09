import React, { useState } from 'react';
import ModalInstructions from './ModalInstructions.jsx';

const Instructions = () => {
    const [openModalInst, setOpenModalInst] = useState(false)

    return (
        <>
            <button
                onClick={() => setOpenModalInst(true)}
                className="bg-slate-300 border-4 border-sky-600 text-sky-600 px-6 py-3 rounded-full cursor-pointer">Instructions</button>
            <ModalInstructions open={openModalInst} onClose={() => setOpenModalInst(false)} />
        </>
    )
}

export default Instructions