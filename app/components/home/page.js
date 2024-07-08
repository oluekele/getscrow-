import Image from 'next/image'
import React from 'react'
import { MdOutlineStarPurple500 } from 'react-icons/md'
import { FaGooglePlay } from 'react-icons/fa'
import Link from 'next/link'
import SentIcon from '@/public/assets/sent_icon.svg'
import Arrow from '@/public/assets/hero arrow.svg'
import Element from '@/public/assets/hero element.svg'
import Phone from '@/public/assets/phone-p-500.webp'

const HomePage = () => { 
  return (
    <div className='w-full lg:h-[120vh] lg:mt-[-100px] mt-[-100px] md:pt-[250px] pt-[300px] lg:pt-[350px] pb-[60px] lg:pb-0 flex flex-wrap items-center relative justify-center' id='home_bg'>
      
      <div className='w-[100%] lg:w-[80%]  lg:flex  items-center justify-center gap-[200px] mx-auto '>
        <div className='text-[#0f0840] lg:w-[40%] w-[80%] mx-auto flex flex-col items-start lg:mt-[-100px]'>
          <h1 className='md:text-[64px] text-[44px]  font-medium pb-10 md:leading-[80px] leading-[70px]'>
          Say Goodbye To Pay On Delivery
            </h1>
          <div className='flex gap-8 items-center '>
            <button className='flex items-center text-[16px] gap-2 h-[60px] w-[180px] text-[#0f0840]  rounded-[8px] border-2 border-[#0f0840]' id='play' >
                <Link href="/" className='flex gap-2 items-center mx-auto cursor-pointer hover:text-[#D58836]'>
                  <FaGooglePlay size={30} />
                  Play Store
                </Link>
            </button>
              
            <div>
              <div className='flex pb-1'>
                <MdOutlineStarPurple500 size={20} className='text-[#D58836]'/>
                <MdOutlineStarPurple500 size={20} className='text-[#D58836]'/>
                <MdOutlineStarPurple500 size={20} className='text-[#D58836]'/>
                <MdOutlineStarPurple500 size={20} className='text-[#D58836]'/>
                <MdOutlineStarPurple500 size={20} className='text-[#D58836]'/>
              </div>
                <h3>4.9/5 &#09; Android</h3>
            </div>
          </div>
        </div>

        <div className='relative flex lg:w-[45%] w-[80%] mx-auto pt-[100px] lg:mt-0 items-center justify-center gap-10 md:ml-[100px] ml-[70px] lg:ml-0'>
          <div className='absolute lg:left-[-150px] left-[-50px] lg:top-[-50px] bg-white rounded-md lg:w-[200px] w-[150px] flex flex-col items-center lg:p-10 p-5 z-[10]'>
            <Image src={SentIcon} alt='...' width={50} height={50} className=' pb-3'/>
            <p className='text-center'>
              $50.00 sent Successfully!
            </p>
          </div>
          <div className='absolute left-[-100px] hidden lg:flex top-[-150px] '>
            <Image src={Arrow} alt='...' width={100} height={200} className='w-[80px]' />
          </div>
          <div className='lg:w-[350px] w-[70%] h-[700px] lg:absolute left-0 '>
            <Image src={Phone} alt='...' width={350} height={100} className='w-full h-full'/>
          </div>
          <div className='w-[200px] hidden lg:flex h-[350px] absolute right-0 top-[-250px]'>
            <Image src={Element} alt='...' width={200} height={100} className='w-full h-full'/>
          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default HomePage