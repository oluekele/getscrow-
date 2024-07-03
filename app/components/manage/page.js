import Image from 'next/image'
import React from 'react'
import { IoMdCheckmark } from "react-icons/io";
import PhoneVendor from '@/public/assets/Vendor_img.webp'
import PhoneMaster from '@/public/assets/Vendor.webp'

const Manage = () => {
  return (
    <div className='w-[70%] mx-auto my-[50px] lg:flex  items-center gap-[150px] relative '>
      
      <div className='w-[45%] relative'>
        {/* <Image src={PhoneVendor} alt='....' width={100} height={100} />
        <Image src={PhoneMaster} alt='....' width={100} height={100} /> */}

        <div className='w-[500px] h-[500px] overflow-hidden ' >
          <Image src={PhoneVendor} alt='...' width={500} height={500} className=' z-50 h-[500px] w-[500px]'/>
        </div>

        <div className='absolute left-[10px] top-[20%] w-[500px] h-[400px] bg-[#EEEAFE] rounded-[34px] z-[-1]'>
          
        </div>
        <Image src={PhoneMaster} alt='...' width={440} height={420} className='w-[440px] absolute h-[420px] left-[30px] top-[10%]'/>
      </div>

      <div className='w-[50%]'>
        <h1 className='md:text-[46px] text-[34px] font-medium pb-5 leading-[60px] '>
        Manage money with proper calculation
        </h1>
        <p className='text-[18px] w-[85%] mx-auto pb-5 text-[#54506F] font-medium font-[Satoshi]'>
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