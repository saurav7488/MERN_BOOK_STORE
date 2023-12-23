import React from 'react'
import { Link } from "react-router-dom"
import bookpig from "../assets/142296.jpg"
const PromoBanner = () => {
  return (
    <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24' >
          <div className='flex flex-col md:flex-row justify-between items-center gap-12' >
               <div className='md:w-1/2' >
                   <h2 className='text-4xl font-bold mb-6 leading-snug 
                   ' >2023 National Awards for Fictional Shortlist</h2>
                    <Link to="/shop" className='mt-12 block' ><button className='bg-blue-700 text-white font-semibold
                 px-5 py-2 rounded hover:bg-black duration-300'>Get Promo Code</button></Link>
               </div>
               <div>
                   <img src={bookpig} alt="./img"  className='w-15 rounded '/>
               </div>
          </div>
    </div>
  )
}

export default PromoBanner
