import React from 'react';

const LoactionPermission = () => {
    return (
        <div>
            <label className="btn btn-primary" htmlFor="modal-loaction-permission">Open Modal</label>

            <input className="modal-state" id="modal-loaction-permission" type="checkbox" />
            <div className="modal">
                <label className="modal-overlay"></label>
                <div className="modal-content flex flex-col gap-5">
                    <label htmlFor="modal-loaction-permission" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                    <h2 className="text-xl">Modal title 3</h2>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum voluptate ratione dicta. Maxime cupiditate, est commodi consectetur earum iure, optio, obcaecati in nulla saepe maiores nobis iste quasi alias!</span>
                    <div className="flex gap-3">
                        <button className="btn btn-error btn-block">Delete</button>
                        <button className="btn btn-block">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoactionPermission
