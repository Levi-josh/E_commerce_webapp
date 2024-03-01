import React from 'react'
import { FaEllipsisV } from 'react-icons/fa'
import { NavLink, useOutletContext } from 'react-router-dom'
import { useContext } from 'react'
import { appcontext } from './History'

const Firsthistory = () => {
    const data = useContext(appcontext)
    const data1 = useOutletContext()
    console.log(data1)
    return (
        <div className='lg:w-12 w-full    lg:fixed pt-20 sm:pt-24 md:pt-24 lg:pt-24   h-full'>

            <div className='lg:overflow-y-scroll h-full hidden lg:block '>
                {data?.history?.map(prev => {return(<>
                    <NavLink to={`/history/${prev._id}`}>
                        <div className='lg:px-3 md:px-6 sm:px-6 px-5 border-b  pt-4 pb-2 sm:pt-5 sm:pb-3 xl:px-4 flex flex-col'>
                            <div className='flex justify-between items-center'>
                                <p> Hi welcome to glamour grove a tahk.</p>
                                <FaEllipsisV />
                            </div>
                            <p className='font-semibold'>2 minntes ago</p>
                        </div>
                    </NavLink>
                    </>
                )})}
                

            </div>
            <div className='lg:hidden h-full '>
                {data1?.history?.map(prev => {return(<>
                    <NavLink to={`/history/${prev._id}`}>
                        <div className='lg:px-3 md:px-6 sm:px-6 px-5 border-b  pt-4 pb-2 sm:pt-5 sm:pb-3 xl:px-4 flex flex-col'>
                            <div className='flex justify-between items-center'>
                                <p> Hi welcome to glamour grove a tahk.</p>
                                <FaEllipsisV />
                            </div>
                            <p className='font-semibold'>2 minntes ago</p>
                        </div>
                    </NavLink>
                    </>
                )})}
                

            </div>
        </div>
    )
}

export default Firsthistory