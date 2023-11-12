import React from 'react'
import { FaBars, FaSearch, FaBell, FaAddressBook, FaCar, FaWallet, FaLock, FaPhone } from 'react-icons/fa'
import homeimage from './hotdog image.jpg'
import { Link, NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home'>

            <header className='fixed flex justify-between items-center h-14 px-3 w-full m-0 bg-white'>
                <h1 className='font-bold'>#Soundcity</h1>
                <ul className='hidden md:flex'>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Product</li>
                    <li>Contact us</li>
                </ul>
                <div className='flex gap-3'>
                    <FaSearch />
                    <FaBell />
                    <FaBars className='md:hidden' />
                    <FaAddressBook className='hidden md:block' />
                </div>
            </header>
            <div className='overflow-hidden w-120 flex justify-center items-center sm:w-150 md:w-130 lg:w-130  pt-16  m-auto'>
                <img src='https://img.freepik.com/free-photo/lot-different-clothes-hanging-wardrobe_181624-16122.jpg?size=626&ext=jpg&ga=GA1.1.103364066.1699032278&semt=sph' className='w-full  md:h-96 bg-no-repeat bg-cover bg-center' />
            </div>
            <section>
                <div className='mt-10 text-center mb-8 md:flex lg:w-130 md:m-auto md:w-130 md:justify-between md:items-center md:mt-12 md:mb-12'>
                    <h1 className='text-2xl font-bold'>simply unique/better  </h1>
                    <p><strong>soundcity</strong> is a gift and decoration store based in hcmc, vietnie since 2019.</p>
                </div>
                <div className='flex flex-col md:grid md:grid-cols-2   gap-8 md:gap-5  lg:gap-x-5 xl:gap-x-5 xl:gap-y-5 md:justify-items-center md:w-130 m-auto lg:w-130   justify-center items-center'>
                    <div>

                    </div>
                    <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='w-72 h-48 lg:w-full md:h-72 md:w-full sm:w-96 xl:h-100 sm:h-56' />
                    <img src={homeimage} className='w-72 h-48 lg:w-full md:h-72 md:w-full xl:h-100 sm:w-96 sm:h-56' />
                    <img src={homeimage} className='w-72 h-48 lg:w-full md:h-72 md:w-full xl:h-100 sm:w-96 sm:h-56' />
                    <img src={homeimage} className='w-72 h-48 lg:w-full md:h-72 md:w-full xl:h-100 sm:w-96 sm:h-56 ' />

                </div>
                {/*overflow hidden divs*/}


                <div>
                    <div className='flex justify-between'>
                        <h1>NEW ARRIVAL</h1>
                        <p className='hidden md:block '>see more...</p>
                    </div>
                    <div className='overflow-div '>
                        <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='w-10 md:w-20  lg:w-15' />
                        <img src={homeimage} className='w-10 md:w-20 lg:w-15' />
                        <img src={homeimage} className='w-10 md:w-20  lg:w-15' />
                        <img src={homeimage} className='w-10 md:w-20  lg:w-15' />
                    </div>
                    <p className='md:hidden'>see more...</p>
                </div>
                {/*ends*/}

                {/*about starts*/}
                <div className='flex w-full'>

                    <img src='https://img.freepik.com/free-vector/fashion-business-man-accessories-set_1284-16521.jpg?size=626&ext=jpg&ga=GA1.1.103364066.1699032278&semt=sph' className='h-72 w-full' />
                    <div className='px-20'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum illum quam numquam impedit quo? Facere, optio! Voluptatum, possimus? Voluptatum corrupti error saepe illo ut dignissimos corporis itaque modi beatae?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nemo quam molestias quos sapiente nihil est, sed esse iure facilis voluptatum ad dolor architecto eos iste provident autem tempore quisquam.
                    </div>
                </div>
                {/*about ends*/}
                <div className='grid grid-cols-2 w-130 gap-4 justify-items-center m-auto lg:flex mt-5 md:gap-5'>
                    <div className=' bg-yellow-800 w-full h-36 pt-4 pl-4 lg:h-44 '>
                        <FaCar />
                        <h2>Free shipping</h2>
                        <p>Order above $200. </p>
                    </div>
                    <div className='bg-yellow-800   w-full h-36  pt-4 pl-4  lg:h-44'>
                        <FaWallet />
                        <h2>Money back</h2>
                        <p>30 days guarantee.</p>
                    </div>
                    <div className='bg-yellow-800 w-full h-36  pt-4 pl-4 lg:h-44'>
                        <FaLock />
                        <h2>Secure payments</h2>
                        <p>Secure by stripe.</p>
                    </div>
                    <div className='bg-yellow-800 w-full h-36  pt-4 pl-4 lg:h-44'>
                        <FaPhone />
                        <h2>24/7 support</h2>
                        <p>Phone and email support.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home