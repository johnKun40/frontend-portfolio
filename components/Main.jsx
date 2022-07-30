import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

function Main() {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-left items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-white'>LET US CREATE SOMETHING GREAT TOGETHER</p>
                <h1 className='text-white py-4'>Hi, I am <span className='text-[#0B102E]'>Adebusola</span></h1>
                <h1 className='text-white py-2'>A Front-End Developer</h1>
                <p className='py-4 text-white max-w-[70%] m-auto'>I am a front-end developer speciliazing in building and sometimes designing digital experiences. Currently focused on building responsive front-end web applications while learning back-end technologies.</p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4 '>
                    <div className='text-white rounded-full shadow-lg shadow-[#0B102E] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn />
                    </div>
                    <div className='text-white rounded-full shadow-lg shadow-[#0B102E] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                    </div>
                    <div className='text-white rounded-full shadow-lg shadow-[#0B102E] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail />
                    </div>
                    <div className='text-white rounded-full shadow-lg shadow-[#0B102E] p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main