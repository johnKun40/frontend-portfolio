import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import huluPic from '../public/assests/projects/huluPic.png'

function Projects() {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>

            <p className='text-xl tracking-widest'>Projects</p>
            <h2 className='py-4'>What I Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <div className='relative flex items-center h-auto w-full shadow-xl shadow-[#0B102E] rounded-xl p-4 group hover:bg-gradient-to-r from-[#958524] to-[#2E290B] '>
                    <Image className='rounded-xl group-hover:opacity-10' src={huluPic} alt='/' />
                    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='text-white tracking-wider text-center'>Hulu-Clone</h3>
                        <p className='pb-4 pt-2 text-white text-center '>Next Js</p>
                        <Link href='/'>
                            <p className='text-[#0B102E] text-center py-3 rounded-lg bg-white font-bold text-lg cursor-pointer'>Go to site</p>
                        </Link>
                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Projects;