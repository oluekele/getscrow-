import Image from 'next/image'
import React from 'react'
import Tech from './data'


const Features = () => {
  const tech = Tech
  return (
    <div className='bg-[#010080] lg:py-[200px] py-[60px] w-full '>
      <div className='lg:w-[80%] w-[80%] mx-auto'>
        <div className='text-white font-medium lg:pb-[80px] pb-[50px]'>
          <h2 className='pb-2 lg:text-[76px] md:text-[60px] text-[50px]'>Build trust with your customers</h2>
          <p className='text-[20px] font-[Satoshi]'>Sweet mornings of spring which I enjoy with my whole heart</p>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-[70px] mx-auto' >
          {
            tech.map((item) => (
             <>
              <div className='bg-white flex flex-col  gap-6 w-[370px] h-[250px] px-6 py-10 rounded-[16px] mb-10 lg:mb-0' key={item.id}>
                <div className='flex items-center gap-4 justify-start mb-3'>
                  <Image src={require("../../../public/assets/" + item.icon)} alt='...' width={50} height={50} />
                  <h2 className='font-medium text-[24px] text-[#0F0840]'>{item.title}</h2>
                </div>
                <div>
                  <p className='text-[20px] font-[Satoshi] text-[#868399]'>{item.description}</p>
                </div>
              </div>
             </>
            ))
          }
          

        </div>
      </div>

    </div>
  )
}

export default Features