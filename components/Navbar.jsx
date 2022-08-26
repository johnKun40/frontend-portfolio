import Image from 'next/image';
import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import JAlogo from '../public/assests/JAlogo.png';
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub, FaTwitter} from 'react-icons/fa';
import {useRouter} from 'next/router';

function Navbar() {

    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#958524');
    const [linkColor, setLinkColor] = useState('#0B102E');
    const router = useRouter()

    useEffect(() => {
        if(
            router.asPath === '/netflix'
        ) {
            setNavBg('transparent')
            setLinkColor('#fff')
        } else {
            setNavBg('#958524')
            setLinkColor('#0B102E')
        }
    }, [router])
    
    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
     const handleShadow = () => {
        if(window.scrollY >= 90) {
            setShadow(true);
        }else {
            setShadow(false);
        }
     }
     window.addEventListener('scroll', handleShadow);
    }, []);

  return (
    <div style={{backgroundColor: `${navBg}`}} className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
        <div className='flex justify-between w-full items-center h-full px-20 2xl:px-16'>
            <Link href='/'>

            <Image className='cursor-pointer'
             src={JAlogo}
              alt='/' 
              width='90' 
              height='50' 
              />
            
            </Link>

              <div>
                <ul style={{color: `${linkColor}`}} className='hidden md:flex '>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                    </Link>
                    <Link href='/#about'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                    </Link>
                    <Link href='/#skills'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                    </Link>
                    <Link href='/#projects'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                    </Link>
                    <Link href='/#contact'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className='md:hidden'>
                    <AiOutlineMenu size='25' />
                </div>
              </div>
        </div>
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70': ''}>
            <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#958524] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Link href='/'><Image src={JAlogo} width='80' height='40'  alt='/'  /></Link>
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-[#0B102E] p-3 cursor-pointer'>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className='border-b border-[#0B102E] my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Let us create something great together</p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link href='/'>
                          <li onClick={() => setNav(false)} className='py-4 text-sm '>Home</li>  
                        </Link>
                        <Link href='/#about'>
                          <li onClick={() => setNav(false)} className='py-4 text-sm '>About</li>  
                        </Link>
                        <Link href='/#skills'>
                          <li onClick={() => setNav(false)} className='py-4 text-sm '>Skills</li>  
                        </Link>
                        <Link href='/#projects'>
                          <li onClick={() => setNav(false)} className='py-4 text-sm '>Projects</li>  
                        </Link>
                        <Link href='/#contact'>
                          <li onClick={() => setNav(false)} className='py-4 text-sm '>Contact</li>  
                        </Link>
                    </ul>
                    <div className='pt-40'>
                        <p className='uppercase tracking-widest text-[#0B102E]'>Let us connect</p>
                        <div className='flex item-center justify-between my-4 w-full sm:w-[80%]'>
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

        </div>
    </div>
  )
}

export default Navbar;