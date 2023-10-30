import React from 'react'
import { FaShoppingBag, FaUserAlt } from 'react-icons/fa'
import SearchForm from './SearchFrom'
import { Link } from 'react-router-dom';
import { Tooltip } from '@chakra-ui/react';
import { useStateContext } from '../Contexts/ContextProvider';
import Cart from './Cart'
import User from './User'

const Navbar = () => {
  //nav cotext state
  const {isClicked,setIsClicked,handleClick} = useStateContext();
  return (
    <nav className='flex justify-around p-10 px-20 items-center'>
     {isClicked.cart && <Cart />}
     {isClicked.user && <User />}
     <Link to='/'><p className='font-semibold text-xl cursor-pointer'>SHOE<span className='text-orange-500'>UPHORIA</span></p></Link>
     <div className='flex items-center font-semibold'>
     <Link to='/'><p className='pr-8 hover:text-orange-500 cursor-pointer transition'>Home</p></Link>
      <Link to='/Men'><p className='pr-8 hover:text-orange-500 cursor-pointer transition'>Men</p></Link>
      <Link to='/Women'><p className='pr-8 hover:text-orange-500 cursor-pointer transition'>Women</p></Link>
      <Link to='/Products'><p className='pr-8 hover:text-orange-500 cursor-pointer transition'>Products</p></Link>
      <Link to='/Brands'><p className='pr-8 hover:text-orange-500 cursor-pointer transition'>Brands</p></Link>
      <SearchForm />
       <Tooltip label='Cart'>
        <div
        onClick={()=>handleClick('user')} 
        className='px-3 pr-8 cursor-pointer'>
          <FaShoppingBag />
        </div>
       </Tooltip>
       <Tooltip label='profile'>
        <div 
        onClick={()=>handleClick('cart')}
        className='cursor-pointer'> 
          <FaUserAlt />
        </div>
       </Tooltip>
     </div>
    </nav>
  )
}

export default Navbar