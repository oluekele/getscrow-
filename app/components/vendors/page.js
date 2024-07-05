import Image from 'next/image'
import React from 'react'
import Gpay from '@/public/assets/Group.svg'
import Visa from '@/public/assets/Group2.svg'
import Master from '@/public/assets/Group3.svg'
import PhoneVendor from '@/public/assets/Vendor_img.webp'
import PhoneMaster from '@/public/assets/Vendor.webp'

const Vendors = () => {
  return (
    <div className='lg:w-[70%] w-[80%] mx-auto py-[80px] mt-[380px] lg:mt-0 flex flex-wrap items-center justify-center gap-[100px]  relative my-[50px]'>
      <div className='lg:w-[500px] '>
        <h1 className='md:text-[46px] text-[34px] font-medium pb-5 leading-[60px] '>
          Pay your vendors quickly anywhere
        </h1>
        <p className='text-[18px] w-[85%] mx-auto pb-5 text-[#54506F] font-medium font-[Satoshi]'>
          A small river named duden flows by their place and supplies it with the necessary regelialia. It is a more paradisematic country.
        </p>
        <div className='w-[85%] mx-auto flex gap-4'>
          <Image src={Visa} alt='....' width={100} height={100} />
          <Image src={Gpay} alt='....' width={100} height={100} />
          <Image src={Master} alt='....' width={100} height={100} />
        </div>
      </div>

      <div className='lg:w-[500px] w-full relative ml-10 lg:ml-0'>
        
        <div className='lg:w-[500px] w-full md:h-[500px] h-[400px] overflow-hidden ' >
          <Image src={PhoneVendor} alt='...' width={500} height={500} className='absolute z-10 h-[400px] md:h-[500px] md:w-[500px] w-full'/>
        </div>

        <div className='absolute lg:left-[15px] md:left-[45px] top-[20%] lg:w-[480px] md:w-[410px] w-full h-[300px] md:h-[380px] bg-[#EEEAFE] rounded-[34px] z-[0]'>
          
        </div>
        <Image src={PhoneMaster} alt='...' width={420} height={420} className='lg:w-[420px] w-[380px] absolute h-[420px] lg:left-[50px] md:left-[60px] md:top-[10%] top-[-10px] z-50 ' id='scaleVendor'/>
      </div>
    </div>
  )
}

export default Vendors