import React,{useState} from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { useStateContext } from '../Contexts/ContextProvider'
import { TbLetterX } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
import { BiSolidDislike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import SizeBtn from './SizeBtn';



const ProductDisplay = (props) => {
  const {productDisplay,setProductDisplay,displayedProduct} = useStateContext();
  const ProductDisplayOff = () =>{
    setProductDisplay(false);
  }
  //
  const [selectedImage, setSelectedImage] = useState(props.img1);
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  //
  const [selected,setSelected] = useState(false);
  const handleSelected = () =>{
    setSelected(!selected);
  }
  return (
    <div className='flex py-10 px-20 product-display'>
      <div className='mr-5 div1'>
        <p className='text-gray-600 flex items-center'><span onClick={ProductDisplayOff} className='text-lg hover:text-orange-500 transition cursor-pointer'></span> <span className='font-bold mx-2'><GoDotFill/></span> <span>{props.name}</span></p>
        <div className='border mt-5 rounded-lg main-img'><img className='w-600' src={selectedImage}/></div>
        <div className='flex w-500 flex-wrap mt-5 imgs'>
          <img onClick={() => handleImageClick(props.img1)} className='w-100 mr-5 cursor-pointer' src={props.img1}/>
          <img onClick={() => handleImageClick(props.img2)} className='w-100 mr-5 cursor-pointer' src={props.img2}/>
          <img  onClick={() => handleImageClick(props.img3)} className='w-100 mr-5 cursor-pointer' src={props.img3}/>
          <img  onClick={() => handleImageClick(props.img4)} className='w-100 mr-5 cursor-pointer' src={props.img4}/>
          <img  onClick={() => handleImageClick(props.img5)} className='w-100 mt-2 mr-5 cursor-pointer' src={props.img5}/>
        </div>
      </div>
      <div className='flex-col mt-10 ml-12 div2'>
       <div className='flex items-center mb-5'>
        <img className='w-7 rounded-full mr-2' src={props.brandImg}/>
        <p className='font-semibold'>{props.brand}</p>
       </div>
       <p className='text-2xl font-semibold my-3'>{displayedProduct.name}</p>
       <div></div>
       <p className='text-4xl font-semibold my-3'>${props.price}.00</p>
       <p className='py-4 w-500 text-gray-600 description'>{props.description}</p>
       <div>
          <p><span className='font-semibold text-lg mr-1'>Size.</span> <span>EU</span> <span>{props.gender}</span></p>
         <div className='my-2'>
           <SizeBtn size="40.5" />
           <SizeBtn size="41" />
           <SizeBtn size="42" />
           <SizeBtn size="43" />
           <SizeBtn size="43.5" />
           <SizeBtn size="44" />
           <SizeBtn size="44.5" />
           <SizeBtn size="45" />
           <SizeBtn size="46" />
         </div>
         <p className='text-amber-500 my-2'>Size Guide</p>
       </div>
       <div className='flex items-center'>
         <button onClick={props.onClick} className='to-cart w-400 bg-black text-white flex items-center justify-center py-1.5 rounded-lg mr-3 hover:bg-transparent transition hover:text-black'><AiOutlineShoppingCart/>   <span className='ml-2'>Add To Cart</span></button>
         <div className='border p-2.5 rounded-lg bg-zinc-200 mr-2 cursor-pointer hover:bg-transparent transition hover:border-transparent'><BiSolidLike /></div>
         <div className='border p-2.5 rounded-lg bg-zinc-200 cursor-pointer hover:bg-transparent transition hover:border-transparent'><BiSolidDislike /></div>
       </div>
       <p className='mt-5'>Free Delivery on orders over $150.00</p>
      </div>
    </div>
  )
}

export default ProductDisplay