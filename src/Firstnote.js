import React from 'react'
import { FaEllipsisV } from 'react-icons/fa'
import { NavLink,useOutletContext } from 'react-router-dom'
import { useContext } from 'react'
import { appcontext } from './Note'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
const Firstnote = () => {
    const data = useContext(appcontext)
    const data1 = useOutletContext()
    const mode = useSelector((state)=>state.changemode.value)
    const bgcolor = mode?.colorBgtext
    const textcolor = mode?.colortext
    
    return (
        <div className='lg:w-12 w-full    lg:fixed pt-20 sm:pt-24 md:pt-24 lg:pt-24   h-full'>

            <div className='lg:overflow-y-scroll h-full hidden lg:block '>
                {/* {data?.Notification ? */}
                   { data?.Notification?.map(prev => {
                        return (<>
                            <NavLink to={`/note/${prev._id}`}>
                                <div className='lg:px-3 md:px-6 sm:px-5 px-5 border-b-0.5 border-gray-400  pt-5 pb-3 xl:px-4 flex flex-col'>
                                    <div className='flex justify-between items-center'>
                                        <p> {(prev.note).length > 35 ? `${(prev.note).slice(0, 35)}...` : prev.note}</p>
                                        <FaEllipsisV />
                                    </div>
                                    <p className='font-semibold'>2 minntes ago</p>
                                </div>
                            </NavLink>
                        </>)
                    }).reverse()}
            </div>
            <div className='lg:hidden h-full '>
                {/* {data1?.Notification ? */}
                 {data1?.Notification?.map(prev => {return (<>
                <NavLink to={`/note/${prev._id}`}>
                    <div className='lg:px-3 md:px-6 sm:px-5 px-5 border-b-0.5 border-gray-400  pt-5 pb-3 xl:px-4 flex flex-col'>
                        <div className='flex justify-between items-center'>
                                 <p> {(prev.note).length>35?`${(prev.note).slice(0,35)}...`:prev.note}</p>
                            <FaEllipsisV />
                        </div>
                        <p className='font-semibold'>2 minntes ago</p>
                    </div>
                </NavLink>
                 </>)
                 }).reverse()}
                

            </div>
           
        </div>
    )
}

export default Firstnote