import React from 'react'

const Complete = () => {
    return (
        <div className='pt-6 sm:pt-8 pb-20'>
            <div className='m-auto px-5 w-110 md:w-150 lg:w-200 shadow-xl shadow-slate-300 py-6 sm:py-14 md:py-16  md:text-center   '>
                <p className='md:text-lg lg:text-xl'>Thank you!</p>
                <div className='flex flex-col md:gap-1 my-3 sm:my-4 md:my-5 lg:my-6 '>
                    <h1 className='font-semibold text-xl md:text-3xl lg:text-4xl '>Your order has been</h1> <h1 className='font-semibold text-xl md:text-3xl lg:text-4xl'>received</h1>
                </div>
                <div className='flex md:justify-center overflow-auto'>
                    <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='w-16 md:w-40 ' />
                    <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className=' w-16 md:w-40 ' />
                    <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='w-16 md:w-40 ' />
                </div>
                <div>
                    <p>Order code:</p>
                    <p>#231_486e</p>
                </div>
                <div>
                    <p>Date:</p>
                    <p>October 19,2023</p>
                </div>
                <div>
                    <p>Total:</p>
                    <p>$250.000</p>
                </div>
                <div>
                    <p>Payment method:</p>
                    <p>Credit card</p>
                </div>
                <button>Purchase history</button>
            </div>
        </div>
    )
}

export default Complete