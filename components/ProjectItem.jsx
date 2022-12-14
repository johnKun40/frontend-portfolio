import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Aos from 'aos';
import "aos/dist/aos.css";


function ProjectItem({title, backgroundPic, projectUrl, language }) {

  useEffect(() => {
    Aos.init({duration: 1000});
  },[])

  return (
    <div data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine" className='relative flex items-center h-auto w-full shadow-xl shadow-[#0B102E] rounded-xl p-4 group hover:bg-gradient-to-r from-[#958524] to-[#2E290B] '>
    <Image className='rounded-xl group-hover:opacity-10' src={backgroundPic} alt='/' target='_blank' rel='noopener noreferrer' />
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center '>{language}</p>
        <a href={projectUrl}>
            <p className='text-[#0B102E] text-center py-3 rounded-lg bg-white font-bold text-lg cursor-pointer'>More Info</p>
        </a>
    </div>
</div>
  )
}

export default ProjectItem