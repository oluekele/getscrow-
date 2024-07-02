import Image from 'next/image'
import React from 'react'
import Frame from '@/public/assets/phone-frame.svg'
import Chat from '@/public/assets/chat-p.png'

import Link from 'next/link'

const SharePage = () => {
  return (
    <div className='w-[80%] mx-auto py-[100px] lg:flex justify-between items-center gap-[50px] h-[100vh] relative' >
      <div className='lg:w-[500px] h-[500px]  ml-[-100px]' >
        <div className='w-[800px] h-[600px] overflow-hidden ' >
          <Image src={Frame} alt='...' width={800} height={800} className=' z-50 h-[800px] w-[800px]'/>
        </div>

        <div className='absolute left-[70px] top-[30%] w-[450px] h-[400px] bg-[#EEEAFE] rounded-[34px] z-[-1]'>
          
        </div>
        <Image src={Chat} alt='...' width={350} height={200} className='w-[350px] absolute h-[200px]  top-[40%] '/>

        <div className='z-[-1] absolute w-[750px]  top-[20%] left-[-75px] h-[566px] overflow-hidden mt-[15px]'>
          <video autoPlay loop className='w-[750px] h-[650px]' id='video'  >
            <source src="https://assets-global.website-files.com/635e20f77318521304947d8d/635e7fe2e19fbd717f0f8ceb_pexels-anthony-shkraba-production-compressesd-transcode.mp4" data-wf-ignore="true"/> 
            <source src="https://assets-global.website-files.com/635e20f77318521304947d8d/635e7fe2e19fbd717f0f8ceb_pexels-anthony-shkraba-production-compressesd-transcode.webm" data-wf-ignore="true"/> 
          </video>
        </div>

      </div>
      <div className='text-[##0f0840] lg:w-[500px]'>
        <h1 className='md:text-[46px] text-[34px] font-medium pb-10 '>
        Create and share video messages
        </h1>
        <p className='text-[18px] pb-5 text-[#54506F] font-medium'>
          A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.
        </p>
        <div className='flex gap-8 items-center '>
          <button className='flex items-center text-[18px] h-[50px] w-[150px] text-[#0f0840] rounded-[8px] border-2 border-[#0f0840]' id='play' >
          <Link href="/" className='flex gap-2 items-center mx-auto'>
            Play Store
          </Link>
        </button>
        </div>
      </div>
    </div>
  )
}

export default SharePage