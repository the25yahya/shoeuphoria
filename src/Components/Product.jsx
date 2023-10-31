import React from 'react'

const Product = (props) => {
  return (
    <div className='flex-col relative w-300 h-500'>
        <img
        className='w-300'
        src={props.img}
         />
         <h2>{props.name}</h2>
         <p>{props.brand}</p>
         <div className='w-full flex justify-between items-center'>
            <div>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <p>{props.price}</p>
         </div>
         <p>{props.tag}</p>
    </div>
  )
}

export default Product