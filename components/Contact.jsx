import Image from 'next/image';
import React, {useRef, useEffect} from 'react';
import contactPic from '../public/assests/contactPic.jpg';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi';
import {AiOutlineTrademarkCircle} from 'react-icons/ai';
import emailjs from '@emailjs/browser';
import Aos from 'aos';
import "aos/dist/aos.css";
import toast, {Toaster} from 'react-hot-toast';

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {

      e.preventDefault();
  
      emailjs.sendForm('service_akn3l7d', 'template_9cnu16a', form.current, 'j5bbx17IOpPVkNB00')
        .then((result) => {
            console.log(result.text)
            e.target.reset();
            toast.custom((t) => (
                <div
                  className={`${
                    t.visible ? 'animate-enter' : 'animate-leave'
                  } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                >
                  <div className="flex-1 w-0 p-4">
                    <div className="flex items-start">
                      <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          Message Sent!
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Thank you for reaching out.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex border-l border-gray-200">
                    <button
                      onClick={() => toast.dismiss(t.id)}
                      className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ))
        }, (error) => {
            console.log(error.text);
        })
          ;
    };

    useEffect(() => {
        Aos.init({duration: 1000});
      },[])

  return (
    <div id='contact' className='w-full lg:h-screen'>
        <Toaster position="bottom-center" reverseOrder={false} />
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

                <div data-aos="zoom-in"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className='col-span-3 w-full h-auto shadow-xl shadow-[#0B102E] rounded-xl lg:p-4'>
                    <div className='p-4'>

                        <form ref={form} onSubmit={sendEmail}>

                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input className='border-2 rounded-lg p-3 flex border-[#2E290B]' type="text" name='from_name' required  />
                                </div>

                            
                            <div className='flex flex-col py-2 '>
                                <label className='uppercase text-sm py-2'>Email</label> 
                                <input className='border-2 rounded-lg p-3 flex border-[#2E290B]' type="email" name='from_email' required  /> 
                            </div>
                            <div className='flex flex-col py-2 '>
                                <label className='uppercase text-sm py-2'>Subject</label> 
                                <input className='border-2 rounded-lg p-3 flex border-[#2E290B]' type="text" name='subject' required /> 
                            </div>
                            <div className='flex flex-col py-2 '>
                                <label className='uppercase text-sm py-2'>Message</label> 
                                <textarea className='border-2 rounded-lg p-3 border-[#2E290B]' rows='10' name='message' required></textarea>
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
            <div className='flex py-10 justify-center gap-2'>
                <AiOutlineTrademarkCircle size={20} />
                <h3>Powered by Next Js & Tailwind</h3>
            </div>

        </div>

    </div>
  )
}

export default Contact;