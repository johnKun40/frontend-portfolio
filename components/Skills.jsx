import Image from 'next/image';
import React from 'react';
import reactPic from '../public/assests/skills/reactpic.png';
import cssPic from '../public/assests/skills/csspic.png';
import htmlPic from '../public/assests/skills/htmlpic.png';
import tailwindPic from '../public/assests/skills/tailwindpic.png';
import nextPic from '../public/assests/skills/nextpic.png';
import gitPic from '../public/assests/skills/githubpic.png';
import reduxPic from '../public/assests/skills/reducpic.png';
import javaPic from '../public/assests/skills/javascriptpic.png';
import vercelPic from '../public/assests/skills/vercelpic.png';
import firebasePic from '../public/assests/skills/firebaseIcon.png';
import typescriptPic from '../public/assests/skills/typescriptpic.png';



function Skills() {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase'>Skills</p>
            <h2 className='py-4'>What I can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src={reactPic} width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-white'>REACT</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src={cssPic} width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-white'>CSS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src={htmlPic} width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-white'>HTML</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src={tailwindPic} width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-white'>TAILWIND</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src={nextPic} width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-white'>NEXT JS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src={gitPic} width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-white'>GITHUB</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src={reduxPic} width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-white'>REDUX</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src={javaPic} width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-white'>JAVASCRIPT</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src={vercelPic} width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-white'>VERCEL</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src={firebasePic} width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-white'>FIREBASE</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src={typescriptPic} width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-white'>TYPESCRIPT</h3>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Skills;