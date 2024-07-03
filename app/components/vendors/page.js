import Image from 'next/image'
import React from 'react'
import Gpay from '@/public/assets/Group.svg'
import Visa from '@/public/assets/Group2.svg'
import Master from '@/public/assets/Group3.svg'
import PhoneVendor from '@/public/assets/Vendor_img.webp'
import PhoneMaster from '@/public/assets/Vendor.webp'

const Vendors = () => {
  return (
    <div className='w-[70%] mx-auto py-[100px] lg:flex  items-center gap-[150px]  relative my-[50px]'>
      <div className='w-[45%]'>
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

      <div className='w-[45%] relative'>
        {/* <Image src={PhoneVendor} alt='....' width={100} height={100} />
        <Image src={PhoneMaster} alt='....' width={100} height={100} /> */}

        <div className='w-[500px] h-[500px] overflow-hidden ' >
          <Image src={PhoneVendor} alt='...' width={500} height={500} className=' z-50 h-[500px] w-[500px]'/>
        </div>

        <div className='absolute left-[10px] top-[20%] w-[500px] h-[400px] bg-[#EEEAFE] rounded-[34px] z-[-1]'>
          
        </div>
        <Image src={PhoneMaster} alt='...' width={420} height={420} className='w-[420px] absolute h-[420px] left-[50px] top-[10%] ' id='scaleVendor'/>
      </div>
    </div>
  )
}

export default Vendors