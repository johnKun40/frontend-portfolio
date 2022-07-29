import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';

function Navbar() {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
        <div className='flex justify-between w-full items-center h-full px-20 2xl:px-16'>
            <Image
             src='/../public/assests/JAlogo.png'
              alt='/' 
              width='90' 
              height='50' 
              />
              <div>
                <ul className='hidden md:flex '>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                    </Link>
                </ul>
                <div className='md:hidden'>
                    <AiOutlineMenu size='25' />
                </div>
              </div>
        </div>
        <div className='fixed left-0 top-0 w-full h-screen bg-black/70'>
            <div className='fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#958524] p-10 ease-in duration-500'>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Image src='/../public/assests/JAlogo.png' width='80' height='40'  alt='/'  />
                        <div className='rounded-full shadow-lg shadow-[#0B102E] p-3 cursor-pointer'>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className='border-b border-[#0B102E] my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Lets create something great together</p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link href='/'>
                          <li className='py-4 text-sm '>Home</li>  
                        </Link>
                        <Link href='/'>
                          <li className='py-4 text-sm '>About</li>  
                        </Link>
                        <Link href='/'>
                          <li className='py-4 text-sm '>Skills</li>  
                        </Link>
                        <Link href='/'>
                          <li className='py-4 text-sm '>Projects</li>  
                        </Link>
                        <Link href='/'>
                          <li className='py-4 text-sm '>Contact</li>  
                        </Link>
                    </ul>
                    <div className='pt-40'>
                        <p className='uppercase tracking-widest text-[#0B102E]'>Let us connect</p>
                        <div className='flex item-center justify-between my-4 w-full sm:w-[80%]'>
                            <div className='rounded-full shadow-lg shadow-[#0B102E] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                            <div className='rounded-full shadow-lg shadow-[#0B102E] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                            <div className='rounded-full shadow-lg shadow-[#0B102E] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                            <div className='rounded-full shadow-lg shadow-[#0B102E] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar;