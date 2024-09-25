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
            <Outlet context={{data,note,runEffect,runEffect2,id,changeRunEffect,changeRunEffect1,signout}} />
            {/* //  <Outlet context={{data,note,runEffect,changeRunEffect,changeRunEffect1,Error}} /> */}
        </div>
    )
}

export default ScrollToTOP