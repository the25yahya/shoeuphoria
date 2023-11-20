import React, { useReducer } from 'react'
import { AiFillQuestionCircle } from 'react-icons/ai'
import { Tooltip } from '@chakra-ui/react'
import SuggestionsProducts from '../Data/Suggestions.json'
import Product from '../Components/Product'
import { useStateContext } from '../Contexts/ContextProvider';
import BagProduct from '../Components/BagProduct'


const Cart = (props) => {
  const {  state,dispatch } = useStateContext();
  const AddedProducts = state.cart;

  const CartProducts = AddedProducts.map((item) =>{
    const removeFromCart = () =>{
      dispatch({type:'REMOVE_FROM_CART', payload:item.id })
    }
    return(
      <BagProduct 
        onClick={removeFromCart}
        img1={item.img1}
        key={item.id}
        name={item.name}
        gender={item.gender}
        price={item.price}
      />
    )
  })
  const Products = SuggestionsProducts.map((item) =>{
    const addToCart = () =>{
      dispatch({ type : 'ADD_TO_CART', payload:item})
      console.log(state.cart);
    };
    return(
      <Product 
        onClick={addToCart}
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
       </div>
       {AddedProducts.length === 0 ? (
        <p className='ml-2 mt-2'>There are no items in your bag</p>
      ) : (
        /* Render other content when the array is not empty */
       <div>{CartProducts}</div>
      )}
      </div>
      <div className='pb-5 w-350 summary'>
        <h2 className='text-3xl mb-5'>Summary</h2>
        <div className='flex-col'>
          <div className='flex items-center justify-between'>
            <p className='flex items-center font-semibold'>subtotal <Tooltip label='The subtotal reflects the total price of your order before any applicable discounts. It does not include shipping costs and taxes.'><span className='cursor-pointer ml-2'><AiFillQuestionCircle/></span></Tooltip></p>
           <p>${state.subtotal}</p>
         </div>
         <div className='flex items-center justify-between mt-4'>
          <p className='font-semibold'>Estimated Shipping & Handling</p>
          <p>{state.subtotal < 150 ? (
        <p>$0.00</p>
      ) : (
        /* Render other content when the array is not empty */
       <p>$30.00</p>
      )}</p>
         </div>
         <div className='flex items-center justify-between mt-4'>
            <p className='flex items-center font-semibold'>Estimated Tax <Tooltip label='The actual tax will be calculated based on the applicable state and local sales taxes when your order is shipped'><span className='cursor-pointer ml-2'><AiFillQuestionCircle/></span></Tooltip></p>
           <p>_</p>
         </div>
        </div>
        <div className='flex items-center justify-between mt-7 border-t border-gray-400 pt-5 border-b pb-7'>
          <p className='font-semibold'>Total</p>
          {state.subtotal < 150 ? (
        <p>${state.subtotal}</p>
      ) : (
        /* Render other content when the array is not empty */
       <div>${state.subtotal + 30}</div>
      )}
        </div>
        {state.cart.length > 0 ? (<button className='ml-12 mt-10 w-250 px-20 py-3 bg-white rounded-xl text-black font-semibold transition hover:bg-transparent '>Chekout</button>
           ) :<button className='ml-12 mt-10 w-250 px-20 py-3 bg-zinc-200 rounded-xl text-gray-500 font-semibold'>Chekout</button>}
           {state.cart.length > 0 ? (<button className='ml-12 mt-3 w-250 px-20 py-3 bg-white rounded-xl text-gray-500 font-semibold italic transition hover:bg-transparent'>
          <span className='text-blue-900'>Pay</span>
          <span className='text-cyan-500 font-bold'>Pal</span>
        </button>
           ) :<button className='ml-12 mt-3 w-250 px-20 py-3 bg-zinc-200 rounded-xl text-gray-500 font-semibold italic'>
          <span className='text-blue-900'>Pay</span>
          <span className='text-cyan-500 font-bold'>Pal</span>
        </button>}
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