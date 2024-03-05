import React, { useState, useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaSearch, FaBell, FaAddressBook, FaCar, FaWallet, FaLock, FaPhone, FaShoppingCart, FaStar, FaRegArrowAltCircleDown, FaExclamationCircle } from 'react-icons/fa'

const ScrollToTOP = () => {


    const b = useRef()
    const [Error, setError] = useState({})
    const location = useLocation();
    const [data, setdata] = useState({})
    const [note, setnote] = useState({})
    const [runEffect, setRunEffect] = useState(false);
  
    const accesstoken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N…4MTB9.6uPNKFjMZFwtnelOQ2_akSpeafLSeOAp6XyVRFbqkFE`
 
    useEffect(() => {
        window.scrollTo(0, 0);
        
    }, [location]);
    useEffect(() => {
        setError(null)
        setnote(data?.Notification?.reverse())
        const getusersDocuments = async () => {
            
            const option = {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                }
            }
            try {
                const response = await fetch('https://backend-e-commerce-g7of.onrender.com/getuser/65ccb7984abbc67ca9a90231', option);
                const data = await response.json()
                setdata(data)
            }

            catch (err) {
                setError(err)
                console.log(err.message)

            }
        }
        getusersDocuments()
    }, [data]);
    useEffect(() => {
        window.scrollTo(0, 0);
        
    }, [location]);
    
    function changeRunEffect() {
        setRunEffect(prev => !prev)
    }
    function changeRunEffect1() {
        setRunEffect(false)
    }
  
    return (

        <div className=''>
            {Error && <div className=' w-107 sm:w-108 md:w-109 flex items-center justify-center  rounded-xl shadow-xl outline-yellow-900  outline outline-2  fixed popout z-30 bg-white min-h-101 sm:min-h-102 lg:min-h-101 ' >
            <div className='flex md:items-center flex-col md:flex-row  gap-3 md:gap-5'>
                <FaExclamationCircle className='lg:text-5xl sm:text-4xl text-3xl text-yellow-900' />
                <div className='flex flex-col justify-center gap-1'>
                    <h1 className='font-bold sm:text-xl '>{Error.message}</h1>
                    <p className='md:text-lg'>Check your internet connection</p>
                </div>
            </div>
        </div>}
            {/* {Error?.message ? <div className='w-full bg-white'>
                <div className='popout fixed flex md:items-center flex-col md:flex-row  gap-3 md:gap-5'>
                    <FaExclamationCircle className='text-5xl md:text-6xl' />
                    <div className='flex flex-col justify-center gap-1'>
                        <h1 className='font-bold text-xl sm:text-2xl'>No connention</h1>
                        <p className='md:text-lg'>Check your internet connection</p>
                    </div>
                </div>
            </div>:
            <Outlet context={{data,note,runEffect,changeRunEffect,changeRunEffect1}} />
            } */}
             <Outlet context={{data,note,runEffect,changeRunEffect,changeRunEffect1,Error}} />
        </div>
    )
}

export default ScrollToTOP