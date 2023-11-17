import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { useStateContext } from '../Contexts/ContextProvider'
import { TbLetterX } from "react-icons/tb";

const ProductDisplay = (props) => {
  const {productDisplay,setProductDisplay} = useStateContext();
  const ProductDisplayOff = () =>{
    setProductDisplay(false);
  }
  return (
    <div className='flex top-2 fixed w-1000 left-30 shadow-xl z-40 bg-gray-100 p-5'>
      <p onClick={ProductDisplayOff} className='absolute right-5 top-3 text-xl'><TbLetterX /></p>
      <div className='mr-5'>
        <img className='w-500' src={props.img1}/>
        <div className='flex w-500 flex-wrap mt-5'>
          <img className='w-100 mr-5' src={props.img2}/>
          <img className='w-100 mr-5' src={props.img3}/>
          <img className='w-100 mr-5' src={props.img4}/>
          <img className='w-100 mr-5' src={props.img5}/>
        </div>
      </div>
      <div>
       <div>
        <img className='w-8 rounded-full' src={props.brandImg}/>
        <p>{props.brand}</p>
       </div>
       <p>{props.name}</p>
       <div></div>
       <p>{props.price}</p>
       <p>{props.description}</p>
       <div>
          <p>Size. <span>EU</span><span>{props.gender}</span></p>
         <div>
           <button>40.5</button>
           <button>41</button>
           <button>42</button>
           <button>43</button>
           <button>43.5</button>
           <button>44</button>
           <button>44.5</button>
           <button>45</button>
           <button>46</button>
         </div>
       </div>
       <div>
        <button><AiOutlineShoppingCart/> Add to Cart</button>
        <div><FaRegHeart /></div>
       </div>
       <p>Free Delivery on orders over $150.00</p>
      </div>
    </div>
  )
}

export default ProductDisplay