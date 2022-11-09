import React, { useState } from 'react';
import ModalInstructions from './ModalInstructions.jsx';

const Instructions = () => {
    const [openModalInst, setOpenModalInst] = useState(false)

    return (
        <>
            <button
                onClick={() => setOpenModalInst(true)}
                className="text-sm text-slate-300 absolute bottom-3 right-5">Instructions</button>
            <ModalInstructions open={openModalInst} onClose={() => setOpenModalInst(false)} />
        </>
    )
}

export default Instructions