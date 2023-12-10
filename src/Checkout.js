import React from 'react'
import { FaArrowDown } from 'react-icons/fa'

const Checkout = () => {
    return (
        <div className='pt-6 sm:pt-8 pb-20'>
            <div>
                <div className='flex flex-col gap-3'>
                    <h1>Contact Information</h1>
                    <div className='flex flex-col gap-5'>
                        <div className='flex gap-3'>
                            <div className='flex flex-col gap-2'>
                                <label>FIRST NAME</label>
                                <input type='text' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label>LAST NAME</label>
                                <input type='text' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>PHONE NUMBER</label>
                            <input type='text' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>EMAIL ADDRESS</label>
                            <input type='text' />
                        </div>
                    </div>
                </div>
                <div>
                    <h1>Shipping Address</h1>
                    <div>
                        <div>
                            <label>STREET ADDRESS *</label>
                            <input type='text' />
                        </div>
                        <div>
                            <label>COUNTRY *</label>
                            <div>
                                <FaArrowDown />
                            </div>
                        </div>
                        <div>
                            <label>TOWN/CITY *</label>
                            <input type='text' />
                        </div>
                        <div className='flex'>
                            <div className='flex flex-col gap-2'>
                                <label>STATE</label>
                                <input type='text' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label>ZIP CODE</label>
                                <input type='text' />
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <input type='checkbox' />
                            <p>use a different billing address (optional)</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>Payment Method</h1>
                    <div>
                        <div>
                            <input type='radio' />
                            <p>Pay by Card Credit</p>
                        </div>
                        <div>
                            <input type='radio' />
                            <p>Paypal</p>
                        </div>
                        <hr></hr>
                        <div>
                            <label>CARD NUMBER</label>
                            <input type='text' />
                        </div>
                        <div className='flex'>
                            <div className='flex flex-col gap-2'>
                                <label>EXPIRATION DATE</label>
                                <input type='text' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label>CVC</label>
                                <input type='text' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Checkout