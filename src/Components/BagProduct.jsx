import React from 'react'
import { BsTrash } from 'react-icons/bs'

const BagProduct = (props) => {
  return (
    <div className='flex items-start'>
     <img
        src={props.img1}
     />
     <div className='flex-col items-center'>
      <p>{props.name}</p>
      <p><span>{props.gender}</span> shoes</p>
      <span>Quantity : 1</span>
      <div>
      <BsTrash />
     </div>
     </div>
     <div>
        {props.price}
     </div>
    </div>
  )
}

export default BagProduct