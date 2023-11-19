import React, {useState} from 'react'
import { FaShoppingBag, FaUserAlt } from 'react-icons/fa'
import SearchForm from './SearchFrom'
import { Link } from 'react-router-dom';
import { Tooltip } from '@chakra-ui/react';
import { useStateContext } from '../Contexts/ContextProvider';
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
  const {state,setProductDisplay} = useStateContext();
  const ProductDisplayOff = () =>{
    setProductDisplay(false);
  }
  return (
    <nav className='relative flex justify-around p-10 px-0 items-center lg:px-50'>
     <Link to='/'><p className='font-semibold text-xl cursor-pointer'>SHOE<span className='text-orange-500'>UPHORIA</span></p></Link>
     <div className='items-center font-semibold hidden lg:flex'>
       <Link to='/'><p className='pr-8 hover:text-orange-500 cursor-pointer transition'>Home</p></Link>
       <Link to='/Men'><p className='pr-8 hover:text-orange-500 cursor-pointer transition'>Men</p></Link>
       <Link to='/Women'><p className='pr-8 hover:text-orange-500 cursor-pointer transition'>Women</p></Link>
       <Link to='/Products'><p onClick={ProductDisplayOff} className='pr-8 hover:text-orange-500 cursor-pointer transition'>Products</p></Link>
       <SearchForm />
       <Link to='/cart'>
         <Tooltip label='Cart'>
           <div
            className='px-3 pr-8 cursor-pointer relative'>
            {state.cart.length > 0 ? (
             <span className='absolute text-sm -top-4 left-6 bg-red-600 text-white rounded-full px-1.5'>
           {state.cart.length}
          </span>
           ) : null}
           <FaShoppingBag />
           </div>
         </Tooltip>
       </Link>
       <Link to='/user'>
          <Tooltip label='profile'>
            <div 
             className='cursor-pointer'> 
              <FaUserAlt />
            </div>
       </Tooltip>
       </Link>
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