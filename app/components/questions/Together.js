'use client'
import React, { useState, useRef } from 'react'
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const Together = (props) => {

  const [open, setOPen] = useState(false);

  

  const toggle = () => {
    setOPen(!open);
  };
  return (
    <div>
      <div className='border-[1px] rounded-[8px] p-4 flex flex-col lg:w-[600px] w-[320px] text-[18px]' onClick={()=> toggle()}>
          <div className='flex items-center justify-between mb-2'>
            <p className='font-bold text-[20px] w-[80%]'>{props.label}</p>
              {open ? <RiArrowDropUpLine size={40}/> : <RiArrowDropDownLine size={40}/>}
          </div>
          {
            open &&
            <p>
            {props.children}
          </p>
          
          }
          
        </div>
    </div>
  )
}

export default Together