import React, { useReducer } from 'react'
import { AiFillQuestionCircle } from 'react-icons/ai'
import { Tooltip } from '@chakra-ui/react'
import HomeProducts from '../Data/HomeProducts.json'
import Product from '../Components/Product'
import { useStateContext } from '../Contexts/ContextProvider';


const Cart = (props) => {
  const { cartReducer,cartInitialState, state } = useStateContext();
  console.log(state);
  const Products = HomeProducts.map((item) =>{
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
  <div> 
    <div className='justify-center mt-10 fade-in cart sm:flex'>
      <div className='bag w-600 flex-col'>
       <div>
       <h2 className='text-3xl'>Bag</h2>
        <p className='ml-2 mt-2'>There are no items in your bag</p>
       </div>
      </div>
      <div className='pb-5 w-350 summary'>
        <h2 className='text-3xl mb-5'>Summary</h2>
        <div className='flex-col'>
          <div className='flex items-center justify-between'>
            <p className='flex items-center font-semibold'>subtotal <Tooltip label='The subtotal reflects the total price of your order before any applicable discounts. It does not include shipping costs and taxes.'><span className='cursor-pointer ml-2'><AiFillQuestionCircle/></span></Tooltip></p>
           <p>_</p>
         </div>
         <div className='flex items-center justify-between mt-4'>
          <p className='font-semibold'>Estimated Shipping & Handling</p>
          <p>$0.00</p>
         </div>
         <div className='flex items-center justify-between mt-4'>
            <p className='flex items-center font-semibold'>Estimated Tax <Tooltip label='The actual tax will be calculated based on the applicable state and local sales taxes when your order is shipped'><span className='cursor-pointer ml-2'><AiFillQuestionCircle/></span></Tooltip></p>
           <p>_</p>
         </div>
        </div>
        <div className='flex items-center justify-between mt-7 border-t border-gray-400 pt-5 border-b pb-7'>
          <p className='font-semibold'>Total</p>
          <p>_</p>
        </div>
        <button className='ml-12 mt-10 w-250 px-20 py-3 bg-zinc-200 rounded-xl text-gray-500 font-semibold'>Chekout</button>
        <button className='ml-12 mt-3 w-250 px-20 py-3 bg-zinc-200 rounded-xl text-gray-500 font-semibold italic'>
          <span className='text-blue-900'>Pay</span>
          <span className='text-cyan-500 font-bold'>Pal</span>
        </button>
      </div>
    </div>
    <div className='mt-50'>
      <h1 className='mx-12 text-2xl font-semibold italic'>You might Like :</h1>
      <div className='flex py-10 px-12 flex-wrap'>
        {Products}
      </div>
    </div>
  </div>  
  )
}

export default Cart