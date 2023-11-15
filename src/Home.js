import React from 'react'
import { FaBars, FaSearch, FaBell, FaAddressBook, FaCar, FaWallet, FaLock, FaPhone, FaShoppingCart } from 'react-icons/fa'
import homeimage from './hotdog image.jpg'
import { Link, NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home'>

            <header className='fixed flex justify-between items-center h-14 sm:h-16 md:h-20 px-3 w-full m-0 bg-white z-10 shadow-lg'>
                <h1 className='font-bold'>#Glamour Grove</h1>
                <ul className='hidden md:flex'>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Product</li>
                    <li>About</li>
                </ul>
                <div className='flex gap-3'>
                    <FaShoppingCart />
                    <FaBell />
                    <FaBars className='md:hidden ' />
                    <FaAddressBook className='hidden md:block' />
                </div>
            </header>
            <div className='overflow- w-120 flex gap-10 justify-center items-center sm:w-130 md:w-130 lg:w-130  pt-16 sm:pt-28 md:pt-32 lg:pt-36  m-auto  '>
                <img src='https://img.freepik.com/free-photo/lot-different-clothes-hanging-wardrobe_181624-16122.jpg?size=626&ext=jpg&ga=GA1.1.103364066.1699032278&semt=sph' className='w-full   md:h-96 bg-no-repeat bg-cover bg-center   ' />


            </div>
            <div className='absolute flex m-auto  w-full  justify-center mt-3 gap-1 md:gap-2'>
                <div className='   w-3 h-3 rounded-lg border border-black '></div>
                <div className='   w-3 h-3 rounded-lg border border-black '></div>
                <div className='  w-3 h-3 rounded-lg border border-black'></div>
                <div className='   w-3 h-3 rounded-lg border border-black'></div>
                <div className='   w-3 h-3 rounded-lg border border-black'></div>
            </div>
            <section>
                <div className='mt-10 text-center mb-8 md:flex lg:w-130 md:m-auto md:w-130 md:justify-between md:items-center md:mt-12 md:mb-12'>
                    <h1 className='text-2xl font-bold'>simply unique/better  </h1>
                    <p><strong>Glamour Grove</strong> is a gift and decoration store based in hcmc, vietnie since 2019.</p>
                </div>
                <div className='flex flex-col md:grid md:grid-cols-2   gap-8 md:gap-5  lg:gap-x-5 xl:gap-x-5 xl:gap-y-5 md:justify-items-center md:w-130 m-auto lg:w-130   justify-center items-center'>
                    <div className='md:w-full'>
                        <div className='absolute bg-yellow-800 w-36 mt-3 md:w-40 lg:w-44 xl:w-48 pl-3 md:pl-4 lg:pl-5 lg:mt-5 lg:py-1 ml-2 lg:ml-4 text-white'>
                            <h1 className='font-bold md:text-lg lg:text-xl'>clothes</h1>
                            <p className=' hover:cursor-pointer md:text-lg'>see more...</p>
                        </div>
                        <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='w-72 h-48 lg:w-full lg:h-72 md:w-full sm:w-96 xl:h-100 sm:h-56' />
                    </div>
                    <div className='md:w-full'>
                        <div className='absolute bg-yellow-800 w-36 mt-3 md:w-40 lg:w-44 xl:w-48 pl-3 md:pl-4 lg:pl-5 lg:mt-5 lg:py-1 ml-2 lg:ml-4 text-white'>
                            <h1 className='font-bold md:text-lg lg:text-xl'>Glasses</h1>
                            <p className=' hover:cursor-pointer md:text-lg '>see more...</p>
                        </div>
                        <img src={homeimage} className='w-72 h-48 lg:w-full lg:h-72 md:w-full xl:h-100 sm:w-96 sm:h-56' />
                    </div>
                    <div className='md:w-full'>
                        <div className='absolute bg-yellow-800 w-36 mt-3 md:w-40 lg:w-44 xl:w-48 pl-3 md:pl-4 lg:pl-5 lg:mt-5 lg:py-1 ml-2 lg:ml-4 text-white'>
                            <h1 className='font-bold md:text-lg lg:text-xl'>Watches</h1>
                            <p className=' hover:cursor-pointer md:text-lg'>see more...</p>
                        </div>
                        <img src={homeimage} className='w-72 h-48 lg:w-full lg:h-72 md:w-full xl:h-100 sm:w-96 sm:h-56' />
                    </div>
                    <div className='md:w-full'>
                        <div className='absolute bg-yellow-800 w-36 mt-3 md:w-40 lg:w-44 xl:w-48 pl-3 md:pl-4 lg:pl-5 lg:mt-5 lg:py-1 ml-2 lg:ml-4 text-white'>
                            <h1 className='font-bold md:text-lg lg:text-xl'>Shoes</h1>
                            <p className=' hover:cursor-pointer md:text-lg'>see more...</p>
                        </div>
                        <img src={homeimage} className='w-72 h-48 lg:w-full lg:h-72 md:w-full xl:h-100 sm:w-96 sm:h-56 ' />
                    </div>

                </div>
                {/*overflow hidden divs*/}


                <div>
                    <div className='flex justify-between items-center'>
                        <h1 className='font-bold my-2 ml-3 sm:ml-4 md:ml-5  text-lg sm:my-4  md:my-5 lg:my-6 lg:text-2xl lg:ml-6 md:text-xl'>New<span className='flex flex-wrap'> Arrivals</span></h1>
                        <p className='hidden md:block lg:mt-10 md:mr-5 lg:mr-6 md:mt-8 lg:text-lg'>more products...</p>
                    </div>
                    <div className='overflow-div '>
                        <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='w-10 md:w-20  lg:w-15' />
                        <img src={homeimage} className='w-10 md:w-20 lg:w-15' />
                        <img src={homeimage} className='w-10 md:w-20  lg:w-15' />
                        <img src={homeimage} className='w-10 md:w-20  lg:w-15' />
                    </div>
                    <p className='md:hidden mt-2 ml-3 sm:ml-4'>more products...</p>
                </div>
                {/*ends*/}

                {/*about starts*/}
                <div className='md:flex md:p-10 shadow-lg w-110 m-auto shadow-black mt-10 border-t-2 p-5 sm:p-10 sm:px-20 '>

                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6XwgxBgBRVxNaZM2ZGtxV8Jy8YSEKG8_Vrw&usqp=CAU' className='w-full md:h-72 h-64' />
                    <div className='w-full pt-4 text-center md:pt-0 md:pl-8'>
                        <h1 className='font-bold text-lg md:text-2xl lg:text-3xl'>
                            Special Fashon sales
                        </h1>
                        <p className='mt-3 md:mt-4 lg:mt-8 md:text-lg'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum illum quam numquam impedit quo? Facere, optio! Voluptatum, possimus? Voluptatum corrupti error.

                        </p>
                        <div className='md:flex justify-center items-center gap-5 mt-6 lg:mt-10'>
                            <h1 className='w-30 border border-dashed  border-black mt-3 md:mt-0 lg:w-20 md:w-24 md:rounded-lg md:h-10 flex justify-center items-center font-bold md:text-lg h-8  '>30% OFF</h1>
                            <button className='w-40 bg-yellow-800 mt-4 text-white md:w-24 md:mt-0 lg:w-20 md:h-10 md:rounded-lg font-semibold h-8 md:text-lg'>Shop Now</button>
                        </div>
                    </div>
                </div>
                {/*about ends*/}
                <div className='grid grid-cols-2 w-110 gap-4 justify-items-center m-auto lg:flex mt-5 md:gap-5'>
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