import Image from 'next/image';
import React from 'react'
import netflixPic from '../public/assests/projects/amazonPic.png';
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link';

function amazon() {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' alt='/' src={netflixPic} />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Amazon Clone</h2>
                <h3>React Js / Firebase</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 '>
            <div className='col-span-4'>
                <h2 className='py-4'>Overview</h2>
                <p>
                    This app was built using React Js and hosted using Firebase. This is was the first app I created using React and Firebase. Users are able to sign in and up using firebase authentication. It fetches all products dynamically from firebase and Admin users can add products using the app to firebase. On clicking a specific product, it displays a page showing the price and description of the product.
                    Adding to cart is also available, viewing and deleting contents from app is possilble.
                </p>
                <a href="https://clone-cab36.web.app/" target='_blank' rel='noopener noreferrer'><button className='px-8 py-2 mt-4 mr-8'>Demo</button></a>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-white py-2 flex items-center '><RiRadioButtonFill className='pr-1' />React Js</p>
                        <p className='text-white py-2 flex items-center '><RiRadioButtonFill className='pr-1' />Redux</p>
                        <p className='text-white py-2 flex items-center '><RiRadioButtonFill className='pr-1' />Firebase</p>
                    </div>
                </div>
            </div>
            <Link href='/#projects'>
                <p className='underline cursor-pointer py-6'>Back</p>
            </Link>
        </div>
    </div>
  )
}

export default amazon