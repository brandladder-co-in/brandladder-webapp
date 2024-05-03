import React from 'react';
import { Link } from 'react-router-dom';

import { FaInstagram } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const PreojectModal = ({ logo, title, subtitle, desc, insta, website, type }) => {
    return (
        <>
            <input className="modal-state" id={`productModal-${title}`} type="checkbox" />
            <div className="modal w-screen">
                <label className="modal-overlay" htmlFor={`productModal-${title}`}></label>
                <div className="modal-content flex flex-col gap-5 max-w-3xl bg-orange-1">
                    <label htmlFor={`productModal-${title}`} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black hover:text-white">✕</label>
                    <section>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <aside className='col-span-1 flex items-center'>
                                <div className='space-y-6 text-center md:text-left'>
                                    <div>
                                        <h2 className="text-5xl font-semibold text-black">
                                            {title}
                                        </h2>
                                        <span className="badge badge-outline border-orange-5 text-orange-5">
                                            {type}
                                        </span>
                                    </div>
                                    <span>
                                        {subtitle}
                                    </span>
                                    <div className="flex space-x-2 border-2">
                                        {
                                            insta && (
                                                <div
                                                    className='border-2 text-2xl border-orange-3 border-solid rounded-full p-1 text-orange-10 mx-1 shadow-2xl transition duration-500 ease-in-out hover:text-orange-1 hover:bg-orange-5'
                                                    target='_blank'
                                                >
                                                    <Link to={insta}>
                                                        <FaInstagram />
                                                    </Link>
                                                </div>
                                            )
                                        }
                                        {
                                            insta && (
                                                <div
                                                    className='border-2 text-2xl border-orange-3 border-solid rounded-full p-1 text-orange-10 mx-1 shadow-2xl transition duration-500 ease-in-out hover:text-orange-1 hover:bg-orange-5'
                                                    target='_blank'
                                                >
                                                    <Link to={insta}>
                                                        <CgWebsite />
                                                    </Link>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </aside>
                            <aside className='col-span-1'>
                                <img src={logo} alt={title} loading='lazy' />
                            </aside>
                        </div>
                    </section>
                    <section>
                        <p className='text-black text-sm'>{desc}</p>
                    </section>
                </div>
            </div>
        </>
    )
}

export default PreojectModal
