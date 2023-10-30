import React from 'react'
import { FaShoppingBag, FaUserAlt } from 'react-icons/fa'
import SearchForm from './SearchFrom'
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <nav className='flex justify-around p-10 px-20 items-center'>
     <Link to='/'><p className='font-semibold text-xl cursor-pointer'>SHOE<span className='text-orange-500'>UPHORIA</span></p></Link>
     <div className='flex items-center font-semibold'>
     <Link to='/'><p className='pr-8 hover:text-orange-500 cursor-pointer transition'>Home</p></Link>
      <Link to='/Men'><p className='pr-8 hover:text-orange-500 cursor-pointer transition'>Men</p></Link>
      <Link to='/Women'><p className='pr-8 hover:text-orange-500 cursor-pointer transition'>Women</p></Link>
      <Link to='/Products'><p className='pr-8 hover:text-orange-500 cursor-pointer transition'>Products</p></Link>
      <Link to='/Brands'><p className='pr-8 hover:text-orange-500 cursor-pointer transition'>Brands</p></Link>
      <SearchForm />
       <div className='px-3 pr-8 cursor-pointer'>
         <FaShoppingBag />
       </div>
       <div className='cursor-pointer'> 
         <FaUserAlt />
       </div>
     </div>
    </nav>
  )
}

export default Navbar