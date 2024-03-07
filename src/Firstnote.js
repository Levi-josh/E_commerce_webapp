import React from 'react'
import { FaEllipsisV } from 'react-icons/fa'
import { NavLink,useOutletContext } from 'react-router-dom'
import { useContext } from 'react'
import { appcontext } from './Note'
import { motion } from 'framer-motion'
const Firstnote = () => {
    const data = useContext(appcontext)
    const data1 = useOutletContext()
    console.log(data)
    return (
        <div className='lg:w-12 w-full    lg:fixed pt-20 sm:pt-24 md:pt-24 lg:pt-24   h-full'>

            <div className='lg:overflow-y-scroll h-full hidden lg:block '>
                {data?.Notification ?
                    data?.Notification?.map(prev => {
                        return (<>
                            <NavLink to={`/note/${prev._id}`}>
                                <div className='lg:px-3 md:px-6 sm:px-5 px-5 border-b  pt-5 pb-3 xl:px-4 flex flex-col'>
                                    <div className='flex justify-between items-center'>
                                        <p> {(prev.note).length > 35 ? `${(prev.note).slice(0, 35)}...` : prev.note}</p>
                                        <FaEllipsisV />
                                    </div>
                                    <p className='font-semibold'>2 minntes ago</p>
                                </div>
                            </NavLink>
                        </>)
                    }) :
                    <motion.div animate={{ rotate: 360 }} initial={{ x: '50%', x: '-50%' }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} className='absolute popout bg-gradient-to-r z-30 from-white bg-opacity-100 via-yellow-900   to-yellow-900 lg:w-11 lg:h-11 w-9 h-9 rounded-full  '>
                        <div className='lg:w-8 lg:h-8 w-6 h-6 bg-white popout rounded-full absolute'></div>
                    </motion.div>}
            </div>
            <div className='lg:hidden h-full '>
                {data1?.Notification ?
                 data1?.Notification?.map(prev => {return (<>
                <NavLink to={`/note/${prev._id}`}>
                    <div className='lg:px-3 md:px-6 sm:px-5 px-5 border-b  pt-5 pb-3 xl:px-4 flex flex-col'>
                        <div className='flex justify-between items-center'>
                                 <p> {(prev.note).length>35?`${(prev.note).slice(0,35)}...`:prev.note}</p>
                            <FaEllipsisV />
                        </div>
                        <p className='font-semibold'>2 minntes ago</p>
                    </div>
                </NavLink>
                 </>)
                 }) :
                     <motion.div animate={{ rotate: 360 }} initial={{ x: '50%', x: '-50%' }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} className='absolute popout bg-gradient-to-r z-30 from-white bg-opacity-100 via-yellow-900   to-yellow-900 lg:w-11 lg:h-11 w-9 h-9 rounded-full  '>
                        <div className='lg:w-8 lg:h-8 w-6 h-6 bg-white popout rounded-full absolute'></div>
                    </motion.div>
                }
                

            </div>
           
        </div>
    )
}

export default Firstnote