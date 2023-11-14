import React from 'react'
import { BsTrash } from 'react-icons/bs'

const BagProduct = (props) => {
  return (
    <div className='flex justify-between items-start my-7'>
     <div className='flex items-center'>
     <img
        className='w-100 mr-5'
        src={props.img1}
     />
     <div className='flex-col items-center'>
      <p className='italic font-semibold'>{props.name}</p>
      <p><span>{props.gender}</span> shoes</p>
      <span>Quantity : 1</span>
      <div className='mt-2 cursor-pointer'>
      <BsTrash />
     </div>
     </div>
     </div>
     <div className='mr-20'>
        {props.price}
     </div>
    </div>
  )
}

export default BagProduct