import React from 'react';
import Theme from './Theme';

const ModalInstructions = () => {
    /*     if (!open) return null
     */
    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative bg-slate-300 text-center">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h2 className="text-sky-600 pb-4 text-4xl uppercase font-bold">Instructions</h2>
                    <p className="py-4">Select a character</p>
                    <p className="py-4">Computer chooses a random character</p>
                    <p className="py-4">Select the performance category next to your pokemon</p>
                    <p className="py-4">Choose a theme</p>
                    <Theme />

                </div>
            </div>
        </>
    )
}

export default ModalInstructions

