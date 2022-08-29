import React from 'react';

function About() {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='text-xl tracking-widest uppercase '>About</p>
                <h2 className='py-4'>My Journey</h2>
                <p className='py-2 text-gray-600'>Not your average developer</p>
                <p className='text-white py-2'>
                    After graduating from the University of Liverpool in 2015, I spent the next 6 years working as an
                    Engineer and a project manager in a construction firm. I have always had a gift for client relations and negotiations
                    because of my drive to understand the needs and wants of my clients. The need to develop this gift drove me to
                    complete a masters program in Hospitaliy management in Switzerland, where I learnt leadership skills, marketing strategies of
                    leading world hotels and compulsion to perform all tasks with accuracy and care. In 2021 I started working with HTML & CSS to create 
                    fun websites and games, this later turned into a love for programming.
                </p>
                <p className='text-white py-2'>
                    Interested with how complex websites and applications are built, I started learning JavaScript and was even more enarmored with 
                    programming languages. I then started building clones of popular websites with the help of professionals on youtube and stackoverflow to improve my skills.
                </p>
            </div>
            <div className='w-full shadow-xl shadow-[#0B102E] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src='https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80' alt='/' />
            </div>
        </div>
    </div>
  )
}

export default About;