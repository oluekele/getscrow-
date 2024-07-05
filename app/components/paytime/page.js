import Image from 'next/image'
import React from 'react'
import Payment from '@/public/assets/paytime.webp'
import Transaction from './Transaction';



const Paytime= () => {

  return (
    <div className='flex flex-col items-center justify-center md:py-[100px] mt-[50px]' id='pay_bg'>
      <h1 className='md:text-[46px] text-[34px] font-medium pb-5 leading-[60px] '>
      You	&quot;ll love Paytime
      </h1>
      <p className='text-[18px] mx-auto pb-5 text-[#54506F] w-[90%] text-center font-medium font-[Satoshi]'>
      Share your everyday moments in limitless ways
      </p>

      <div className='lg:w-[80%] w-[95%] mx-auto flex flex-wrap  items-center gap-[100px] justify-center mt-[50px]'>

        <div className='lg:w-[500px] w-[80%]'>
          <Image src={Payment} alt='...' width={500} height={500} />
        </div>

        <div className='lg:w-[500px] w-[80%] mt-[50px]'>
          <Transaction />
        </div>
      </div>
    </div>
    
  )
}

export default Paytime