import Image from 'next/image';
import React, {useRef} from 'react';
import contactPic from '../public/assests/contactPic.jpg';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi';
import emailjs from '@emailjs/browser';

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {

      e.preventDefault();
  
      emailjs.sendForm('service_akn3l7d', 'template_9cnu16a', form.current, 'j5bbx17IOpPVkNB00')
        .then((result) => {
            console.log(result.text)
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase'>Contact</p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-[#0B102E] rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={contactPic} alt='/' />
                        </div>
                        <div>
                            <h3 className='py-2 text-xl'>Adesina John Adebusola</h3>
                            <p className='text-white'>Front-End Developer</p>
                            <p className='py-4 text-white'>I am available for freelance or full-time positions. Contact me</p>
                        </div>
                        <div>
                        <p className='pt-8 uppercase text-white'>Connect with me</p>
                        <div className='flex items-center justify-between py-4'>
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

                <div className='col-span-3 w-full h-auto shadow-xl shadow-[#0B102E] rounded-xl lg:p-4'>
                    <div className='p-4'>

                        <form ref={form} onSubmit={sendEmail}>

                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input className='border-2 rounded-lg p-3 flex border-[#2E290B]' type="text" name='from_name'  />
                                </div>

                            
                            <div className='flex flex-col py-2 '>
                                <label className='uppercase text-sm py-2'>Email</label> 
                                <input className='border-2 rounded-lg p-3 flex border-[#2E290B]' type="email" name='from_email'  /> 
                            </div>
                            <div className='flex flex-col py-2 '>
                                <label className='uppercase text-sm py-2'>Subject</label> 
                                <input className='border-2 rounded-lg p-3 flex border-[#2E290B]' type="text" name='subject' /> 
                            </div>
                            <div className='flex flex-col py-2 '>
                                <label className='uppercase text-sm py-2'>Message</label> 
                                <textarea className='border-2 rounded-lg p-3 border-[#2E290B]' rows='10' name='message'></textarea>
                            </div>
                            <button className='w-full p-4 mt-4'>Send Message</button>
                        </form>
                        
                    </div>

                </div>

            </div>
            <div className='flex py-12 justify-center'>
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-[#0B102E] p-6 cursor-pointer hover:scale-110 ease-in duration-300' >
                        <HiOutlineChevronDoubleUp size={30} />
                    </div>
                </Link>
            </div>

        </div>

    </div>
  )
}

export default Contact;