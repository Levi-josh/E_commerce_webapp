import React, { useState, useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaSearch, FaBell, FaAddressBook, FaCar, FaWallet, FaLock, FaPhone, FaShoppingCart, FaStar } from 'react-icons/fa'

const ScrollToTOP = () => {


    const b = useRef()
    const [error,setError]=useState('')
    const location = useLocation();
    const [data,setdata]=useState([])
  
    const accesstoken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N…4MTB9.6uPNKFjMZFwtnelOQ2_akSpeafLSeOAp6XyVRFbqkFE`
  
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    useEffect(() => {

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

            }
          console.log(option)
        }
        getusersDocuments()
    }, []);

   
    
console.log(error)

    return (

        <div className='' ref={b} onScroll={(e) => { console.log(e) }}>

            <Outlet />

        </div>
    )
}

export default ScrollToTOP