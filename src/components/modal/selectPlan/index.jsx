import React, { useState } from 'react';
import useEmailAuth from '../../../hooks/auth/useEmailAuth';
import { useFirestore } from '../../../context/FirestoreContext'
import { showSuccessToast, showErrorToast } from '../../../components/tosters'

const SelectPlan = ({ title, isPresent }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { currentUser } = useEmailAuth();
    const { uploadUserData, uploadNestedData } = useFirestore();

    const handleUploadCartData = async () => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            const currentDate = new Date();
            const data = {
                plan: title,
                dateOfOrder: currentDate,
                latitude: latitude,
                longitude: longitude
            }
            let orderIdCount = Date.now().toString();
            try {
                await uploadNestedData('users', currentUser.uid, 'orders', orderIdCount.toString(), data);

                showSuccessToast("Your Order Booked, Our Team Will Contact You")
                setIsModalOpen(false); // Close modal
            } catch (error) {
                console.error("Error while adding data into cart: ", error);
                showErrorToast("Oops!! Something went wrong. Please try again later.")
            }
        }, (error) => {
            console.error("Error getting location: ", error);
            showErrorToast("Location permsi.")
        });
    }

    const handleUploadUserData = async () => {
        try {
            const userData = {
                name: name,
                email: email,
                phone: phone,
            }
            if (name !== '' && email !== '' && phone !== '') {
                await uploadUserData('users', currentUser.uid, userData)
                showSuccessToast('Your Data Is Secure With Us')
                await handleUploadCartData()
            }
        } catch (error) {
            console.error("error while uploading ")
            showErrorToast('Oops!! Something went wrong. Please try again later.')
        }
    }

    return (
        <>
            <input
                className="modal-state" id={`modal-${title}`}
                type="checkbox"
                checked={isModalOpen}
                onChange={() => setIsModalOpen(!isModalOpen)}
            />
            <div className="modal">
                <label className="modal-overlay" htmlFor={`modal-${title}`}></label>
                <div className="modal-content flex flex-col gap-5 bg-white">
                    <label
                        htmlFor={`modal-${title}`}
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black hover:bg-inherit">
                        ✕
                    </label>
                    {
                        isPresent ? (
                            <>
                                <span className='my-8'>
                                    You selected service {title}
                                </span>
                                <div className="flex gap-3">
                                    <button className="btn btn-error btn-block" onClick={handleUploadCartData}>Proceed </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='my-8 space-y-4'>
                                    <div>
                                        <input
                                            className="input-ghost border-inherit text-orange-10 max-w-full bg-white focus:border-orange-5 input"
                                            placeholder="Name"
                                            type='text'
                                            value={name}
                                            onChange={(value) => { setName(value.target.value) }}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            className="input-ghost border-inherit text-orange-10 max-w-full bg-white focus:border-orange-5 input"
                                            placeholder="Email"
                                            type='email'
                                            value={email}
                                            onChange={(value) => { setEmail(value.target.value) }}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            className="input-ghost border-inherit text-orange-10 max-w-full bg-white focus:border-orange-5 input"
                                            placeholder="Phone No"
                                            type='tel'
                                            value={phone}
                                            onChange={(value) => { setPhone(value.target.value) }}
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <button className="btn btn-error btn-block" onClick={handleUploadUserData}>
                                        Upload Data And Add To Cart
                                    </button>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default SelectPlan;
