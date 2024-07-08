'use client'
import React, { useState } from 'react'
import { FaCircle } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import Period from './data';

const Pricing = () => {
  const period = Period
  const [action, setAction] = useState("year")


  return (
    <div className='flex flex-col items-center md:py-[100px] py-[50px] md:mt-[100px] text-[#0F0840]' id='pay_bg'>
      <h1 className='md:text-[46px] text-[34px] font-medium pb-3 leading-[60px] '>
        Pricing
      </h1>
      <p className='text-[18px] mx-auto text-[#54506F] font-medium font-[Satoshi] mb-8'>
      The Big Oxmox advised her not to do
      </p>
      <div className='flex items-center justify-center'>
        <div className='flex items-center gap-4 text-[22px] font-medium'>
          <span>Monthly</span>
          <div className='border-[2px] border-[#010080] px-2 py-1 rounded-full flex items-center justify-center gap-3'>
            {
              action === "year" && 
              <div className='flex items-center gap-2'>
                <FaCircle size={25} className='cursor-pointer text-[#010080]'/>
            
                <FaCircle size={25} className='cursor-pointer text-[#fff] ' onClick={()=> {
                  setAction("month")
                }}/>
              </div>
            }
            {
              action === "month" && 
              <div className='flex items-center gap-2'>
                <FaCircle size={25} className='cursor-pointer text-[#fff]' onClick={()=> {
                  setAction("year")
                }}/>
            
                <FaCircle size={25} className='cursor-pointer text-[#010080] ' />
              </div>
            }
          
          
          </div>
          <span>Yearly</span>
        </div>
      </div>

      <div className='lg:w-[80%] w-[95%] mt-10 flex flex-wrap mx-auto items-center justify-center gap-[50px]'>
        {
          period.map((item, idx)=>(
            <>
              <div className='flex flex-col p-6 w-[350px] shadow-md bg-white rounded-xl' key={idx}>
                <h2 className='mb-5 text-[26px] text-center'>{item.title}</h2>
                <p className='font-bold text-[22px] flex items-center justify-center'>$ <span className='text-[40px]'>{action=== "year" ?item.cost : item.costM}</span><span>/{action === "year" ? item.sessionYear : item.sessionMonth}</span></p>
                <p className='text-[18px] w-[80%] mx-auto text-[#54506F] font-medium font-[Satoshi] my-8 text-center'>
                  {item.description}
                </p>
                
                <div className='w-full flex items-center justify-center'>
                {item.button}
                </div>

                <p className='flex gap-4 items-center pb-2 text-[#54506F] mt-3'>
                <IoMdCheckmark size={20} className=''/>
                  {item.details1}
                </p>
                <p className='flex gap-4 items-center pb-2 text-[#54506F]'>
                <IoMdCheckmark size={20} className=''/>
                {item.details2}
                </p>
                <p className='flex gap-4 items-center pb-2 text-[#54506F]'>
                <IoMdCheckmark size={20} className=''/>
                {item.details3}
                </p>
                <p className='flex gap-4 items-center pb-2 text-[#54506F]'>
                <IoMdCheckmark size={20} className=''/>
                {item.details4}
                </p>
                <p className='flex gap-4 items-center pb-2 text-[#54506F]'>
                <IoMdCheckmark size={20} className=''/>
                {item.details5}
                </p>
                <p className='flex gap-4 items-center pb-2 text-[#54506F]'>
                <IoMdCheckmark size={20} className=''/>
                {item.details6}
                </p>
              </div>
            </>
          ))
        }
        

      </div>

    </div>
  )
}

export default Pricing