import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { useStateContext } from '../Contexts/ContextProvider'
import { TbLetterX } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
import { BiSolidDislike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";

const ProductDisplay = (props) => {
  const {productDisplay,setProductDisplay,displayedProduct} = useStateContext();
  const ProductDisplayOff = () =>{
    setProductDisplay(false);
  }
  return (
    <div className='flex py-10 px-20'>
      <div className='mr-5'>
        <p className='text-gray-600 flex items-center'><span onClick={ProductDisplayOff} className='text-lg hover:text-orange-500 transition cursor-pointer'>Products</span> <span className='font-bold mx-2'><GoDotFill/></span> <span>{props.name}</span></p>
        <div className='border mt-5 rounded-lg'><img className='w-600' src={props.img1}/></div>
        <div className='flex w-500 flex-wrap mt-5'>
          <img className='w-100 mr-5' src={props.img2}/>
          <img className='w-100 mr-5' src={props.img3}/>
          <img className='w-100 mr-5' src={props.img4}/>
          <img className='w-100 mr-5' src={props.img5}/>
        </div>
      </div>
      <div className='mt-10 ml-10'>
       <div className='flex items-center'>
        <img className='w-7 rounded-full mr-2' src={props.brandImg}/>
        <p className='font-semibold'>{props.brand}</p>
       </div>
       <p className='text-xl font-semibold my-3'>{displayedProduct.name}</p>
       <div></div>
       <p className='text-4xl font-semibold my-3'>${props.price}</p>
       <p className='py-4 w-500 text-gray-600'>{props.description}</p>
       <div>
          <p><span className='font-semibold text-lg mr-1'>Size.</span> <span>EU</span> <span>{props.gender}</span></p>
         <div className='my-2'>
           <button className='px-5 py-1 m-2 border-gray-600 rounded-sm border cursor-pointer hover:bg-black hover:text-white transition'>40.5</button>
           <button className='px-5 py-1 m-2 border-gray-600 rounded-sm border cursor-pointer hover:bg-black hover:text-white transition'>41</button>
           <button className='px-5 py-1 m-2 border-gray-600 rounded-sm border cursor-pointer hover:bg-black hover:text-white transition'>42</button>
           <button className='px-5 py-1 m-2 border-gray-600 rounded-sm border cursor-pointer hover:bg-black hover:text-white transition'>43</button>
           <button className='px-5 py-1 m-2 border-gray-600 rounded-sm border cursor-pointer hover:bg-black hover:text-white transition'>43.5</button>
           <button className='px-5 py-1 m-2 border-gray-600 rounded-sm border cursor-pointer hover:bg-black hover:text-white transition'>44</button>
           <button className='px-5 py-1 m-2 border-gray-600 rounded-sm border cursor-pointer hover:bg-black hover:text-white transition'>44.5</button>
           <button className='px-5 py-1 m-2 border-gray-600 rounded-sm border cursor-pointer hover:bg-black hover:text-white transition'>45</button>
           <button className='px-5 py-1 m-2 border-gray-600 rounded-sm border cursor-pointer hover:bg-black hover:text-white transition'>46</button>
         </div>
         <p className='text-amber-500 my-2'>Size Guide</p>
       </div>
       <div className='flex items-center'>
         <button className='w-400 bg-black text-white flex items-center justify-center py-1.5 rounded-lg mr-3'><AiOutlineShoppingCart/> Add to Cart</button>
         <div className='border p-2.5 rounded-lg bg-zinc-200 mr-2 cursor-pointer'><BiSolidLike /></div>
         <div className='border p-2.5 rounded-lg bg-zinc-200 cursor-pointer'><BiSolidDislike /></div>
       </div>
       <p className='mt-5'>Free Delivery on orders over $150.00</p>
      </div>
    </div>
  )
}

export default ProductDisplay