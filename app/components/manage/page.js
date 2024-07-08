import Image from 'next/image'
import React from 'react'
import { IoMdCheckmark } from "react-icons/io";
import PhoneVendor from '@/public/assets/Vendor_img.webp'
import PhoneMaster from '@/public/assets/Vendor.webp'

const Manage = () => {
  return (
    <div className='lg:w-[95%] w-[80%] mx-auto md:my-[50px] flex gap-[200px] flex-wrap items-center justify-center relative overflow-hidden'>
      
      <div className='lg:w-[500px] w-[100%] md:mb-5 lg:mb-0 relative'>
        
        <div className='md:w-[500px] h-[500px] ' >
          <Image src={PhoneVendor} alt='...' width={500} height={500} className='absolute z-10 h-[500px] md:w-[500px]'/>
        </div>

        <div className='absolute lg:left-[10px] md:left-[50px] left-[20px] top-[20%] lg:w-[480px] md:w-[420px] w-[400px] h-[380px] bg-[#EEEAFE] rounded-[34px] '>
          
        </div>
        <Image src={PhoneMaster} alt='...' width={440} height={420} className='w-[440px] absolute h-[420px] md:left-[30px] top-[10%] z-50'/>
      </div>

      <div className='lg:w-[500px] md:mt-10 w-[90%]'>
        <h1 className='md:text-[46px] text-[34px] font-medium pb-5 leading-[60px] '>
        Manage money with proper calculation
        </h1>
        <p className='w-[80%] text-[18px] pb-5 text-[#54506F] font-medium font-[Satoshi]'>
          A small river named duden flows by their place and supplies it with the necessary regelialia. It is a more paradisematic country.
        </p>
        <div className='w-[85%] mx-auto font-medium font-[Satoshi]'>
          <p className='flex gap-4 items-center text-[#54506F]'>
          <IoMdCheckmark className='w-[30px] h-[30px] rounded-full bg-white shadow-md p-2'/>
          Get invoice from vendor and freelance
          </p>
          <p className='flex gap-4 items-center text-[#54506F] my-3'>
          <IoMdCheckmark className='w-[30px] h-[30px] rounded-full bg-white shadow-md p-2'/>
          Quick payment to your vendors
          </p>
          <p className='flex gap-4 items-center text-[#54506F]'>
          <IoMdCheckmark className='w-[30px] h-[30px] rounded-full bg-white shadow-md p-2'/>
          Payment summary on dashboard screen
          </p>
          
        </div>
      </div>
    </div>
  )
}

export default Manage