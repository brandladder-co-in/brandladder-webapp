import React from 'react';

const VidModal = ({ id, video }) => {
    return (
        <div className='bg-black'>
            <input className="modal-state" id={`vid-modal-${id}`} type="checkbox" />
            <div className="modal w-screen">
                <label className="modal-overlay" htmlFor={`vid-modal-${id}`}></label>
                <div className="modal-content flex flex-col gap-5 max-w-3xl bg-orange-1">
                    <label htmlFor={`vid-modal-${id}`} className="btn btn-sm btn-circle absolute right-2 top-2 border-2 border-black">✕</label>
                    <h2 className="text-4xl py-10 px-10">VIDEO COMMING SOON</h2>
                </div>
            </div>
        </div>
    )
}

export default VidModal
