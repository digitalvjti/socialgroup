'use client'
import React, {useState} from 'react'
import HoverCard from '../HoverCard'
import {motion} from "framer-motion"
import Image from 'next/image';
type Props = {}

const ContentRangawardhan = (props: Props) => {
    // const [hovered, setHovered] = useState<boolean>(false)
    const [hoveredSite, setHoveredSite] = useState(false);
    const [hoveredInstagram, setHoveredInstagram] = useState(false);
    const [showPy, setShowPy] = useState<boolean>(true)
    const [showJs, setShowJs] = useState<boolean>(false)
    const [showGo, setShowGo] = useState<boolean>(false)
    const [count, setCount] = useState(0);

    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.05,
            delayChildren:.1,
          },
        },
      };
    
      const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { type: 'tween' } },
    };

      
  return (
    <HoverCard backgroundColor = '#CC5500' direction='' left='0'>
    <div className='md:flex flex-col md:space-y-20 flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 justify-between '>
        <p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]"><span className='text-white font-medium'>Rangawardhan</span> is an annual Marathi Cultural fest of VJTI Mumbai dedicated to promoting Marathi drama, literature, music and other art forms.</p>
        <div>
            <a onMouseEnter={() => setHoveredSite(true)} onMouseLeave={() => setHoveredSite(false)} href="https://rangawardhan.in/" className=' md:text-xl text-white font-semibold inline-block'>
                Visit Site
                <svg xmlns="http://www.w3.org/2000/svg" className={` text-white transition inline-block ml-3 ease-in duration-300 mb-[3px] ${hoveredSite ? "translate-x-0 ": "-translate-x-1"}`} width="20" height="20" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className={` text-white transition ease-in duration-150 ${hoveredSite ? " opacity-100" : "opacity-0 "}`} stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                
                <div className={` ${hoveredSite ? "w-11/12 scale-100" : "w-0 scale-0"} origin-left  transition ease-in duration-300 h-[2.5px] bg-white rounded-full`}></div>
                
            </a>
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <a onMouseEnter={() => setHoveredInstagram(true)} onMouseLeave={() => setHoveredInstagram(false)} href="https://www.instagram.com/rangawardhan/" className=' md:text-xl text-white font-semibold inline-block'>
                Visit Instagram
                <svg xmlns="http://www.w3.org/2000/svg" className={` text-white transition inline-block ml-3 ease-in duration-300 mb-[3px] ${hoveredInstagram ? "translate-x-0 ": "-translate-x-1"}`} width="20" height="20" viewBox="0 0 16 16" fill="none" ><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className={` text-white transition ease-in duration-150 ${hoveredInstagram ? " opacity-100" : "opacity-0 "}`} stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                <div className={` ${hoveredInstagram ? "w-11/12 scale-100" : "w-0 scale-0"} origin-left  transition ease-in duration-300 h-[2.5px] bg-white rounded-full`}></div>
            </a>
        </div>
    </div>
    
    <div className='overflow-hidden rounded-s-lg z-[1] flex-1 shadow-3xl'>
    
        {/* <div className='text-left border-[0.5px] bg-[#161b22] border-[#30363d] rounded-lg text-[#161b22] box-shadow-card-mktg md:mt-10 md:ml-0 sm:ml-10 sm:mr-10 mb-16 ml-3 mr-3 '> */}
        <Image
        src="/rangawardhan.png" // Path from the public directory
        alt="Your Image Description"
        width={300} // Set the width
        height={300} // Set the height
        style={{ marginLeft: '75px', marginTop: '30px', objectFit: 'cover', objectPosition: 'center' }} // Adjust values as needed
      />
        {/* </div> */}
    </div>
</HoverCard>
  )
}

export default ContentRangawardhan