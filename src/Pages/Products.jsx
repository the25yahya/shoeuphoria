import {React, useState, useEffect, useReducer} from 'react'
import AllProducts from '../Data/AllProducts.json'
import Product from '../Components/Product'
import {LuSettings2,LuListRestart} from 'react-icons/lu'
import {AiFillCaretDown} from 'react-icons/ai'
import {AiFillCaretUp} from 'react-icons/ai'
import {BiChevronRight,BiChevronLeft} from 'react-icons/bi'
import { useStateContext } from '../Contexts/ContextProvider'
import CheckboxExample from '../Components/CheckBox'
import RotatingBanner from '../Components/Banner'
import { colorChannel } from '@mui/system'
import { Tooltip } from '@chakra-ui/react'


const Products = () => {
  //context
  const {activeMenu,setActiveMenu,sortBy,setSortBy,gender,price,brands,shoeFeel,bestFor,color,setActiveBestFor,setActiveGender,setActivePrice,setActiveBrands,setActiveShoeFeel,setActiveColor,sneakers,setSneakers,cartReducer,cartInitialState,state,dispatch} = useStateContext();
  ////////////filtering sneakers
  const SelectMen = () => {
    const menSneakers = sneakers.filter(product => product.gender === 'Men');
    setSneakers(menSneakers);
  };
  const SelectWomen = () => {
    const womenSneakers = sneakers.filter(product => product.gender === 'Women');
    setSneakers(womenSneakers);
  };
  const SelectUnisex = () => {
    const womenSneakers = sneakers.filter(product => product.gender === 'Unisex');
    setSneakers(womenSneakers);
  };
  const SelectNike = () => {
    const womenSneakers = sneakers.filter(product => product.brand === 'Nike');
    setSneakers(womenSneakers);
  };
  const SelectJordan = () => {
    const womenSneakers = sneakers.filter(product => product.brand === 'Jordan');
    setSneakers(womenSneakers);
  };
  const SelectReebok = () => {
    const womenSneakers = sneakers.filter(product => product.brand === 'Reebok');
    setSneakers(womenSneakers);
  };
  const SelectBlack = () => {
    const womenSneakers = sneakers.filter(product => product.color === 'black');
    setSneakers(womenSneakers);
  };
  const SelectBlue = () => {
    const womenSneakers = sneakers.filter(product => product.color === 'blue');
    setSneakers(womenSneakers);
  };
  const SelectWhite = () => {
    const womenSneakers = sneakers.filter(product => product.color === 'white');
    setSneakers(womenSneakers);
  };
  const SelectBrown = () => {
    const womenSneakers = sneakers.filter(product => product.color === 'brown');
    setSneakers(womenSneakers);
  };
  const SelectGreen = () => {
    const womenSneakers = sneakers.filter(product => product.color === 'green');
    setSneakers(womenSneakers);
  };
  const SelectGray = () => {
    const womenSneakers = sneakers.filter(product => product.color === 'gray');
    setSneakers(womenSneakers);
  };
  const SelectMulti = () => {
    const womenSneakers = sneakers.filter(product => product.color === 'multi');
    setSneakers(womenSneakers);
  };
  const SelectPink = () => {
    const womenSneakers = sneakers.filter(product => product.color === 'pink');
    setSneakers(womenSneakers);
  };
  const SelectOrange = () => {
    const womenSneakers = sneakers.filter(product => product.color === 'orange');
    setSneakers(womenSneakers);
  };
  const SelectPurple = () => {
    const womenSneakers = sneakers.filter(product => product.color === 'purple');
    setSneakers(womenSneakers);
  };
  const SelectRed = () => {
    const womenSneakers = sneakers.filter(product => product.color === 'red');
    setSneakers(womenSneakers);
  };
  const SelectYellow = () => {
    const womenSneakers = sneakers.filter(product => product.color === 'yellow');
    setSneakers(womenSneakers);
  };
  const SelectNewest = () => {
    const womenSneakers = sneakers.filter(product => product.tag === 'New !');
    setSneakers(womenSneakers);
  };
  const SelectPriceRange25 = () => {
    const filteredSneakers = sneakers.filter(product => product.price >= 25 && product.price <= 50);
    setSneakers(filteredSneakers);
  };
  const SelectPriceRange50 = () => {
    const filteredSneakers = sneakers.filter(product => product.price >= 50 && product.price <= 100);
    setSneakers(filteredSneakers);
  };
  const SelectPriceRange100 = () => {
    const filteredSneakers = sneakers.filter(product => product.price >= 100 && product.price <= 150);
    setSneakers(filteredSneakers);
  };
  const SelectPriceRange150 = () => {
    const filteredSneakers = sneakers.filter(product => product.price >= 150);
    setSneakers(filteredSneakers);
  };

  
  const SelectReset = () => {
    const filteredSneakers = AllProducts
    setSneakers(filteredSneakers);
  };
  ////////////////////////////////////////////////////
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
  const Products = sneakers.map((clickedItem) =>{
    const addToCart = (item) =>{
      dispatch({ type : 'ADD_TO_CART', payload:clickedItem})
      console.log(state.cart);
    };
    return(
      <Product 
        onClick={addToCart}
        img={clickedItem.img1}
        img2={clickedItem.img2}
        price={clickedItem.price}
        key={clickedItem.id}
        name={clickedItem.name}
        brand={clickedItem.brand}
        tag={clickedItem.tag}
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
          <div onClick={SelectNewest} className={`bg-gray-100 z-10 absolute -right-10 top-8 p-5 rounded-l-xl border border-black border-r-0 border-t-0 ${sortBy ? '' : 'hidden'}`}>
            <p className='font-semibold hover:opacity-40 transition cursor-pointer'>Newest</p>
            <p className='font-semibold hover:opacity-40 transition cursor-pointer'>Price: High-Low</p>
            <p className='font-semibold hover:opacity-40 transition cursor-pointer'>Price: Low-High</p>
          </div>
        </div>
      </div>
      <div className='mt-10 flex relative products-parent'>
        <div className={`relative slide-left flex-col mx-10 border-t border-gray-300 pt-2 ${activeMenu ? '' : 'hidden'}`}>
         <Tooltip label='reset settings'>
          <div onClick={SelectReset} className='cursor-pointer absolute right-0 text-2xl'>
          <LuListRestart />
          </div>
         </Tooltip>
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
           <div className='cursor-pointer flex items-center mt-4 mb-1'>
           <div onClick={SelectMen}>
            <CheckboxExample/>
           </div> 
            <p>Men</p>
           </div>
           <div className='cursor-pointer flex items-center mb-1'>
           <div onClick={SelectWomen}>
            <CheckboxExample/>
           </div> 
            <p>Women</p>
           </div>
           <div className='flex items-center'>
           <div onClick={SelectUnisex}>
            <CheckboxExample/>
           </div> 
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
            <div onClick={SelectPriceRange25}>
            <CheckboxExample/>
           </div> 
             <p>$25-$50</p>
            </div>
            <div className='flex items-center mt-2'>
            <div onClick={SelectPriceRange50}>
            <CheckboxExample/>
           </div> 
             <p>$50-$100</p>
            </div>
            <div className='flex items-center mt-2'>
            <div onClick={SelectPriceRange100}>
            <CheckboxExample/>
           </div> 
             <p>$100-$150</p>
            </div>
           <div className='flex items-center mt-2'>
           <div onClick={SelectPriceRange150}>
            <CheckboxExample/>
           </div> 
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
           <div onClick={SelectNike} className='flex items-center mt-5'>
             <CheckboxExample/>
             <p>Nike</p>
           </div>
           <div onClick={SelectJordan} className='flex items-center mt-2'>
             <CheckboxExample/>
             <p>Jordan</p>
           </div>
           <div onClick={SelectReebok} className='flex items-center mt-2'>
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
              <div onClick={SelectBlack} className='w-8 h-8 bg-black rounded-full cursor-pointer'></div>
              <span>Black</span>
             </div>
             <div className='flex-col items-center'>
              <div onClick={SelectBlue} className='w-8 h-8 bg-blue-500 rounded-full cursor-pointer'></div>
              <span>Blue</span>
             </div>
             <div className='flex-col items-center'>
              <div onClick={SelectBrown} className='w-8 h-8 bg-yellow-900 rounded-full cursor-pointer'></div>
              <span>Brown</span>
             </div>
            </div>
            <div className='flex justify-between mt-5'>
             <div className='flex-col items-center'>
               <div onClick={SelectGreen} className='cursor-pointer w-8 h-8 bg-green-500 rounded-full'></div>
               <span>Green</span>
              </div>
              <div className='flex-col items-center'>
               <div onClick={SelectGray} className='w-8 h-8 bg-gray-500 rounded-full cursor-pointer'></div>
               <span>Gray</span>
              </div>
              <div className='flex-col items-center'>
               <div onClick={SelectMulti} className='cursor-pointer w-8 h-8 bg-gradient-to-r from-blue-200 to-purple-500 rounded-full'></div>
               <span>Multi</span>
              </div> 
            </div>
            <div className='flex justify-between mt-5'>
              <div className='flex-col items-center'>
               <div onClick={SelectPink} className='w-8 h-8 bg-pink-500 rounded-full cursor-pointer'></div>
               <span>Pink</span>
              </div>
              <div className='flex-col items-center'>
               <div onClick={SelectOrange} className='w-8 h-8 bg-orange-500 rounded-full cursor-pointer'></div>
               <span>Orange</span>
              </div>
              <div className='flex-col items-center'>
               <div onClick={SelectPurple} className='w-8 h-8 bg-purple-500 rounded-full cursor-pointer'></div>
               <span>Purple</span>
              </div> 
            </div>
            <div className='flex justify-between mt-5'>
             <div className='flex-col items-center'>
               <div onClick={SelectWhite} className='w-8 h-8 bg-white rounded-full cursor-pointer'></div>
               <span>White</span>
              </div>
              <div className='flex-col items-center'>
               <div onClick={SelectRed} className='w-8 h-8 bg-red-600 rounded-full cursor-pointer'></div>
               <span>Red</span>
              </div>
              <div className='flex-col items-center'>
               <div onClick={SelectYellow} className='w-8 h-8 bg-yellow-500 rounded-full cursor-pointer'></div>
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