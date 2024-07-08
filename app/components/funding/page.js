import React from 'react'
import { FaRegHeart } from 'react-icons/fa';




const Funding = () => {
  
  return (
    <div className='bg-[#010080] py-[100px] w-full '>
      <div className='flex  justify-between lg:w-[70%] w-[85%] mx-auto font-medium text-white'>
        <div>
          <h2 className=' lg:text-[86px] md:text-[56px] text-[34px] pb-3'>
            2M+
          </h2>
          <p className='flex items-center gap-4'>
          <FaRegHeart />
            Active Users
          </p>
        </div>
        <div>
          <h2 className='font-bold lg:text-[86px] md:text-[56px] text-[34px] pb-3'>
            30K
          </h2>
          <p className='flex items-center gap-4'>
          <FaRegHeart />
            Positive Reviews
          </p>
        </div>
        <div>
          <h2 className='font-bold lg:text-[86px] md:text-[56px] text-[34px] pb-3'>
            10M
          </h2>
          <p className='flex items-center gap-4'>
          <FaRegHeart />
            Funding
          </p>
        </div>
      </div>
      

    </div>
  )
}

export default Funding