import Image from 'next/image'
import React from 'react'
import { IoMdCheckmark } from "react-icons/io";
import Payment from '@/public/assets/paytime.webp'
import Message from '@/public/assets/ms_icon.svg'
import Clock from '@/public/assets/circle_icon-1.svg'
import Key from '@/public/assets/key_icon.svg'


const Paytime= () => {
  return (
    <div className='flex flex-col items-center py-[150px] mt-[100px]' id='pay_bg'>
      <h1 className='md:text-[46px] text-[34px] font-medium pb-5 leading-[60px] '>
      You	&quot;ll love Paytime
      </h1>
      <p className='text-[18px] mx-auto pb-5 text-[#54506F] font-medium font-[Satoshi]'>
      Share your everyday moments in limitless ways
      </p>

      <div className='w-[70%] mx-auto  lg:flex  items-center gap-[150px] mt-[100px]'>

        <div className='w-[45%]'>
          <Image src={Payment} alt='...' width={500} height={500} />
        </div>

        <div className='w-[50%] '>
          <button className='w-[500px] rounded-xl bg-white flex gap-4 p-6'>
            <Image src={Message} alt='...' width={100} height={100} />
            
            <div className='flex flex-col items-start'>
              <h1 className='text-[24px] font-medium pb-2 leading-[50px] '>
                Professional invoice and bill maker
              </h1>
              <p className='text-[18px] text-[#54506F] text-start font-medium font-[Satoshi]'>
                The Big Oxmox advised her not to because there were thousands of bad commas, wild question marks and devious semikoli
              </p>
            </div>
          </button>
          <div className='mt-10 font-medium font-[Satoshi]'>
            <p className='flex gap-4 items-center text-[#222222] font-bold text-[18px]'>
            <Image src={Clock} alt='...' width={100} height={50} className='w-[30px]'/>
              Sent a payment request
            </p>
            <p className='flex gap-4 items-center text-[#222222] mt-[50px] font-bold text-[18px]'>
            <Image src={Key} alt='...' width={100} height={50} className='w-[30px]'/>
              Include invoice information
            </p>
                       
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Paytime