import React from 'react'
import AllProducts from '../Data/AllProducts.json'
import Product from '../Components/Product'
import {LuSettings2} from 'react-icons/lu'
import {AiFillCaretDown} from 'react-icons/ai'
import {BiChevronRight,BiChevronLeft} from 'react-icons/bi'
import { useStateContext } from '../Contexts/ContextProvider'

const Products = () => {
  //context
  const {activeMenu,setActiveMenu,sortBy,setSortBy} = useStateContext();
  
  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
  };
  const toggleSortBy = () =>{
    setSortBy(!sortBy)
  }
  //products
  const Products = AllProducts.map((item) =>{
    return(
      <Product 
        img={item.img1}
        img2={item.img2}
        price={item.price}
        key={item.id}
        name={item.name}
        brand={item.brand}
        tag={item.tag}
      />
    )
  })
  return (
    <div className='w-full flex-col'>
      <div className='bg-gray-200 w-full flex py-5 justify-center items-center border-b border-black mb-10'>
       <p className='mr-2'><BiChevronLeft/></p>
       <p className='mr-5 text-xl'>Members : Free shipping on orders 50$+</p>
       <p className='underline text-sm cursor-pointer'>Join Now</p>
       <p className='ml-2'><BiChevronRight /></p>
      </div>
      <div className='w-full flex items-start justify-between px-12'>
        <h2 className='text-2xl'>All Sneakers (110)</h2>
        <div className='flex items-center mr-5 relative'>
          <p
          className='mr-5 flex items-center cursor-pointer'
          onClick={toggleMenu}
           >
          {activeMenu ? 'Hide Filters' : 'Show Filters'}
          <span className='ml-2'><LuSettings2 /></span>
          </p>
          <p onClick={toggleSortBy} className='flex items-center cursor-pointer'>Sort By<span className='ml-2'><AiFillCaretDown /></span></p>
          <div className={`bg-gray-100 z-10 absolute -right-10 top-8 p-5 rounded-l-xl border border-black border-r-0 border-t-0 ${sortBy ? '' : 'hidden'}`}>
            <p className='font-semibold hover:opacity-40 transition cursor-pointer'>Newest</p>
            <p className='font-semibold hover:opacity-40 transition cursor-pointer'>Price: High-Low</p>
            <p className='font-semibold hover:opacity-40 transition cursor-pointer'>Price: Low-High</p>
          </div>
        </div>
      </div>
      <div className='mt-10  flex'>
        <div className={`flex-col mx-10 border ${activeMenu ? '' : 'hidden'}`}>
         <div className='flex-col w-200 font-semibold'>
           <p>Nike</p>
           <p>Reebok</p>
         </div>
        </div>
        <div className='flex flex-wrap mx-8'>
          {Products}
        </div>
      </div>
    </div>
  )
}

export default Products