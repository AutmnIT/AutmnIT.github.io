import { useState } from 'react';
import { MdDesignServices } from 'react-icons/md'; // Design icon from Material Design
import { FaScrewdriverWrench } from "react-icons/fa6";
import { GiAbstract053 } from "react-icons/gi";
import Skills from '../components/Skills';
import my from '../assets/2.jpg'

export default function About() {

  //to hide/unhide extra content
  const [isHidden, setIsHidden] = useState(true)
  let handlehidden = () => {
    setIsHidden(!isHidden);
  }



  return (

    <div className=" text-[--text] py-9 ">
      <div className="about container m-auto w-[max(75vw,300px)]">
        <div className="a flex justify-center p-8 pb-14">
          <h2 className=' alg  md:text-4xl p-4  md:px-18 font-bold '>About Me</h2>
        </div>
        <div className='flex flex-col xl:flex-row '>
          <div className="about-img p-3 w-56 self-start md:w-2/5 lg:w-72 bg-white dark:bg-grey-800 flex  gap-2 items-center rounded-2xl mx-auto lg:mx-16 hover:-translate-y-2 transition-transform duration-300 lg:-rotate-3">
          <img src={my} alt="my image" className='w-full h-60 md:h-60 rounded-2xl object-cover grayscale hover:grayscale-0 transition-all duration-300 bg-violet-100' /></div>
          <div className="content m-auto w-[max(65vw,300px)] my-6">
            <div className="main">
              <p>I&apos;m a full-stack developer who builds with purpose and ships with precision. With a strong foundation in JavaScript, Node.js, and modern web frameworks, I focus on crafting clean, scalable, and user-centered solutions. Whether it&apos;s building systems from scratch or improving existing ones, I bring clarity, speed, and a product mindset to the table.</p>

              <div className={`btn ${isHidden ? '' : 'hidden'} flex justify-center md:m-[50px] m-4`}>
                <button className='border-x-2 md:px-12 px-6 font-medium tracking-wider cursor-pointer hover:' onClick={handlehidden}>MORE</button>
              </div>
            </div>
            <div className={`extra ${!isHidden ? '' : 'hidden'}`}>
              <p className='mt-3'>
                Before entering tech, I worked closely with senior government officials, sharpening my problem-solving and communication skills in high-pressure environments. Since then, I&apos;ve transitioned into tech with a clear goal: to build tools that solve real-world problems and deliver business value.</p>
              <p className='mt-3'>
                Right now, I&apos;m leading development on a product that streamlines digital interactions for local businesses—think smoother user flows, smart automation, and a sprinkle of AI. I&apos;m intentional about what I build, and I work like a founder—thinking in outcomes, not just features.</p>
              <p className='mt-3'>
                I&apos;m open to collaborating with teams who value clean code, ownership, and product-thinking. If that sounds like your kind of dev, you know where to find me.
              </p>
            </div>

            <div className={`btn ${!isHidden ? '' : 'hidden'} flex justify-center md:m-[50px] m-4`}>
              <button className='border-x-2 md:px-12 px-6 font-medium tracking-wider cursor-pointer' onClick={handlehidden}>LESS</button>
            </div>
          </div>
        </div>
      </div>

      <div className="what container mt-9 m-auto w-[max(85vw,300px)]">
        <div className='Design flex justify-center items-center flex-wrap gap-4'>
          <div className="f group relative  p-6 w-[max(40vw,300px)] mt-6">
            {/* Faded background icon */}
            <MdDesignServices
              className="absolute -top-4 -left-5 w-25 h-25 text-[var(--bg-logo)] opacity-10 pointer-events-none select-none group-hover:text-violet-500"
            />
            {/* Content */}
            <div className="relative">
              <h2 className="text-xl font-bold tracking-wider  mb-4">DESIGN</h2>
              <p className=" font-thin ">
                I can design the website based on your needs and suggestions. I can
                also create it from scratch by consulting with you during work.
              </p>
            </div>
          </div>
          <div className="s group relative  p-6 w-[max(40vw,300px)] mt-6 ">
            {/* Faded background icon */}
            <FaScrewdriverWrench
              className="absolute  -top-2 -left-5 w-20 h-20 text-[var(--bg-logo)] opacity-10 pointer-events-none select-none group-hover:text-violet-500"
            />
            {/* Content */}
            <div className="relative">
              <h2 className="text-xl font-bold tracking-wider  mb-4">DEVELOPMENT</h2>
              <p className=" font-thin ">
                Based on a project created by me or another one, sent by you, I can program the website to be fully functional and responsive.
              </p>
            </div>
          </div>
          <div className="t group relative  p-6 w-[max(40vw,300px)] mt-6">
            {/* Faded background icon */}
            <GiAbstract053
              className="absolute -top-2 -left-5 w-20 h-20 text-[var(--bg-logo)] opacity-10 pointer-events-none select-none group-hover:text-violet-500"
            />
            {/* Content */}
            <div className="relative">
              <h2 className="text-xl font-bold tracking-wider  mb-4">MAINTENANCE</h2>
              <p className=" font-thin ">
                In case of any problems or the need for changes, I can introduce new functionalities and solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="skills p-9 ">
        <div className=" flex justify-center  p-8 ">
          <h2 className=' border-4  md:text-3xl p-4 md:px-18 font-bold tracking-widest'>Tech Stack</h2>
        </div>
        <Skills />
      </div>


    </div>

  );
}