import {React, useState}from 'react'

const Product = (props) => {
  const [imgSrc, setImgSrc] = useState(props.img);
  const handleMouseEnter = () => {
    setImgSrc(props.img2);
  }
    const handleMouseLeave = () => {
    setImgSrc(props.img);
  }
  return (
    <div className='flex-col relative w-300 h-500 mr-8'>
        <img
        className='w-300 cursor-pointer' 
            src={imgSrc}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
         />
         <h2 className='mt-2 font-semibold text-lg'>{props.name}</h2>
         <div className='w-full flex justify-between items-center'>
         <p className='font-bold opacity-60 text-sm my-1'>{props.brand}</p>
            <p className='text-lg font-semibold font-mono mr-3'>{props.price}</p>
         </div>
         <p className='absolute rotate-90 bg-black text-white rounded-r-xl px-3 py-1 top-4 left-2 overflow-hidden'>{props.tag}</p>
    </div>
  )
}

export default Product