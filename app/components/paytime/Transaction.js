'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Message from '@/public/assets/ms_icon.svg'
import Clock from '@/public/assets/circle_icon-1.svg'
import Key from '@/public/assets/key_icon.svg'

const Transaction = () => {
  const [action, setAction] = useState("default")
  return (
    <div>
      {
        action === "default" ? 
        <button className='lg:w-[500px] w-full mb-5 rounded-xl bg-white flex gap-4 p-6'>
        <Image src={Message} alt='...' width={50} height={50} />
        
        <div className='flex flex-col items-start'>
          <h1 className='text-[24px] font-medium pb-2 leading-[30px] '>
            Professional invoice and bill maker
          </h1>
          <p className='text-[18px] text-[#54306F] text-start font-medium font-[Satoshi]'>
            The Big Oxmox advised her not to because there were thousands of bad commas, wild question marks and devious semikoli
          </p>
        </div>
      </button>
      :
      <button className='flex mb-5 gap-4 p-6' onClick={()=> setAction("default")}>
        <Image src={Message} alt='...' width={30} height={30} />
        
        <div className='flex flex-col items-start'>
          <h1 className='text-[24px] font-medium pb-2 leading-[30px] '>
            Professional invoice and bill maker
          </h1>
        </div>
      </button>
      }

      {
        action === "payment" ? 
        <button className='lg:w-[500px] w-full mb-5 rounded-xl bg-white flex gap-4 p-6'>
        <Image src={Clock} alt='...' width={50} height={50} />
        
        <div className='flex flex-col items-start'>
          <h1 className='text-[24px] font-medium pb-2 leading-[30px] '>
          Sent a payment request
          </h1>
          <p className='text-[18px] text-[#54306F] text-start font-medium font-[Satoshi]'>
            The Big Oxmox advised her not to because there were thousands of bad commas, wild question marks and devious semikoli
          </p>
        </div>
      </button>
      :
      <button className=' flex gap-4 mb-5 p-6' onClick={()=> setAction("payment")}>
        <Image src={Clock} alt='...' width={30} height={30} />
        
        <div className='flex flex-col items-start'>
          <h1 className='text-[24px] font-medium pb-2 leading-[30px] '>
          Sent a payment request
          </h1>
        </div>
      </button>
      }

      {
        action === "invoice" ? 
        <button className='lg:w-[500px] w-full rounded-xl bg-white flex gap-4 p-6'>
        <Image src={Key} alt='...' width={50} height={50} />
        
        <div className='flex flex-col items-start'>
          <h1 className='text-[24px] font-medium pb-2 leading-[30px] '>
          Include invoice information
          </h1>
          <p className='text-[18px] text-[#54306F] text-start font-medium font-[Satoshi]'>
            The Big Oxmox advised her not to because there were thousands of bad commas, wild question marks and devious semikoli
          </p>
        </div>
      </button>
      :
      <button className='flex gap-4 p-6' onClick={()=> setAction("invoice")}>
        <Image src={Key} alt='...' width={30} height={30} />
        
        <div className='flex flex-col items-start'>
          <h1 className='text-[24px] font-medium pb-2 leading-[30px] '>
          Include invoice information
          </h1>
        </div>
      </button>
      }

      
    </div>
  )
}

export default Transaction