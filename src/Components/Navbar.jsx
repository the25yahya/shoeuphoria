import React from 'react'
import { FaShoppingBag, FaUserAlt } from 'react-icons/fa'
import SearchForm from './SearchFrom'


const Navbar = () => {
  return (
    <nav className='flex justify-around p-10 px-20 items-center'>
     <p className='font-semibold text-xl'>SHOE<span className='text-orange-500'>UPHORIA</span></p>
     <div className='flex items-center font-semibold'>
      <p className='pr-8 hover:text-orange-500 cursor-pointer transition'>Men</p>
      <p className='pr-8 hover:text-orange-500 cursor-pointer transition'>Women</p>
      <p className='pr-8 hover:text-orange-500 cursor-pointer transition'>Categories</p>
      <p className='pr-20 hover:text-orange-500 cursor-pointer transition'>Brands</p>
      <SearchForm />
       <div className='px-3 pr-8'>
         <FaShoppingBag />
       </div>
       <div>
         <FaUserAlt />
       </div>
     </div>
    </nav>
  )
}

export default Navbar