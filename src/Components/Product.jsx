import {React, useState}from 'react'
import {FaShoppingBag} from 'react-icons/fa'

const Product = (props) => {
  const [imgSrc, setImgSrc] = useState(props.img);
  const handleMouseEnter = () => {
    setImgSrc(props.img2);
  }
    const handleMouseLeave = () => {
    setImgSrc(props.img);
  }
  return (
    <div className='mb-10 flex-col relative w-300 h-410 mr-5 product'>
        <div className='relative'><img
        className='w-320 cursor-pointer' 
            src={imgSrc}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
         />
        <div onClick={props.onClick} className='w-7 h-7 bg-white rounded-full flex p-2 items-center absolute top-64 right-4 cursor-pointer bag'><FaShoppingBag /></div></div>
         <h2 className='mt-2 font-semibold text-lg'>{props.name}</h2>
         <div className='w-full flex justify-between items-center'>
         <p className='font-bold opacity-60 text-sm my-1'>{props.brand}</p>
            <p className='text-lg font-semibold font-mono mr-3'>${props.price}</p>
         </div>
         <p className='absolute rotate-90 bg-black text-white rounded-r-xl px-3 py-1 top-4 left-2 overflow-hidden'>{props.tag}</p>
    </div>
  )
}

export default Product