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
            <ProjectItem title='Hulu-Clone' backgroundPic={huluPic} projectUrl='https://hulu-clone1-johnkun40.vercel.app/' language={'Next Js & Tailiwind'} />
                <ProjectItem title='LinkedIn-Clone' backgroundPic={linkedinPic} projectUrl='https://linkedin-clone-yt-4f12b.web.app/' language={'React Js & Firebase'} />
                <ProjectItem title='WhatsApp-Clone' backgroundPic={whatsappPic} projectUrl='https://whatsapp-clone-ab45.web.app' language={'React Js & Firebase'} />
                <ProjectItem title='Amazon-Clone' backgroundPic={amazonPic} projectUrl='https://clone-cab36.web.app/' language={'React Js & Firebase'} />
                <ProjectItem title='Netflix-Clone' backgroundPic={netflixPic} projectUrl='http://netflix-clone-hazel-one.vercel.app/' language={'Next Js, Stripe & Firebase'} />
            </div>

        </div>

    </div>
  )
}

export default Projects;