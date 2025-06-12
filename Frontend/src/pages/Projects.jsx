import React from 'react'
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import p1 from "../assets/ProjectsImg/P1.png"

function Projects() {

  const [isHidden, setIsHidden] = useState(true)

  //hide extra projects
  let handlehidden = () => {
    setIsHidden(!isHidden);
  }


  let featuredProjects = [
    { screenshoot: p1, link: "https://github.com/AutmnIT/SkillSync", name: "Skillsync", desc: "SkillSync is an AI-powered web app that analyzes your resume and a job description to give you personalized feedback. It shows how likely you are to get shortlisted, highlights skill gaps, gives interview prep advice, and even helps you craft a referral message .", techStack: ["react", "tailwind", "Nodejs", "Express"], live: "" , complete: false},
    
  ]

  let otherProjects = [
    // { screenshoot: "\ChatGPT Image May 15, 2025, 11_39_27 PM.png", link: "https://github.com/AutmnIT", name: "Teskisky Mart", desc: "Tekisky Mart is a web-based platform that allows users to search, explore, and purchase a wide range of products from various providers, offering a seamless and efficient shopping experience.", techStack: ["react", "tailwind", "javascript"], live: "https://www.linkedin.com/in/-rajat-yadav-/" },
  ]

  return (
    
      <div className="portfolio py-9">
        <div className="flex flex-col justify-center items-center p-8 pb-14">
          <h2 className='  md:text-4xl p-4 md:px-18 font-bold tracking-widest'>Things I’ve Built</h2>
          <h5 className='font-light text-[12px] ' >(more comming)</h5>
        </div>
      

      <div className="projects pt-4 m-auto w-[max(85vw,300px)]">

        {/*Populating featured projects card*/}
        <div className="cards flex flex-wrap justify-center items-center gap-4 ">
          {featuredProjects.map((project , index) => (
            <div key={index} className="card group cursor-pointer flex flex-col rounded-2xl p-3 w-[350px] bg-[var(--bg-card)] transition-all duration-300 hover:-translate-y-2">
              <a href={project.link} target='_blank' rel="noopener noreferrer">
                <div className=' w-full h-[200px] rounded-2xl relative'>
                  {(!project.complete)&&<div className=' w-full h-full absolute rounded-2xl backdrop-blur-xs bg-[#ffffff00] flex justify-center items-center'><p className=' font-bold text-3xl bg-gradient-to-r from-violet-700 rom-pink-500 via-yellow-500 to-purple-500 bg-clip-text text-transparent '>In Progress..</p></div>}
                  <img src={project.screenshoot} alt={project.name} className='w-full h-full object-cover object-center rounded-2xl' />
  
                </div>

                <div className="content p-2">
                  <h1 className='text-3xl font-bold my-2  bg-gradient-to-r from-[var(--text)] to-yellow-300 transition-all duration-300 group-hover:from-purple-500  group-hover:to-blue-30000 bg-clip-text text-transparent'>{project.name}</h1>
                  <p className='font-light text-sm'>{project.desc}</p>
                </div>
              </a>

              <div className="card-footer flex  justify-between items-center pt-4 ">
                <ul className='tech-stack flex  items-center flex-wrap gap-2 text-[12px] '>

                  {/*Populating techstack*/}
                  {project.techStack.map((tech, index)=>(
                    <li key={index} className='bg-gradient-to-l from-purple-500 to-pink-500 bg-clip-text text-transparent'>{tech}</li>
                  ))}
                </ul>

                {/* External links */}
                <div className="icon flex gap-4 justify-center items-center ">
                  {(project.link.length > 0) && <a href={project.link} target='_blank' rel="noopener noreferrer" title="External Link"><FaGithub className='transition-all duration-300 hover:scale-150' /></a>}
                  {(project.live.length > 0) && <a href={project.live} target='_blank' rel="noopener noreferrer" title="External Link"><FaExternalLinkAlt className=' transition-all duration-300 hover:scale-150' /></a>}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/*More Button */}
        <div className={`more-btn ${(isHidden && (otherProjects.length > 0)) ? '' : 'hidden'} flex justify-center md:m-[50px] m-4`}>
          <button className='border-x-2 md:px-12 px-6 font-medium tracking-wider cursor-pointer' onClick={handlehidden}>MORE</button>
        </div>
        
        <div className={`extra-space ${!isHidden ? 'm-4' : 'hidden'}`}></div>
        <div className={`more-project ${!isHidden ? 'flex flex-wrap justify-center items-center gap-3' : 'hidden'}`}>

          {/*Populating other projects card*/}
          {otherProjects.map((project, index) => (
            <div key={index} className="card cursor-pointer flex flex-col rounded-2xl p-3 w-[350px] bg-[var(--bg-card)] transition-all duration-300 hover:-translate-y-2">
              <a href={project.link} target='_blank' rel="noopener noreferrer">
                <div className=' w-full h-[200px] rounded-2xl'>
                  <img src={project.screenshoot} alt={project.name} className='w-full h-full object-cover object rounded-2xl' />
                </div>
                <div className="content p-2">
                  <h1 className='text-3xl font-bold my-2 bg-gradient-to-r from-[var(--text)] to-yellow-300 transition-all duration-300 group-hover:from-purple-500  group-hover:to-blue-30000 bg-clip-text text-transparent'>{project.name}</h1>

                  <p className='font-light text-sm'>{project.desc}</p>

                </div>
              </a>
              <div className="tech-stack flex  justify-between items-center pt-4 ">
                <ul className='flex  items-center flex-wrap gap-2 text-[12px] '>
                  {project.techStack.map((tech, index)=>(
                    <li key={index} className='bg-gradient-to-l from-purple-500 to-pink-500 bg-clip-text text-transparent'>{tech}</li>
                  ))}
                </ul>
                <div className="icon flex gap-4 justify-center items-center ">
                  {(project.link.length > 0) && <a href={project.link} target='_blank' rel="noopener noreferrer" title="External Link"><FaGithub className='transition-all duration-300 hover:scale-150' /></a>}
                  {(project.live.length > 0) && <a href={project.live} target='_blank' rel="noopener noreferrer" title="External Link"><FaExternalLinkAlt className=' transition-all duration-300 hover:scale-150' /></a>}
                </div>
              </div>

            </div>
          ))}
        </div>

          {/*Less button*/}
        <div className={`less-btn ${!isHidden ? '' : 'hidden'} flex justify-center md:m-[50px] m-4`}>
          <button className='border-x-2 md:px-12 px-6 font-medium tracking-wider cursor-pointer' onClick={handlehidden}>LESS</button>
        </div>

      </div>

    </div>
  )
}

export default Projects
