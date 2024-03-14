import React, { useState, useEffect, useRef } from 'react'
import { Outlet, useLocation,useSearchParams } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaSearch, FaBell, FaAddressBook, FaCar, FaWallet, FaLock, FaPhone, FaShoppingCart, FaStar, FaRegArrowAltCircleDown, FaExclamationCircle } from 'react-icons/fa'

const ScrollToTOP = () => {


    const b = useRef()
    const [Error, setError] = useState({})
    const location = useLocation();
    const [data, setdata] = useState({})
    const [note, setnote] = useState({})
    const [runEffect, setRunEffect] = useState(false);
    const [runEffect2, setRunEffect2] = useState(false);
    const [access, setaccess] = useState('');
    const [id, setId] = useState('');
    const [search, setsearch] = useSearchParams()
    const accesstoken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N…4MTB9.6uPNKFjMZFwtnelOQ2_akSpeafLSeOAp6XyVRFbqkFE`
 
    useEffect(() => {
        window.scrollTo(0, 0);
        
    }, [location]);
 
    useEffect(() => {
    const myid = localStorage.getItem('myid')
    setId(myid)
    },[location])

    useEffect(() => {
        
        
        const getusersDocuments = async () => {
            
            const option = {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                }
            }
            try {
                const response = await fetch(`https://backend-e-commerce-g7of.onrender.com/getuser/${id}`, option);
                const data = await response.json()
                setdata(data)
                // console.log(data)
            }

            catch (err) {
                setError(err)
                console.log(err.message)

            }
        } 
    id&&getusersDocuments()
    }, [data,id]);
   
    function changeRunEffect() {
        setRunEffect(prev => !prev)
    }
    function changeRunEffect1() {
        setRunEffect(false)
    }
    function signout () {
        localStorage.removeItem('mycart')  
        localStorage.removeItem('myid') 
        setdata({}) 
    }
    /*const publicKey = 'BK3JoQ6S3KgLGwUfe3fyr3lH2fXb6kihvuHsLeDaObR1qG8VtRhBcRd_r-8-wMd4KTV79XtfPu83Vjq3bFEmqyo';

    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
          return registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(publicKey),
          });
        })
        .then((subscription) => {
          console.log('Subscribed:', JSON.stringify(subscription));
        })
        .catch((error) => {
          console.error('Error subscribing to push notifications:', error);
        });
    }
    
    function urlBase64ToUint8Array(base64String) {
      const padding = '='.repeat((4 - base64String.length % 4) % 4);
      const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');
    
      const rawData = window.atob(base64);
      const outputArray = new Uint8Array(rawData.length);
    
      for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
      }
    
      return outputArray;
    }*/
    return (

        <div className=''>
            {/* {Error && <div className=' w-107 sm:w-108 md:w-109 flex items-center justify-center  rounded-xl shadow-xl outline-yellow-900  outline outline-2  fixed popout z-30 bg-white min-h-101 sm:min-h-102 lg:min-h-101 ' >
            <div className='flex md:items-center flex-col md:flex-row  gap-3 md:gap-5'>
                <FaExclamationCircle className='lg:text-5xl sm:text-4xl text-3xl text-yellow-900' />
                <div className='flex flex-col justify-center gap-1'>
                    <h1 className='font-bold sm:text-xl '>{Error.message}</h1>
                    <p className='md:text-lg'>Check your internet connection</p>
                </div>
            </div>
        </div>} */}
            {Error.message === 'Failed to fetch'&&Object.keys(data).length === 0? <div className='w-full bg-white'>
                <div className='popout fixed flex md:items-start flex-col md:flex-row  gap-3 md:gap-5'>
                    <FaExclamationCircle className='text-5xl md:text-6xl text-yellow-900' />
                    <div className='flex flex-col justify-center gap-1'>
                        <h1 className='font-bold text-xl sm:text-2xl'>No connention</h1>
                        <p className='md:text-lg'>Check your internet connection</p>
                         <div><button className='px-6 py-1 rounded-full bg-yellow-900 text-white' onClick={()=>window.location.reload()}>Reload</button></div>
                    </div>
                </div>
            </div>:
            <Outlet context={{data,note,runEffect,runEffect2,id,changeRunEffect,changeRunEffect1,signout}} />
             }
            {/* //  <Outlet context={{data,note,runEffect,changeRunEffect,changeRunEffect1,Error}} /> */}
        </div>
    )
}

export default ScrollToTOP