import React from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Complete = () => {
    const { nextcart3, completeitems,cart } = useOutletContext()
    const navigate = useNavigate()
    const mode = useSelector((state)=>state.changemode.value)
    const bgcolor = mode?.colorBgtext
    const textcolor = mode?.colortext
    if (completeitems?.progess===true) {
      navigate('/cart/:id/complete')  
    }
   
    return (
        <div className='pt-6 sm:pt-8 pb-20 h-full'>
            <div className={`m-auto px-5 w-110 md:w-150 lg:w-200 shadow-xl border-0.5 md:border   ${mode.colormode?'border-stone-700':'shadow-slate-300 border-slate-300'}  py-6 sm:py-14 md:py-16  md:text-center  `}>
                <p className='md:text-lg lg:text-xl font-medium text-yellow-900'>Thank you!</p>
                <div className='flex flex-col md:gap-1 mt-3 mb-5 sm:my-4 md:mb-7 md:mt-2 lg:mt-3 lg:mb-10 '>
                    <h1 className='font-semibold text-xl md:text-3xl lg:text-4xl '>Your order has been</h1> <h1 className='font-semibold text-xl md:text-3xl lg:text-4xl'>received</h1>
                </div>
                <div className='flex md:justify-center gap-1 md:gap-2 lg:gap-3 overflow-auto '>
                {cart?.product?.map(prev => {return(
                    <img src={prev.image} className='w-16s sm:w-24 lg:w-32 ' />
                )})}
                </div>
                <div className='flex flex-col  gap-1 md:flex-row md:hidden border-b-0.5 border-gray-400 pb-4 mt-8'>
                    <p className={`${mode.colormode?'text-yellow-800':'text-gray-600'} font-medium`}>Order code:</p>
                    <p className='font-semibold'>{`#${cart?.ordercode}`}</p>
                </div>
                <div className='flex flex-col gap-1 md:flex-row md:hidden border-b-0.5 border-gray-400 py-4'>
                    <p className={`${mode.colormode?'text-yellow-800':'text-gray-600'} font-medium`}>Date:</p>
                    <p className='font-semibold'>{cart?.date}</p>
                </div>
                <div className='flex flex-col  gap-1 md:flex-row md:hidden border-b-0.5 border-gray-400 py-4'>
                    <p className={`${mode.colormode?'text-yellow-800':'text-gray-600'} font-medium`}>Total:</p>
                    <p className='font-semibold'>$250.000</p>
                </div>
                <div className='flex flex-col gap-1 md:flex-row md:hidden border-b-0.5 border-gray-400 py-4'>
                    <p className={`${mode.colormode?'text-yellow-800':'text-gray-600'} font-medium`} >Payment method:</p>
                    <p className='font-semibold'>{cart?.payment}</p>
                </div>
                <div className='md:flex text-left hidden md:flex-row md:justify-center gap-10 mt-8 items-center '>
                    <div className='lg:text-lg font-semibold text-gray-600 flex flex-col gap-3  '>
                        <p className={`${mode.colormode?'text-yellow-800':'text-gray-600'} `}>Order code:</p>
                        <p  className={`${mode.colormode?'text-yellow-800':'text-gray-600'} `}>Date:</p>
                        <p  className={`${mode.colormode?'text-yellow-800':'text-gray-600'} `}>Total Amount:</p>
                        <p  className={`${mode.colormode?'text-yellow-800':'text-gray-600'} `}>Payment method:</p>
                    </div>
                    <div className='flex flex-col gap-3 lg:text-lg font-bold'>
                        <p>{`#${cart?.ordercode}`}</p>
                        <p>{cart?.date}</p>
                        <p>$250.000</p>
                        <p>{cart?.payment}</p>
                    </div>
                </div>

                <button className=' w-full py-3 sm:w-22 md:w-48 block m-auto  bg-yellow-900 text-white md:py-2 rounded-3xl mt-9 md:mt-8 md:font-medium lg:font-semibold text-lg' onClick={nextcart3}>Purchase history</button>
            </div>
        </div>
    )
}

export default Complete