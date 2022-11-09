import React from 'react';

const ModalInstructions = ({ open, onClose }) => {
    if (!open) return null

    return (
        <>
            <div className='fixed w-full h-full z-50 pt-10 bg-black/50'>
                <div className='max-w-[25rem] h-[30rem] rounded-xl drop-shadow-lg mx-auto bg-slate-300 text-slate-900'>
                    <div className='px-4 text-center'>
                        <p onClick={onClose} className="text-right font-bold cursor-pointer">X</p>
                        <h1 className='font-bold text-4xl uppercase pb-6'>Instructions</h1>
                        <p className='pb-5 px-6'>Select a character</p>
                        <p className='pb-5 px-6'>Computer chooses a random character</p>
                        <p className='pb-5 px-6'>Select the performance category next to your pokemon</p>
                        <button onClick={onClose} className="bg-sky-600 px-6 py-3 mb-4 rounded-full cursor-pointer text-white">Choose Pokemon</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalInstructions