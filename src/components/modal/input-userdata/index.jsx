import React, { useEffect } from 'react';

const InputData = ({ isOpen }) => {
    useEffect(() => {
        // Check if the modal should be opened
        if (isOpen) {
            const modal = document.getElementById('modal-3');
            modal.checked = true; // Open the modal
        }
    }, [isOpen]);

    return (
        <>
            <label className="btn btn-primary" htmlFor="modal-3">Open Modal</label>

            <input className="modal-state" id="modal-3" type="checkbox" />
            <div className="modal">
                <label className="modal-overlay"></label>
                <div className="modal-content flex flex-col gap-5">
                    <label htmlFor="modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                    <h2 className="text-xl">Modal title 3</h2>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum voluptate ratione dicta. Maxime cupiditate, est commodi consectetur earum iure, optio, obcaecati in nulla saepe maiores nobis iste quasi alias!</span>
                    <div className="flex gap-3">
                        <button className="btn btn-error btn-block">Delete</button>
                        <button className="btn btn-block">Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InputData;
