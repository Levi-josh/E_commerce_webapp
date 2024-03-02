import React from 'react'
import { useParams, useOutletContext } from 'react-router-dom'
import { useContext, useEffect,useState } from 'react'
import { appcontext } from './Note'
const Secondnote = () => {
const params = useParams()
const data1 = useOutletContext()
const [data,setdata]=useState()
const [laptopdata,setdata2]=useState()
const [error, setError] = useState()
const [error2, setError2] = useState()
const data2 = useContext(appcontext)
   
useEffect(() => {
    const getnote = async () => {
            
            const option = {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                }
            }
            try {
                const response = await fetch(`https://backend-e-commerce-g7of.onrender.com/getnote/${data1._id}/${params.id}`, option);
                const data = await response.json()
                setdata(data)
            }

            catch (err) {
                setError(err)
            }
        }
        getnote()
}, []);
useEffect(() => {
    const getnote = async () => {
            const option = {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                }
            }
            try {
                const response = await fetch(`https://backend-e-commerce-g7of.onrender.com/getnote/65ccb7984abbc67ca9a90231/${params.id}`, option);
                const data = await response.json()
                setdata2(data)
            }

            catch (err) {
                setError2(err)

            }
        }
        getnote()
}, [params.id]);
    return (
        <div className='lg:fixed flex items-center flex-col lg:w-126 w-full lg:ml-0 h-full right-0 pt-28 sm:pt-36 md:pt-40 lg:pt-40 '>
            <div className='lg:hidden'>
                {data?.note ?<>
            <div className='flex flex-col items-center'>

                <img src='https://img.freepik.com/free-photo/lot-different-clothes-hanging-wardrobe_181624-16122.jpg?size=626&ext=jpg&ga=GA1.1.103364066.1699032278&semt=sph' className='  w-105 h-105 sm:w-106 sm:h-106 outline-2 outline outline-yellow-900  rounded-full  bg-no-repeat bg-cover bg-center    ' />
                <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-900 '>Glamour Grove</h1>
            </div>
            <p className=''>{data?.note}</p></>
            :<p>please wait...</p>
            }
            </div>

            <div className='lg:block hidden'>
                {params.id ?
                    laptopdata?.note ? <>
                        <div className='flex flex-col items-center'>

                            <img src='https://img.freepik.com/free-photo/lot-different-clothes-hanging-wardrobe_181624-16122.jpg?size=626&ext=jpg&ga=GA1.1.103364066.1699032278&semt=sph' className='  w-105 h-105 sm:w-106 sm:h-106 outline-2 outline outline-yellow-900  rounded-full  bg-no-repeat bg-cover bg-center    ' />
                            <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-900 '>Glamour Grove</h1>
                        </div>
                        <p className=''>{laptopdata?.note}</p></>
                    : <p>please wait...</p>
                : <p>your Notifications will appear here</p>}
            </div>
        </div>
    )
}

export default Secondnote