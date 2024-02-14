import React, { useState } from 'react'
import { motion } from "framer-motion";

import { useFirestore } from '../../context/FirestoreContext';
import useBounceAnimation from '../../hooks/animations/useBounceAnimation';
import useSmoothScroll from '../../hooks/general/useSmoothScroll'

import { MdOutlinePhone } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";

import { showSuccessToast, showErrorToast } from '../../components/tosters'

const Contact = () => {
    useSmoothScroll();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [confirmPhone, setConfirmPhone] = useState('');
    const [msg, setMsg] = useState('');

    const { uploadUserData: sendMessage } = useFirestore();

    const bounceAnimationProps = useBounceAnimation();

    const handleSendMsg = async () => {

        const data = {
            name: name,
            email: email,
            phone: phone,
            msg: msg
        }

        try {

            if (name === '') {
                showErrorToast('Name is required !!')
            }
            if (email === '') {
                showErrorToast('Email is required !!')
            }
            if (phone === '') {
                showErrorToast('Phone no. is required !!')
            }
            if (msg === '') {
                showErrorToast('Message is required !!')
            }
            if (phone !== confirmPhone) {
                showErrorToast('Phone No is not matching !!')
            }

            if (name !== '' && email !== '' && phone !== '' && msg !== '') {
                await sendMessage('contactMsg', name, data);

                showSuccessToast('We will be in touch soon')

                setName();
                setEmail();
                setPhone();
                setConfirmPhone();
                setMsg();
            }


        } catch (error) {
            console.error('Error while sending message: ', error);
            showErrorToast('Something went wrong!! Our Try again later')
        }
    }

    return (
        <motion.section {...bounceAnimationProps} className='bg-orange-2 md:p-10 p-0'>
            <h2 className='my-4 md:block hidden'>..... Get In Touch</h2>
            <div className="flex flex-col-reverse md:flex-row justify-evenly ">
                <aside className='md:block hidden mx-2 space-y-4'>
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/gifs%2FMap%20GIF.gif?alt=media&token=6b076312-8f89-448b-9f16-c05899b22b0c"
                        alt="BrandLadder"
                        className='mb-5 rounded-lg'
                        loading='lazy'
                    />
                    <div className="flex flex-col space-y-4 justify-between rounded-xl p-10 bg-orange-3">
                        <aside className='grid grid-cols-5 gap-4'>
                            <IoMailOutline className='text-5xl col-span-2 text-center mx-auto' />
                            <div className="flex flex-col text-black col-span-3">
                                <h3 className='text-xl font-medium'>Email</h3>
                                <small>info@brandladder.co.in</small>
                            </div>
                        </aside>
                        <aside className='grid grid-cols-5 gap-4'>
                            <MdOutlinePhone className='text-5xl col-span-2 mx-auto' />
                            <div className="flex flex-col text-black col-span-3">
                                <h3 className='text-xl font-medium'>Contact No.</h3>
                                <small>+91 9391523930</small>
                            </div>
                        </aside>
                    </div>
                </aside>
                <aside className='bg-orange-3 md:p-10 p-2 rounded-xl mx-2 space-y-10'>
                    <div className='space-y-4'>
                        <h1 className='text-black text-3xl md:text-5xl font-medium md:font-bold'>
                            Get In <span className='text-orange-8'> Touch</span>
                        </h1>
                        <p className='text-black text-sm'>
                            We are here to assist you in each step. Inquiries about your services or need personalized guidance we are here for you. Fill out your details below, and we will reach out to you. Become a part of the Brand Ladder family today!
                        </p>
                    </div>

                    <div className='space-y-4 my-auto' >
                        <input
                            className="input-ghost border-inherit text-orange-10 max-w-full bg-white  input"
                            placeholder="Name"
                            type='text'
                            value={name}
                            onChange={(value) => { setName(value.target.value) }}
                        />
                        <input
                            className="input-ghost border-inherit text-orange-10 max-w-full bg-white  input"
                            placeholder="Email"
                            type='email'
                            value={email}
                            onChange={(value) => { setEmail(value.target.value) }}
                        />
                        <input
                            className="input-ghost border-inherit text-orange-10 max-w-full bg-white  input"
                            placeholder="Phone No"
                            type='tel'
                            value={phone}
                            onChange={(value) => { setPhone(value.target.value) }}
                        />
                        <input
                            className="input-ghost border-inherit text-orange-10 max-w-full bg-white  input"
                            placeholder="Confirm Phone No"
                            type='tel'
                            value={confirmPhone}
                            onChange={(value) => { setConfirmPhone(value.target.value) }}
                        />
                        <textarea
                            className="textarea-ghost textarea border-inherit text-orange-10 max-w-full bg-white  input"
                            placeholder="Leave Us Message"
                            value={msg}
                            onChange={(value) => { setMsg(value.target.value) }}
                        />
                        <button onClick={handleSendMsg} className="btn text-white bg-orange-7 w-full">
                            Send
                        </button>
                    </div>
                </aside>
            </div>
        </motion.section>
    )
}

export default Contact
