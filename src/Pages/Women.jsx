import {React, useState, useEffect, useReducer} from 'react'
import WomenProducts from '../Data/womenProducts.json'
import Product from '../Components/Product'
import {LuSettings2,LuListRestart} from 'react-icons/lu'
import {AiFillCaretDown} from 'react-icons/ai'
import {AiFillCaretUp} from 'react-icons/ai'
import { useStateContext } from '../Contexts/ContextProvider'
import CheckboxExample from '../Components/CheckBox'
import RotatingBanner from '../Components/Banner'
import { Tooltip } from '@chakra-ui/react'
import ProductDisplay from '../Components/ProductDisplay'

const Women = () => {
  //context
  const {activeMenu,setActiveMenu,sortBy,setSortBy,gender,price,brands,shoeFeel,bestFor,color,setActiveBestFor,setActiveGender,setActivePrice,setActiveBrands,setActiveShoeFeel,setActiveColor,womensneakers,setWomenSneakers,cartReducer,cartInitialState,state,dispatch,displayedProduct,setDisplayedProduct,productDisplay,setProductDisplay} = useStateContext();
  ////////////filtering sneakers
  const SelectNike = () => {
    const womenSneakers = womensneakers.filter(product => product.brand === 'Nike');
    setWomenSneakers(womenSneakers);
  };
  const SelectJordan = () => {
    const womenSneakers = womensneakers.filter(product => product.brand === 'Jordan');
    setWomenSneakers(womenSneakers);
  };
  const SelectReebok = () => {
    const womenSneakers = womensneakers.filter(product => product.brand === 'Reebok');
    setWomenSneakers(womenSneakers);
  };
  const SelectBlack = () => {
    const womenSneakers = womensneakers.filter(product => product.color === 'black');
    setWomenSneakers(womenSneakers);
  };
  const SelectBlue = () => {
    const womenSneakers = womensneakers.filter(product => product.color === 'blue');
    setWomenSneakers(womenSneakers);
  };
  const SelectWhite = () => {
    const womenSneakers = womensneakers.filter(product => product.color === 'white');
    setWomenSneakers(womenSneakers);
  };
  const SelectBrown = () => {
    const womenSneakers = womensneakers.filter(product => product.color === 'brown');
    setWomenSneakers(womenSneakers);
  };
  const SelectGreen = () => {
    const womenSneakers = womensneakers.filter(product => product.color === 'green');
    setWomenSneakers(womenSneakers);
  };
  const SelectGray = () => {
    const womenSneakers = womensneakers.filter(product => product.color === 'gray');
    setWomenSneakers(womenSneakers);
  };
  const SelectMulti = () => {
    const womenSneakers = womensneakers.filter(product => product.color === 'multi');
    setWomenSneakers(womenSneakers);
  };
  const SelectPink = () => {
    const womenSneakers = womensneakers.filter(product => product.color === 'pink');
    setWomenSneakers(womenSneakers);
  };
  const SelectOrange = () => {
    const womenSneakers = womensneakers.filter(product => product.color === 'orange');
    setWomenSneakers(womenSneakers);
  };
  const SelectPurple = () => {
    const womenSneakers = womensneakers.filter(product => product.color === 'purple');
    setWomenSneakers(womenSneakers);
  };
  const SelectRed = () => {
    const womenSneakers = womensneakers.filter(product => product.color === 'red');
    setWomenSneakers(womenSneakers);
  };
  const SelectYellow = () => {
    const womenSneakers = womensneakers.filter(product => product.color === 'yellow');
    setWomenSneakers(womenSneakers);
  };
  const SelectNewest = () => {
    const womenSneakers = womensneakers.filter(product => product.tag === 'New !');
    setWomenSneakers(womenSneakers);
  };
  const SelectPriceRange25 = () => {
    const filteredSneakers = womensneakers.filter(product => product.price >= 25 && product.price <= 50);
    setWomenSneakers(filteredSneakers);
  };
  const SelectPriceRange50 = () => {
    const filteredSneakers = womensneakers.filter(product => product.price >= 50 && product.price <= 100);
    setWomenSneakers(filteredSneakers);
  };
  const SelectPriceRange100 = () => {
    const filteredSneakers = womensneakers.filter(product => product.price >= 100 && product.price <= 150);
    setWomenSneakers(filteredSneakers);
  };
  const SelectPriceRange150 = () => {
    const filteredSneakers = womensneakers.filter(product => product.price >= 150);
    setWomenSneakers(filteredSneakers);
  };

  
  const SelectReset = () => {
    const filteredSneakers = WomenProducts
    setWomenSneakers(filteredSneakers);
  };
  ////////////////////////////////////////////////////
  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
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
  const addToCart = () =>{
    dispatch({ type : 'ADD_TO_CART', payload:displayedProduct})
  };
  //products
  const Products = womensneakers.map((clickedItem) =>{
    const addToCart = () =>{
      dispatch({ type : 'ADD_TO_CART', payload:clickedItem})
      console.log(state.cart);
    };
    const handleDisplayedProduct = () => {
      setDisplayedProduct(clickedItem);
      setProductDisplay(true);
    } 
    return(
        <Product
        onImgClick={handleDisplayedProduct}
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
      {productDisplay ? (
        <div>
          <ProductDisplay
          onClick={addToCart}
          img1={displayedProduct.img1}
          img2={displayedProduct.img2}
          img3={displayedProduct.img3}
          img4={displayedProduct.img4}
          img5={displayedProduct.img5}
          price={displayedProduct.price}
          brand={displayedProduct.brand}
          brandImg={displayedProduct.brandImg}
          gender={displayedProduct.gender}
          description={displayedProduct.description}
          name={displayedProduct.name}

           />
        </div>
      ) : (
        <div>
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
      )}
      
    </div>
  )
}

export default Women;