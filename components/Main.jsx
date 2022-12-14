import React, {useEffect} from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import bgImage from '../public/assests/aboutPic.jpg'
import Image from 'next/image';
import Aos from 'aos';
import "aos/dist/aos.css";

function Main() {

    const {text} = useTypewriter({
        words: ['Hi, I am Adebusola'],
        typeSpeed: [200],
        deleteSpeed: [100],
      })

      useEffect(() => {
        Aos.init({duration: 1000});
      },[])


  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-left items-center'>
        <div className='absolute top-0 left-0 h-[95vh] -z-10 w-screen'>
            <Image src={bgImage} alt=''
             layout='fill' objectFit='cover'
             />
        </div>
            <div>
                <p className='uppercase text-sm tracking-widest text-white'>LET US CREATE SOMETHING GREAT TOGETHER</p>
                <h1 className='text-[#958524] py-4'>{text}</h1> 
                <h1 className='text-white py-2'>A Front-End Developer</h1>
                <p className='py-4 text-white max-w-[70%] m-auto'>I am a front-end developer speciliazing in building and sometimes designing digital experiences. Currently focused on building responsive front-end web applications while learning back-end technologies.</p>
                <div data-aos="zoom-in"
                    data-aos-offset="300"
                    data-aos-easing="ease-out-sine" className='flex items-center justify-between max-w-[330px] m-auto py-4 '>
                <a href="https://www.linkedin.com/in/john-adebusola-adesina-4860a7b0/" target='_blank' rel='noopener noreferrer'>
                        <div className='text-white rounded-full shadow-lg shadow-[#958524] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn />
                        </div>
                </a>
                <a href="https://github.com/johnKun40" target='_blank' rel='noopener noreferrer'>
                        <div className='text-white rounded-full shadow-lg shadow-[#958524] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub />
                        </div>
                </a>
                <a href="https://twitter.com/Dudesrzly" target='_blank' rel='noopener noreferrer'>
                        <div className='text-white rounded-full shadow-lg shadow-[#958524] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaTwitter />
                        </div>
                </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main