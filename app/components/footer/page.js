import React from 'react';
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaGooglePlay } from "react-icons/fa";
import Icon1 from '@/public/assets/webflow-badge-icon.svg'
import Icon2 from '@/public/assets/webflow-badge-text.svg'



const Footer = () => {
  return (
    <>
      <div className='flex flex-col items-center  bg-[#0F0840] '>
        <div className=' w-full py-[100px] border-b-[0.1px] border-[#585663]'>
          <div className='text-[#fff] lg:w-[600px] w-[80%] mx-auto flex flex-col items-center'>
            <h1 className='md:text-[64px] text-[34px] font-medium pb-10 md:leading-[80px]'>
              Fastest way to make payment anywhere.
            </h1>
            <div className='flex gap-8 items-center '>
              <button className='flex items-center text-[16px] gap-2 h-[60px] w-[180px] text-white rounded-[8px] border-2 border-[#fff]' id='play' >
                <Link href="/" className='flex gap-2 items-center mx-auto'>
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
        </div>
        <div className='lg:flex justify-between w-[80%] lg:w-[70%] py-10'>
          <p className='md:flex items-center gap-2 text-[18px] text-[#ffffff80] font-medium pb-4'>
            Copyright © RNN Studio. Powered by
            <Link href='/' className='hover:text-[#fff]'>Webflow</Link>
            <Link href='/' className='hover:text-[#fff]'>License</Link>
            <Link href='/' className='hover:text-[#fff]'>Changelog</Link>
          </p>
          <div className='flex gap-8 transition-all pt-5'>
            <Link href='' className='w-[40px] h-[40px] cursor-pointer hover:bg-[#D58836] hover:ease-in-out  rounded-full text-[#575279] p-2 flex items-center bg-[#fff]'>
              <FaLinkedinIn size={20} /></Link>

              <Link href='' className='w-[40px] h-[40px] cursor-pointer hover:bg-[#D58836] hover:ease-in-out  rounded-full text-[#575279] p-2 bg-[#fff] flex items-center'>
              <FaFacebookF size={20} />
            </Link>

            <Link href=' ' className='w-[40px] h-[40px] cursor-pointer hover:bg-[#D58836] hover:ease-in-out  rounded-full text-[#575279] p-2 bg-[#fff] flex items-center'>
              <FaTwitter size={20} />
            </Link>
            
          </div>
        </div>
        <div className='w-[180px] h-[40px] rounded-md pl-5 bg-white flex items-center gap-2 z-[99999] fixed right-4 bottom-[40px]'>
          <Image src={Icon1} alt='....' width={30} height={40} className=''/>
          <Image src={Icon2} alt='....' width={100} height={40} />

        </div>
      </div>
    </>

     
      
    
  )
}

export default Footer