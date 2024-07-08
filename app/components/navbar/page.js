'use client'
import React, { useState, useEffect } from 'react';
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import Image from 'next/image';
import Logo from '@/public/Getscrow Logo.png'
// import Link from 'next/link';
import { Link } from 'react-scroll';



const Header = () => {
  
  const [sideNav, setSideNav] = useState(false);
  const [navContent, setNavContent] = useState("");
  const [sideNavHeader, setSideNavHeader] = useState(false);

  const scrollHeader = ()=>{
    if(window.scrollY >= 50){
      setSideNavHeader(true)
      
    }
    else{
      setSideNavHeader(false)
    }
    
  }
  const scrollComponents = ()=>{
    if(window.scrollY <= 750 ){
      setNavContent("home")
      
    }
    else if(window.scrollY > 750 && window.scrollY <= 1600 ){
      setNavContent("feature")
      
    }
    else if(window.scrollY > 1600 && window.scrollY <= 3200){
      setNavContent("faq")
      
    }
    else if(window.scrollY > 3200 && window.scrollY <= 4000){
      setNavContent("reviews")
      
    }
    else if(window.scrollY > 4000){
      setNavContent("contact")
      
    }
    else{
      setNavContent(false)
    }
    
  }

  useEffect(()=>{
    window.addEventListener('scroll', scrollHeader)
    window.addEventListener('scroll', scrollComponents)
    return ()=>{
      window.addEventListener('scroll', scrollHeader)
      window.addEventListener('scroll', scrollComponents)
    }
    
  }, [])
  return (
    <div  className={sideNavHeader ? "navbar" : "none"} id='navbar_container'>
      <div className='w-[80%] lg:w-[82.5%] mx-auto flex items-center justify-between py-4 ' >
        <div >
          <Link href='/' ><Image src={Logo} width={150} height={50} alt='Company logo' className="w-[150px] z-50"/></Link>
          
        </div>
        <div className='lg:flex items-center hidden gap-10 text-[18px]'>
          <h2 ><Link activeClass='active' spy={true} smooth={true} offset={-100} duration={500} href="#" className={navContent === "home" ? "text-[#010080] " : "text[#0f0840] hover:text-[#010080]"} >Home</Link></h2>

          <h2><Link activeClass='active' spy={true} smooth={true} offset={-100} duration={500} href="/feature" className={navContent === "feature" ? "text-[#010080]" : "text[#0f0840] hover:text-[#010080] "}>Blog</Link></h2>

          <h2><Link activeClass='active' spy={true} smooth={true} offset={-100} duration={500} href="/question" className={navContent === "faq" ? "text-[#010080] " : "text[#0f0840]  hover:text-[#010080] "}>FAQS</Link></h2>

          {/* <h2><Link activeClass='active' spy={true} smooth={true} offset={-100} duration={500} href="/pricing" className={navContent === "pricing" ? "text-[#010080] " : "text[#0f0840] hover:text-[#010080] "}>Pricing</Link></h2> */}

          <h2><Link activeClass='active' spy={true} smooth={true} offset={-100} duration={500} href="/reviews" className={navContent === "reviews" ? "text-[#010080] " : "text[#0f0840]  hover:text-[#010080] "}>Reviews</Link></h2>

          <h2><Link activeClass='active' spy={true} smooth={true} offset={-100} duration={500} href="/" className={navContent === "contact" ? "text-[#010080] " : "text[#0f0840]  hover:text-[#010080] "}>Contact Us</Link></h2>
        </div>

        <div className='lg:flex items-center hidden gap-10 '>
          <button className='flex items-center text-[16px] gap-2 py-3 px-6 text-white rounded-full' id='btn'><Link href="/">Download App</Link></button>
        </div>

        <div className='text-white cursor-pointer bg-[#25262b] p-3 relative rounded-[8px] lg:hidden z-[999]' onClick={() => setSideNav(!sideNav)}>
        <MdOutlineMenu size={30} />
        </div>
        <div className={sideNav 
          ? 'fixed right-0 top-0 bg-[#fff] z-[999] p-10  duration-300 w-[60vw] h-[100vh]'  
          : 'fixed right-[-100%] bg-[#fff]  duration-300 z-[999] w-[60vw]'}>
          <div className='flex flex-col items-start justify-between'>
            <div >
              <Link href='/' ><Image src={Logo} width={150} height={50} alt='Company logo' className='w-[150px] z-50'/></Link>
                
            </div>
            <div className='flex flex-col justify-center text-[18px] gap-4 h-[100vh]'>
              <h2 onClick={() => setSideNav(false)} className='pb-2'>
                <Link activeClass='active' spy={true} smooth={true} offset={-100} duration={500} href="/home" className='text[#0f0840] hover:text-[#010080]'>Home</Link>
              </h2>

              <h2 onClick={() => setSideNav(false)} className='pb-2'>
                <Link activeClass='active' spy={true} smooth={true} offset={-100} duration={500} href="/feature" className='text[#0f0840] hover:text-[#010080]'>Blog</Link>
              </h2>

              {/* <h2 onClick={() => setSideNav(false)} className='pb-2'>
                <Link activeClass='active' spy={true} smooth={true} offset={-100} duration={500} href="/FAQS" className='text[#0f0840] hover:text-[#010080]'>FAQS</Link>
              </h2> */}

              <h2 onClick={() => setSideNav(false)} className='pb-2'>
                <Link activeClass='active' spy={true} smooth={true} offset={-100} duration={500} href="/pricing" className='text[#0f0840] hover:text-[#010080]'>FAQS</Link>
              </h2>

              <h2 onClick={() => setSideNav(false)} className='pb-2'>
                <Link activeClass='active' spy={true} smooth={true} offset={-100} duration={500} href="/questions" className='text[#0f0840] hover:text-[#010080]'>Reviews</Link>
              </h2>

              <h2 onClick={() => setSideNav(false)} className='pb-2'>
                <Link activeClass='active' spy={true} smooth={true} offset={-100} duration={500} href="/" className='text[#0f0840] hover:text-[#010080]'>Contact Us</Link>
              </h2>

              <button className='flex items-center text-[16px] gap-2 py-3 px-6 mt-[100px] text-white rounded-full' id='btn'><Link href="/">Download App</Link></button>
            </div>
            <IoClose size={30} className='absolute top-[7%] right-10 cursor-pointer' onClick={() => setSideNav(false)}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header