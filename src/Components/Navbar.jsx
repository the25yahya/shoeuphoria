import React, {useState} from 'react'
import { FaShoppingBag, FaUserAlt } from 'react-icons/fa'
import SearchForm from './SearchFrom'
import { Link } from 'react-router-dom';
import { Tooltip } from '@chakra-ui/react';
import { useStateContext } from '../Contexts/ContextProvider';
import Cart from './Cart'
import User from './User'
import Toggle from './Toggle';
import DropDown from './DropDown'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  ///////////////////////////////////////
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };
  //nav cotext state
  const {isClicked,setIsClicked,handleClick} = useStateContext();
  return (
    <nav className='relative flex justify-around p-10 px-0 items-center lg:px-50'>
     {isClicked.cart && <Cart />}
     {isClicked.user && <User />}
     <Link to='/'><p className='font-semibold text-xl cursor-pointer'>SHOE<span className='text-orange-500'>UPHORIA</span></p></Link>
     <div className='items-center font-semibold hidden lg:flex'>
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
     <div onClick={toggleDropDown}>
     <div
      className={`lg:hidden menu-toggle ${isMenuOpen ? 'open' : ''} cursor-pointer p-2`}
      onClick={toggleMenu}
    >
      <div className="bar h-1 w-8 bg-black my-1 transition-transform transform rounded-xl"></div>
      <div className="bar h-1 ml-1 w-6 bg-black my-1 transition-opacity opacity-100 rounded-xl"></div>
      <div className="bar h-1 w-8 bg-black my-1 transition-transform transform rounded-xl"></div>
    </div>
     </div>
     <DropDown 
       toggleDropDown ={toggleDropDown}
       isOpen={isDropDownOpen}
     />
    </nav>
  )
}

export default Navbar