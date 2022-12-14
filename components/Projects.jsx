import React from 'react';
import huluPic from '../public/assests/projects/huluPic.png';
import linkedinPic from '../public/assests/projects/linkdinPic.png';
import whatsappPic from '../public/assests/projects/whatsappPic.png';
import amazonPic from '../public/assests/projects/amazonPic.png';
import netflixPic from '../public/assests/projects/netflixPic.png';
import ProjectItem from './ProjectItem';

function Projects() {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>

            <p className='text-xl tracking-widest'>Projects</p>
            <h2 className='py-4'>What I Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
            <ProjectItem title='Netflix-Clone' backgroundPic={netflixPic} projectUrl='/netflix' language={'Next Js, Stripe & Firebase'} />
            <ProjectItem title='LinkedIn-Clone' backgroundPic={linkedinPic} projectUrl='/linkedin' language={'React Js & Firebase'} />
            <ProjectItem title='Hulu-Clone' backgroundPic={huluPic} projectUrl='/hulu' language={'Next Js & Tailiwind'} />
                <ProjectItem title='WhatsApp-Clone' backgroundPic={whatsappPic} projectUrl='/whatsapp' language={'React Js & Firebase'} />
                <ProjectItem title='Amazon-Clone' backgroundPic={amazonPic} projectUrl='/amazon' language={'React Js & Firebase'} />
            </div>

        </div>

    </div>
  )
}

export default Projects;