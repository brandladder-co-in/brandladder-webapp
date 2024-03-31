import React from 'react';

const Loader = () => {
    return (
        <div className='w-full h-[80vh] border-2 flex items-center justify-center'>
            <section className="flex flex-col">
                <img src="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/general%2Ffull-logo.png?alt=media&token=5a963339-c8d7-42f1-9b21-fc29358196e6"
                    alt="Brandladder"
                    className='h-1/6'
                    loading='lazy'
                />

                <aside className='flex justify-center'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/general%2Floader-unscreen.gif?alt=media&token=e22a0c44-b06d-47ee-99be-20564940b1d6"
                        alt="Brandladder"
                        loading='lazy' />
                    <p className='my-auto gap-2'>Please Wait ...</p>
                </aside>
            </section>
        </div>
    );
};

export default Loader;
