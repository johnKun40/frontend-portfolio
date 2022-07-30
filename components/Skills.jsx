import Image from 'next/image';
import React from 'react'

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
                            <Image alt='/' src='/../public/assests/skills/reactpic.png' width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-white'>REACT</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src='/../public/assests/skills/csspic.png' width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-white'>CSS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src='/../public/assests/skills/htmlpic.png' width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-white'>HTML</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src='/../public/assests/skills/tailwindpic.png' width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-white'>TAILWIND</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src='/../public/assests/skills/nextpic.png' width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-white'>NEXT JS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src='/../public/assests/skills/githubpic.png' width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-white'>GITHUB</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src='/../public/assests/skills/reducpic.png' width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-white'>REDUX</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src='/../public/assests/skills/javascriptpic.png' width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-white'>JAVASCRIPT</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src='/../public/assests/skills/vercelpic.png' width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-white'>VERCEL</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src='/../public/assests/skills/firebaseIcon.png' width='64' height='64' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3 className='text-white'>FIREBASE</h3>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Skills;