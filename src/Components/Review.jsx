import React from 'react'
import {BiSolidCommentCheck} from 'react-icons/bi'

const Review = (props) => {
  return (
    <div className='w-350 h-250 border border-gray-400 py-4 px-5 mx-2 flex-col items-start justify-between rounded-lg mb-10'>
        <div className='text-3xl'><BiSolidCommentCheck /></div>
        <p className='w-300 font-bold text-sm my-3'>{props.reviewContent}</p>
        <div className='flex items-center'>
            <img 
                src={props.user}
                className='w-12 h-12 rounded-full mr-2'
            />
            <div className='flex-col items-center  text-start'>
                <p className='font-bold'>{props.userName}</p>
                <p className='text-gray-500 text-sm ml-1'>{props.userOcupation}</p>
            </div>
        </div>
    </div>
  )
}

export default Review