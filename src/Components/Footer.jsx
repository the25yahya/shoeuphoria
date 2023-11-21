import React from 'react'
import eagle from '../assets/eagle.png'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import {BsTwitter,BsFacebook,BsLinkedin,BsGithub,BsInstagram} from 'react-icons/bs'
import Email from './Email'

const Footer = () => {
  return (
    <footer className='flex-col mt-50 border-t pt-20 pb-2'>
        <div className='flex text-center w-full justify-around items-center email section'>
            <div>
                <p className='font-bold text-xl'>Join our newsletter</p>
                <p className='opacity-60 text-sm font-bold'>well send you a nice letter once per week. No spam</p>
            </div>
            <div className='flex justify-center'>
             <Email/>
            </div>
        </div>
        <div className='flex justify-start items-center section footer2 ml-10 mr-20 lg:ml-50'>
           <div className='mr-50'> 
              <span className='flex items-center mb-2 ml-12'>
                <img className='w-8' src={eagle}/>
                <p className='ml-2 text-orange-500 font-bold'><span className='text-black'>Shoe</span>uphoria</p>
             </span>
             <p className='w-300 font-bold text-sm'>this shoe store offers a diverse collection of stylish, comfortable, and quality shoes for every occasion.</p>
           </div>
           <div className='mr-10 footerdiv'>
             <h2 className='font-bold text-lg'>Products</h2>
             <p>Overview</p>
             <p>Features</p>
             <p>Releases</p>
           </div>
           <div className='mr-10 footerdiv'>
             <h2 className='font-bold text-lg'>Company</h2>
             <p>About us</p>
             <p>News</p>
             <p>Contact</p>
           </div>
           <div className='mr-10 footerdiv'>
             <h2 className='font-bold text-lg'>Resources</h2>
             <p>Blog</p>
             <p>newsletter</p>
             <p>support</p>
           </div>
           <div className='mr-10 footerdiv'>
             <h2 className='font-bold text-lg'>Socials</h2>
             <p>Twitter</p>
             <p>Linkedin</p>
             <p>Facebook</p>
           </div>
           <div className='mr-10 footerdiv'>
             <h2 className='font-bold text-lg'>Legal</h2>
             <p>Terms</p>
             <p>Privacy</p>
             <p>Cookies</p>
           </div>
        </div>
        <div className='flex-col px-10 text-center w-full justify-cente items-center section sm:flex'>
            <p className='flex items-center font-semibold mb-2'><span className='mr-1'><AiOutlineCopyrightCircle/></span> Unititled UI. All rights reserved.</p>
            <div className='flex items-center media justify-center'>
                <p><BsTwitter/></p>
                <p><BsGithub/></p>
                <p><BsFacebook/></p>
                <p><BsLinkedin/></p>
                <p><BsInstagram/></p>
            </div>
        </div>
    </footer>
  )
}

export default Footer