import React, { useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';

const VidModal = ({ id }) => {

    const playerRef = useRef(null);

    useEffect(() => {

        const contoller = playerRef.current

        return () => {
            if (contoller) {
                contoller.getInternalPlayer().pause();
            }
        };
    }, []);

    return (
        <div className='bg-black'>
            <input className="modal-state" id={`vid-modal-${id}`} type="checkbox" />
            <div className="modal w-screen ">
                <label className="modal-overlay" htmlFor={`vid-modal-${id}`}></label>
                <div className="modal-content flex flex-col gap-5 max-w-3xl bg-orange-1 w-full ">
                    <label htmlFor={`vid-modal-${id}`} className="btn btn-sm btn-circle absolute right-2 top-2 border-2 border-black">✕</label>
                    <div className="my-2 lg:my-6">
                        <ReactPlayer
                            url='https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/general%2Fbl-intro.mp4?alt=media&token=9e4502c2-4736-4eeb-87f1-b7b21e7c8740'
                            controls
                            width='100%'
                            height='100%'
                            stopOnUnmount={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VidModal
