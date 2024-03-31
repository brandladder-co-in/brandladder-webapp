import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useFirestore } from '../../../context/FirestoreContext';
import { useAuth } from '../../../context/AuthContext';

import CartCard from '../../cards/cart';
import { MdOutlineCancel } from 'react-icons/md';
import { HiOutlineEmojiSad } from "react-icons/hi";

const CardModal = () => {

    const [cartData, setCartData] = useState([]);

    const { getAllSubdocumentData } = useFirestore();
    const { currentUser } = useAuth()

    useEffect(() => {
        const handleGetCartData = async () => {
            try {
                const res = await getAllSubdocumentData('users', currentUser.uid, 'orders')
                // console.log(res)
                setCartData(res);

            } catch (error) {
                console.log("Error while fetching cart data: ", error);
            }
        }
        handleGetCartData()

    }, [currentUser.uid, getAllSubdocumentData])


    return (
        <div>
            <input className="modal-state" id="cart-modal" type="checkbox" />
            <div className="modal">
                <label className="modal-overlay"></label>
                <div className="modal-content flex flex-col gap-5 bg-white w-full">
                    <label
                        htmlFor="cart-modal"
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black hover:bg-orange-2"
                    >
                        <MdOutlineCancel />
                    </label>
                    <h2 className="text-xl">My Bag</h2>

                    <section>
                        {
                            cartData?.length > 0 ? (
                                cartData.map((item) => (
                                    <div className="my-2" key={item.id}>
                                        <CartCard
                                            title={item.plan}
                                            date={item.dateOfOrder.toDate().toLocaleDateString()}
                                            orderId={item.id}
                                        />
                                    </div>
                                ))
                            ) : (
                                <>
                                    <h2 className='flex my-6 mx-auto justify-center' >Your Bag Is Empty <HiOutlineEmojiSad className='my-auto mx-2 text-2xl' /></h2>
                                    <Link to='/services' >
                                        <label
                                            htmlFor='cart-modal'
                                            className="btn btn-outline bg-inherit border-orange-6 text-black shadow-md transition-all ease-in-out duration-500 hover:bg-orange-6 hover:text-orange-2 hover:shadow-2xl hover:border-orange-6 w-full">
                                            Checkout Our Services
                                        </label>
                                    </Link>
                                </>
                            )
                        }
                    </section>

                    {/* <section>
                        {
                            cartData?.map((data, index) => {
                                return (
                                    <div className="my-2" key={index}>
                                        <CartCard
                                            title={data.plan}
                                            date={data.dateOfOrder}
                                        />
                                    </div>
                                )
                            })
                        }
                    </section> */}
                </div>
            </div>
        </div>
    )
}

export default CardModal
