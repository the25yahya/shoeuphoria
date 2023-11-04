import React, { useState, useEffect } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const RotatingBanner = () => {
    const bannerContent = [
        <div className='flex items-center'>
          <p className='mr-5 text-xl commer'>Members: Free shipping on orders 50$+</p>
          <p className='underline text-sm cursor-pointer'>Join Now</p>
        </div>,
        <span>Check out our latest collection</span>,
        <div>Limited-time offer: 20% off all shoes</div>,
        "Explore our new arrivals",
        <a href="/loyalty">Join our loyalty program for exclusive deals</a>,
        // Add more content items as needed
      ];
      const [currentIndex, setCurrentIndex] = useState(0);
      const [currentContent, setCurrentContent] = useState(bannerContent[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % bannerContent.length;
      setCurrentIndex(nextIndex);
      setCurrentContent(bannerContent[nextIndex]);
    }, 3000); // Change content every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);


  return (
    <div className='w-full flex-col fade-in h-100'>
      <div className='bg-gray-200 w-full flex py-5 justify-center items-center border-b border-black mb-10'>
        <p className='mr-2'><BiChevronLeft /></p>
        {currentContent}
        <p className='ml-2'><BiChevronRight /></p>
      </div>
    </div>
  );
};

export default RotatingBanner;
