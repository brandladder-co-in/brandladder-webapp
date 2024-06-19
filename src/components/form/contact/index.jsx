import { useState } from 'react';
import { useFirestore } from '../../../context/FirestoreContext';
import { showSuccessToast, showErrorToast } from '../../tosters'
import { countryPhoneCode } from '../../../.data/no-code'

const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [phone, setPhone] = useState('');
    const [confirmPhone, setConfirmPhone] = useState('');
    const [msg, setMsg] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);

    const { uploadUserData: sendMessage } = useFirestore();

    const handleSendMsg = async () => {
        setIsLoaded(true)
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

                setName('');
                setEmail('');
                setPhone('');
                setConfirmPhone('');
                setMsg('');
            }


        } catch (error) {
            console.error('Error while sending message: ', error);
            showErrorToast('Something went wrong!! Our Try again later')
        } finally {
            setIsLoaded(false)
        }
    }

    return (
        <>
            <div className='space-y-4 mb-4'>
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
                <aside className='grid grid-cols-1 md:grid-cols-5 gap-4'>
                    <select
                        className="input-ghost border-inherit text-orange-10 max-w-full bg-white col-span-2 input"
                        value={selectedCountry}
                        onChange={(value) => { setSelectedCountry(value.target.value) }}
                    >
                        <option value="">Select Country</option>
                        {countryPhoneCode.map((country, index) => (
                            <option key={index} value={country.countryCodes}>
                                {country.country}
                            </option>
                        ))}
                    </select>
                    <input
                        className="input-ghost border-inherit text-orange-10 max-w-full bg-white col-span-3 input"
                        placeholder="Phone No"
                        type='tel'
                        value={phone}
                        onChange={(value) => { setPhone(value.target.value) }}
                    />
                </aside>
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
                {
                    isLoaded ? (
                        <button onClick={handleSendMsg} className="btn text-white bg-orange-7 w-full">
                            Sending ...
                        </button>
                    ) : (
                        <button onClick={handleSendMsg} className="btn text-white bg-orange-7 w-full">
                            Send
                        </button>
                    )
                }
            </div>
        </>
    )
}

export default ContactForm
