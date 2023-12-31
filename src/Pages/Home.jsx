import React from 'react'
import whites from '../assets/whites.png'
import { Link } from 'react-router-dom';
import airmax3 from '../assets/airmax3.png'
import {BsChevronDown, BsHeadset} from 'react-icons/bs'
import {LuSettings2} from 'react-icons/lu'
import Product from '../Components/Product';
import shoes from '../Data/HomeProducts.json'
import { Button } from '@chakra-ui/react';
import {GrPowerCycle} from 'react-icons/gr'
import {SiFsecure} from 'react-icons/si'
import Review from '../Components/Review';
import Reviews from '../Data/Reviews.json';
import { useStateContext } from '../Contexts/ContextProvider'



const Home = () => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })}
  const {state,dispatch} = useStateContext();
  const Products = shoes.map((clickedItem) =>{
    const addToCart = () =>{
      dispatch({ type : 'ADD_TO_CART', payload:clickedItem})
      console.log(state.cart);
    };
    return(
      <Product 
        onClick={addToCart}
        img={clickedItem.img1}
        img2={clickedItem.img2}
        price={clickedItem.price}
        key={clickedItem.id}
        name={clickedItem.name}
        brand={clickedItem.brand}
        tag={clickedItem.tag}
      />
    )
  })
  const ClientsReviews = Reviews.map((item) =>{
    return(
      <Review 
      user={item.user}
      key={item.userName}
      userName={item.userName}
      userOcupation={item.userOcupation}
      reviewContent={item.reviewContent}
      />
    )
  })
  return (
   <div className='mt-12 fade-in'>
    <div className='flex justify-center hero'>
      <div className='basis-2/6 hero1'>
        <h1 className='text-5xl mb-5 intro'><span className='block mb-5'>TRENDY SHOES</span> TO LUXURY</h1>
        <p className='w-400 mb-10 intro2'>Finding your shoe has never been easier. Browse the best selection of famus fashion brand. that suit your style and preferences</p>
        <Link to='/Products'><button className='border bg-black border-transparent px-5 py-2 text-white rounded-lg transition hover:bg-transparent hover:text-black'>Check Now</button></Link>
        <div className='flex mt-10 mb-2 intro3'>
          <div className='mr-10 flex-col'>
            <p className='text-3xl font-semibold'>80 +</p>
            <p className='text-sm'>Unique Stye</p>
          </div>
          <div className='mr-10 flex-col'>
            <p className='text-3xl font-semibold'>25+</p>
            <p className='text-sm'>Brand Trusted</p>
          </div>
        </div>
        <div className='intro4'>
          <div className='flex my-3'>
            <span className='w-5 h-5 bg-custom-color5 rounded-full'></span>
            <span className='w-5 h-5 bg-orange-500 rounded-full'></span>
          </div>
          <p className='text-gray-600'>Best Shoes Discount <span className='font-bold text-black'>30% OFF</span> all Shoes!</p>
        </div>
      </div>
      <div className='bg-custom-color5 relative w-400 h-500 ml-20 hero2'>
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
    <div className='mt-50 mb-20 flex justify-center section2'>
     <h1 className='text-5xl w-400 font-bold'>New Style For latest Collections</h1>
     <p className='pl-20 w-500 font-semibold opacity-70'>Discover our latest collection of clothing, shoes, and accessories that are perfect for any occasion, From casual wear to formal attire, we have everything you need to revamp your wardrobe and stay on trend</p>
    </div>
    <div className='flex justify-center items-center pb-20 section4'>
      <div className='h-420 bg-gray-200 relative w-500 overflow-hidden mr-5 banner1'>
        <img 
          className='w-320 absolute -bottom-5 -right-2 transform scale-x-[-1]'
          src={airmax3}
        />
        <p className='bg-orange-500 -rotate-90 absolute top-5 rounded-l-lg px-5 right-4 py-2 text-white'>NEW</p>
        <div className='flex-col p-10'>
         <h1 className='w-250 mb-2 font-semibold text-4xl'>NEW RUNNING STYLE</h1>
          <p className='text-gray-500 mb-10'>NOW AVAILABLE</p>
          <button className='border bg-black border-transparent px-5 py-2 text-white text-sm rounded-2xl transition hover:bg-transparent hover:text-black'>Check Now</button>
        </div>
      </div>
      <div className='flex-col'>
        <div className='bg-gray-200 w-500 h-200 relative mb-5 banner2'>
         <div className='px-8 py-10'>
          <h1 className='w-250 text-4xl mb-5 font-thin'>SPORTS ESSENTIALS</h1>
          <p className='text-gray-500'>MOVE AND EXPLORE</p>
         </div>
         <img src={whites} className='absolute w-300 right-3 -bottom-10'/>
         <p className='bg-orange-500 absolute top-5 rounded-l-lg px-4 right-0 py-2 text-sm text-white'>unique</p>
        </div>
        <div className='bg-orange-500 w-500 h-200 text-white py-5 px-8 relative banner3'>
         <h1 className='text-5xl'><span className='block'>Get</span> 15% Off</h1>
         <p className='font-thin mt-3 w-200'>For All products in our store or website</p>
         <p className='bg-white -rotate-90 absolute top-6 rounded-l-lg px-5 right-4 py-2 text-orange-500 overflow-hidden font-bold'>stylish</p>
        </div>
      </div>
    </div>
    <div className='px-10 pb-0 section5 lg:px-50'>
      <h1 className='text-3xl font-thin mb-5'>Our Products</h1>
      <div className='flex w-full mt-10 productsHome justify-start'>
        {Products}
      </div>
      <div className='w-full h-30 text-center'>
      <Link to='/products'>
        <button onClick={scrollToTop} className='border transition text-sm border-black px-5 py-1 rounded-xl hover:border-transparent hover:bg-black hover:text-white cursor-pointer'>See full products</button>
      </Link>
      </div>
    </div>
    <div className='flex px-10 justify-center mt-50 flex-wrap items-center'>
      <div className='ml-5'>
       <h1 className='text-4xl mb-2'>Why trust us?</h1>
       <p className='w-250 text-gray-500'>At our shoe store, we treat each customer with unparalleled care and attention</p>
      </div>
      <div className='border border-gray-400 p-4 m-5 rounded-lg'>
       <span className='text-3xl'><GrPowerCycle/></span>
       <h2 className='mt-4 text-lg font-semibold'>Free Returns</h2>
       <p className='text-sm w-200 text-gray-600 mt-3'>Our customers can return or exchange their purchase hassle-free. with our easy to use return policy.</p>
      </div>
      <div className='border border-gray-400 p-4 m-5 h-200 rounded-lg'>
       <span className='text-3xl'><SiFsecure/></span>
       <h2 className='mt-4 text-lg font-semibold'>Secure Payment</h2>
       <p className='text-sm w-200 text-gray-600 mt-3'>We offer a secure checkout process that protects our customers personal and financial information</p>
      </div>
      <div className='border border-gray-400 p-4 m-5 rounded-lg'>
       <span className='text-3xl'><BsHeadset/></span>
       <h2 className='mt-4 text-lg font-semibold'>customer Support</h2>
       <p className='text-sm w-200 text-gray-600 mt-3'>Our customer support team is available to help customers with any question or concerns they may have</p>
      </div>
    </div>
    <div className='mt-50 px-0 sm:px-10 lg:px-50'>
      <h1 className='text-3xl font-thin m-3'>See What Our Clients Have To Say!</h1>
      <p className='m-5 mt-0 text-gray500'>check out our shoes and find your perfect pair today!</p>
      <div className='w-full flex flex-wrap'>
        {ClientsReviews}
      </div>
    </div>
    </div> 
  )
}

export default Home