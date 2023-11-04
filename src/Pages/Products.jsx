import React from 'react'
import AllProducts from '../Data/AllProducts.json'
import Product from '../Components/Product'
import {LuSettings2} from 'react-icons/lu'
import {AiFillCaretDown} from 'react-icons/ai'
import {BiChevronRight,BiChevronLeft} from 'react-icons/bi'
import { useStateContext } from '../Contexts/ContextProvider'
import CheckboxExample from '../Components/CheckBox'

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
    <div className='w-full flex-col fade-in'>
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
      <div className='mt-10 flex relative'>
        <div className={`flex-col mx-10 border-t border-gray-300 pt-2 ${activeMenu ? '' : 'hidden'}`}>
         <div className='flex-col w-200 filter1'>
           <p>Lifestyle</p>
           <p>Running</p>
           <p>Training & Gym</p>
           <p>Shoes 100$ & Under</p>
           <p>Walking</p>
           <p>Basketball</p>
         </div>
         <div className='mt-3 flex-col border-t border-gray-300     pt-2'>
          <div className='flex items-center'>
            <p className='mr-50 font-semibold'>Gender</p>
            <p><AiFillCaretDown /></p>
          </div>
          <div className='flex-col hidden'>
           <div className='flex items-center mt-4 mb-1'>
            <CheckboxExample/>
            <p>Men</p>
           </div>
           <div className='flex items-center mb-1'>
            <CheckboxExample/>
            <p>Women</p>
           </div>
           <div className='flex items-center'>
            <CheckboxExample/>
            <p>Unisex</p>
           </div>
           </div>
         </div>
         <div className='flex-col border-t border-gray-300 mt-5 pt-2'>
           <div className='flex items-center'>
             <p className='mr-50 font-semibold'>Price</p>
             <p className='ml-4'><AiFillCaretDown /></p>
           </div>
           <div className='flex-col hidden'>
            <div className='flex items-center mt-5'>
             <CheckboxExample/>
             <p>$25-$50</p>
            </div>
            <div className='flex items-center mt-2'>
             <CheckboxExample/>
             <p>$50-$100</p>
            </div>
            <div className='flex items-center mt-2'>
             <CheckboxExample/>
             <p>$100-$150</p>
            </div>
           <div className='flex items-center mt-2'>
            <CheckboxExample/>
            <p>Over $150</p>
           </div>
           </div>
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