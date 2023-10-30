import React from 'react'
import whites from '../assets/whites.png'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex justify-center mt-12'>
      <div className='mr-20 basis-2/6'>
        <h1 className='text-5xl mb-5'><span className='block mb-5'>TRENDY SHOES</span> TO LUXURY</h1>
        <p className='w-400 mb-10'>Finding your shoe has never been easier. Browse the best selection of famus fashion brand. that suit your style and preferences</p>
        <Link to='/Products'><button className='border bg-black border-transparent px-5 py-2 text-white rounded-lg transition hover:bg-transparent hover:text-black'>Check Now</button></Link>
        <div className='flex mt-10 mb-2'>
          <div className='mr-10 flex-col'>
            <p className='text-3xl font-semibold'>80 +</p>
            <p className='text-sm'>Unique Stye</p>
          </div>
          <div className='mr-10 flex-col'>
            <p className='text-3xl font-semibold'>25+</p>
            <p className='text-sm'>Brand Trusted</p>
          </div>
        </div>
        <div>
          <div className='flex justify-start my-3'>
            <span className='w-5 h-5 bg-custom-color5 rounded-full'></span>
            <span className='w-5 h-5 bg-orange-500 rounded-full'></span>
          </div>
          <p className='text-gray-600'>Best Shoes Discount <span className='font-bold text-black'>30% OFF</span> all Shoes!</p>
        </div>
      </div>
      <div className='bg-custom-color5 relative w-400 h-500 ml-20'>
          <p className="transform -rotate-90 absolute top-40 -left-12 text-slate-300 text-sm">MODEL-FD9748-001</p>
          <div className='absolute bg-orange-500 text-xl text-white w-200 text-center px-4 py-2 top-8 rounded-r-2xl'>
            LIMITED OFFER
          </div>
          <img
          className='w-400 absolute -bottom-16 -left-20'
          src= {whites}
          />
      </div>
    </div>
  )
}

export default Home