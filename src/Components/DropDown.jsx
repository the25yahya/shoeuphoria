import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { FaShoppingBag, FaUserAlt } from 'react-icons/fa'
import {BsChevronRight} from 'react-icons/bs'
import { useStateContext } from '../Contexts/ContextProvider';
import { Link } from 'react-router-dom';

const DropDown = (props) => { 
  return (
    <div className={`slide-right dropdown fixed top-0 w-300 bg-white p-5 z-20 flex items-start justify-star h-screen shadow-2xl lg:hidden flex-col ${props.isOpen ? '' : 'hidden'}`}>
      <div onClick={props.toggleDropDown} className='absolute right-5 text-lg cursor-pointer transition hover:opacity-30'>
       <FaTimes />
      </div>
      <div className='text-2xl ml-3 w-full mt-5 mb-20'>
        <h2>Menu</h2>
        <Link to='/'>
          <p onClick={props.toggleDropDown} className='flex  items-center justify-between'>Home <span className='mt-1 mr-5 text-xl font-bold'><BsChevronRight /></span></p>
        </Link>
        <Link to='/Men'>
          <p onClick={props.toggleDropDown} className='flex  items-center justify-between'>Men <span className='mt-1 mr-5 text-xl font-bold'><BsChevronRight /></span></p>
        </Link>
        <Link to='/Women'>
          <p onClick={props.toggleDropDown} className='flex  items-center justify-between'>Women <span className='mt-1 mr-5 text-xl font-bold'><BsChevronRight /></span></p>
        </Link>
        <Link to='/Products'>
         <p onClick={props.toggleDropDown} className='flex  items-center justify-between'>Products <span className='mt-1 mr-5 text-xl font-bold'><BsChevronRight /></span></p>
        </Link>
        <Link to='/Brands'>
         <p onClick={props.toggleDropDown} className='flex  items-center justify-between'>Brands <span className='mt-1 mr-5 text-xl font-bold'><BsChevronRight /></span></p>
        </Link>
      </div>
      <div className='w-full ml-2'>
        <Link to='/cart'>
        <div onClick={props.toggleDropDown}  className='flex'>
          <div className='mr-5 mt-0.5 1 text-xl'><FaShoppingBag /></div>
          <p>Bag</p>
        </div>
        </Link>
        <Link to='/user'>
        <div onClick={props.toggleDropDown}  className='flex'>
          <div className='mr-5 mt-0.5 1 text-xl'><FaUserAlt /></div>
          <p>User</p>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default DropDown