import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Typewriter from "typewriter-effect";

function Main() {


  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-left items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-white'>LET US CREATE SOMETHING GREAT TOGETHER</p>
                {/* <h1 className='text-white py-4'>Hi, I am <span className='text-[#0B102E]'>Adebusola</span></h1> */}
                <div className='text-[#0B102E] text-6xl font-bold py-4'>
                <Typewriter id='type'
                    onInit={(typewriter)=> {
                    typewriter
                    .typeString("Hi, I am Adebusola")
                    .start();
                    }}
                />
                </div>
                <h1 className='text-white py-2'>A Front-End Developer</h1>
                <p className='py-4 text-white max-w-[70%] m-auto'>I am a front-end developer speciliazing in building and sometimes designing digital experiences. Currently focused on building responsive front-end web applications while learning back-end technologies.</p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4 '>
                <a href="https://www.linkedin.com/in/john-adebusola-adesina-4860a7b0/" target='_blank' rel='noopener noreferrer'>
                        <div className='text-white rounded-full shadow-lg shadow-[#0B102E] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn />
                        </div>
                </a>
                <a href="https://github.com/johnKun40" target='_blank' rel='noopener noreferrer'>
                        <div className='text-white rounded-full shadow-lg shadow-[#0B102E] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub />
                        </div>
                </a>
                <a href="https://twitter.com/Dudesrzly" target='_blank' rel='noopener noreferrer'>
                        <div className='text-white rounded-full shadow-lg shadow-[#0B102E] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
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