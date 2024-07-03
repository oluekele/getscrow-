'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Person from '@/public/assets/person.webp'
import Quote from '@/public/assets/quote.svg'
import Rating from '@/public/assets/rating.svg'
import Customer from './data';


const Reviews = () => {
  const customer = Customer

  const [result, setResult] = useState(0);
  
  
  const myFunction = (input, offset) => {
    setResult(result + input)

    const container = document.getElementById("container")
    console.log(container)
    if(Math.abs(result) === container.children.length-3 ){
        setResult(0)
    }
    // else if(Math.abs(result) === container.children.length+3){
    //     setResult(-1)
    // }
    console.log(result)
    container.style.translate = `${result * offset}px`
  }


  return (
    <div className='my-[100px] w-full overflow-hidden z-10'>
      <div className='w-[80%] mx-auto flex items-center justify-between '>
        <h2 className='w-[300px] text-[#333333] font-medium text-[46px]'>Customer Reviews..</h2>
        <div className='flex gap-4 items-center'>
          <div className='w-[40px] h-[40px] rounded-full border-2 border-[#0F0840] flex items-center justify-center cursor-pointer hover:bg-[#D58836] hover:ease-in-out hover:border-[#D58836]' onClick={()=> myFunction(-1, 550)}>
            <FaArrowLeft />
          </div>
          <div className='w-[40px] h-[40px] rounded-full border-2 border-[#0F0840] flex items-center justify-center cursor-pointer hover:bg-[#D58836] hover:ease-in-out hover:border-[#D58836]' onClick={()=> myFunction(1, 550)}>
            <FaArrowRight />
          </div> 
          
          
          
        </div>
        
      </div>
      
      <div className='flex items-center gap-10 w-[3000px]' id='container'>
        {
          customer.map((item, idx) => (
            <>
              <div className='bg-[#fff] mt-[100px] w-[500px] p-2 flex items-center gap-10 rounded-[16px] shadow-md' key={idx}>
                <Image src={require("../../../public/assets/" + item.icon)} alt='....' width={100} height={100} className='rounded-[8px] w-[200px] h-[200px]'/>
                <div>
                  <Image src={Quote} alt='....' width={100} height={100} className='w-[50px] mb-2'/>
                  <p className='text-[18px] text-[#54506F] text-start font-medium font-[Satoshi] mb-3'>
                    {item.description}
                  </p>
                  <h1 className='text-[20px] font-medium'>
                    {item.title}
                  </h1>
                  <p className='flex items-center gap-3'>
                    <Image src={Rating} alt='....' width={100} height={100} className='w-[200px]'/>
                  </p>

                </div>
              </div>
            </>
          ))
        }
      </div>
     
    </div>
  )
}

export default Reviews