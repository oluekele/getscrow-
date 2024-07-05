import Image from 'next/image'
import React from 'react'
import Frame from '@/public/assets/phone-frame.svg'
import Chat from '@/public/assets/chat-p.png'

import Link from 'next/link'

const SharePage = () => {
  return (
    <div className='lg:w-[80%] w-[95%] mx-auto md:py-[80px] lg:flex  items-center gap-[250px] h-[100vh] ' >
      
      <div className='lg:w-[45%] h-[500px] lg:ml-0 ml-10 relative ' >

        <div className='absolute lg:left-[170px]  top-[30%] lg:w-[450px] w-[420px] h-[400px] bg-[#EEEAFE] rounded-[34px] z-[0]'>
          
        </div>
        <Image src={Chat} alt='...' width={350} height={200} className='md:w-[350px] w-[300px] absolute md:h-[200px] h-[150px] lg:left-[10%] md:top-[40%] top-[50%] z-50 ml-[-70px]'/>

        <div className=' absolute lg:w-[750px] top-5 h-[566px] overflow-hidden mt-[14.5px] lg:left-[22px] z-[2]'>
          <video autoPlay loop className='md:w-[750px] w-[700px] md:h-[650px] h-[700px]' id='video'  >
            <source src="https://assets-global.website-files.com/635e20f77318521304947d8d/635e7fe2e19fbd717f0f8ceb_pexels-anthony-shkraba-production-compressesd-transcode.mp4" data-wf-ignore="true"/> 
            <source src="https://assets-global.website-files.com/635e20f77318521304947d8d/635e7fe2e19fbd717f0f8ceb_pexels-anthony-shkraba-production-compressesd-transcode.webm" data-wf-ignore="true"/> 
          </video>
        </div>

        <div className='lg:w-[800px] h-[600px] overflow-hidden absolute z-[5]' >
          <Image src={Frame} alt='...' width={800} height={800} className='h-[800px] w-[800px] ' />
        </div>
      </div>
      
      <div className='text-[##0f0840] lg:w-[45%] mt-[200px] w-[80%] mx-auto'>
        <h1 className='md:text-[46px] text-[34px] font-medium pb-5 leading-[60px] '>
        Create and share video messages
        </h1>
        <p className='text-[18px] w-[85%] mx-auto pb-5 text-[#54506F] font-medium font-[Satoshi]'>
          A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot.
        </p>
        <div className='flex gap-8 w-[85%] mx-auto  items-center '>
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