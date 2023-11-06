import {React, useState, useEffect} from 'react'
import AllProducts from '../Data/AllProducts.json'
import Product from '../Components/Product'
import {LuSettings2} from 'react-icons/lu'
import {AiFillCaretDown} from 'react-icons/ai'
import {AiFillCaretUp} from 'react-icons/ai'
import {BiChevronRight,BiChevronLeft} from 'react-icons/bi'
import { useStateContext } from '../Contexts/ContextProvider'
import CheckboxExample from '../Components/CheckBox'
import RotatingBanner from '../Components/Banner'
import { colorChannel } from '@mui/system'

const Products = () => {
  //context
  const {activeMenu,setActiveMenu,sortBy,setSortBy,gender,price,brands,shoeFeel,bestFor,color,setActiveBestFor,setActiveGender,setActivePrice,setActiveBrands,setActiveShoeFeel,setActiveColor} = useStateContext();
  
  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
  };
  const toggleGender = () => {
    setActiveGender(!gender);
  };
  const togglePrice = () => {
    setActivePrice(!price);
  };
  const toggleBrands = () => {
    setActiveBrands(!brands);
  };
  const toggleShoeFeel = () => {
    setActiveShoeFeel(!shoeFeel);
  };
  const toggleBestFor = () => {
    setActiveBestFor(!bestFor);
  };
  const toggleColor = () => {
    setActiveColor(!color);
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
      <RotatingBanner />
      <div className='filter-parent w-full flex items-center justify-between px-12 md:items-start'>
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
      <div className='mt-10 flex relative products-parent'>
        <div className={`slide-left flex-col mx-10 border-t border-gray-300 pt-2 ${activeMenu ? '' : 'hidden'}`}>
         <div className='flex-col w-200 filter1'>
           <p>Lifestyle</p>
           <p>Running</p>
           <p>Training & Gym</p>
           <p>Shoes 100$ & Under</p>
           <p>Walking</p>
           <p>Basketball</p>
         </div>
         <div className='mt-3 flex-col border-t border-gray-300     pt-2'>
          <div onClick={toggleGender} className='flex items-center cursor-pointer'>
            <p className='mr-50 font-semibold'>Gender</p>
            <p>{gender ? <AiFillCaretUp /> : <AiFillCaretDown />}</p>
          </div>
          <div className={`flex-col ${gender ? '' : 'hidden'}`}>
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
           <div onClick={togglePrice} className='flex items-center cursor-pointer'>
             <p className='mr-50 font-semibold'>Price</p>
             <p className='ml-4'>{price ? <AiFillCaretUp /> : <AiFillCaretDown />}</p>
           </div>
           <div className={`flex-col ${price ? '' : 'hidden' }`}>
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
         <div className='flex-col border-t border-gray-300 mt-5 pt-2'>
           <div onClick={toggleBrands} className='flex items-center cursor-pointer'>
             <p className='mr-50 font-semibold'>Brands</p>
             <p>{brands ? <AiFillCaretUp /> : <AiFillCaretDown />}</p>
           </div>
           <div className={`flex-col ${brands ? '' : 'hidden'}`}>
           <div className='flex items-center mt-5'>
             <CheckboxExample/>
             <p>Nike</p>
           </div>
           <div className='flex items-center mt-2'>
             <CheckboxExample/>
             <p>Jordan</p>
           </div>
           <div className='flex items-center mt-2'>
             <CheckboxExample />
             <p>Reebok</p>
           </div>
           </div>
         </div>
         <div className='flex-col border-t border-gray-300 mt-5 pt-2'>
          <div onClick={toggleShoeFeel} className='flex items-center cursor-pointer'>
            <p className='mr-50 font-semibold'>Shoe Feel</p>
            <p>{shoeFeel ? <AiFillCaretUp /> : <AiFillCaretDown />}</p>
          </div>
          <div className={`flex-col ${shoeFeel ? '' : 'hidden'}`}>
           <div className='flex items-center mt-4 mb-2'>
            <CheckboxExample/>
            <p>Agile & Flexible</p>
           </div>
           <div className='flex items-center mb-2'>
            <CheckboxExample/>
            <p>Springy & Neutral</p>
           </div>
           <div className='flex items-center'>
            <CheckboxExample/>
            <p>Cushionned & Supportive</p>
           </div>
           </div>
         </div>
         <div className='flex-col border-t border-gray-300 mt-5 pt-2'>
          <div onClick={toggleBestFor} className='flex items-center cursor-pointer'>
            <p className='mr-50 font-semibold'>Best For</p>
            <p>{bestFor ? <AiFillCaretUp /> : <AiFillCaretDown />}</p>
          </div>
          <div className={`flex-col ${bestFor ? '' : 'hidden'}`}>
           <div className='flex items-center mt-4 mb-2'>
            <CheckboxExample/>
            <p>Cold Weather</p>
           </div>
           <div className='flex items-center mb-2'>
            <CheckboxExample/>
            <p>Dry Weather Conditions</p>
           </div>
           <div className='flex items-center'>
            <CheckboxExample/>
            <p>Wet Weather Conditions</p>
           </div>
           </div>
         </div>
         <div className='flex-col border-t border-gray-300 mt-5 pt-2'>
           <div onClick={toggleColor} className='flex items-center cursor-pointer'>
              <p className='mr-50 font-semibold'>Color</p>
              <p>{color ? <AiFillCaretUp /> : <AiFillCaretDown />}</p>
           </div>
           <div className={`flex-col  mt-5 ${color ? '' : 'hidden'}`}>
            <div className='flex justify-between'>
             <div className='flex-col items-center'>
              <div className='w-8 h-8 bg-black rounded-full'></div>
              <span>Black</span>
             </div>
             <div className='flex-col items-center'>
              <div className='w-8 h-8 bg-blue-500 rounded-full'></div>
              <span>Blue</span>
             </div>
             <div className='flex-col items-center'>
              <div className='w-8 h-8 bg-yellow-900 rounded-full'></div>
              <span>Brown</span>
             </div>
            </div>
            <div className='flex justify-between mt-5'>
             <div className='flex-col items-center'>
               <div className='w-8 h-8 bg-green-500 rounded-full'></div>
               <span>Green</span>
              </div>
              <div className='flex-col items-center'>
               <div className='w-8 h-8 bg-gray-500 rounded-full'></div>
               <span>Gray</span>
              </div>
              <div className='flex-col items-center'>
               <div className='w-8 h-8 bg-gradient-to-r from-blue-200 to-purple-500 rounded-full'></div>
               <span>Multi</span>
              </div> 
            </div>
            <div className='flex justify-between mt-5'>
              <div className='flex-col items-center'>
               <div className='w-8 h-8 bg-pink-500 rounded-full'></div>
               <span>Pink</span>
              </div>
              <div className='flex-col items-center'>
               <div className='w-8 h-8 bg-orange-500 rounded-full'></div>
               <span>Orange</span>
              </div>
              <div className='flex-col items-center'>
               <div className='w-8 h-8 bg-purple-500 rounded-full'></div>
               <span>Purple</span>
              </div> 
            </div>
            <div className='flex justify-between mt-5'>
             <div className='flex-col items-center'>
               <div className='w-8 h-8 bg-white rounded-full'></div>
               <span>White</span>
              </div>
              <div className='flex-col items-center'>
               <div className='w-8 h-8 bg-red-600 rounded-full'></div>
               <span>Red</span>
              </div>
              <div className='flex-col items-center'>
               <div className='w-8 h-8 bg-yellow-500 rounded-full'></div>
               <span>Yellow</span>
              </div>
            </div>
           </div>
         </div>
        </div>
        <div className='shoes flex flex-wrap mx-8'>
          {Products}
        </div>
      </div>
    </div>
  )
}

export default Products