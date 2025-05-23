import React from 'react'
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {

  const [isHidden, setIsHidden] = useState(true)

  //hide extra projects
  let handlehidden = () => {
    setIsHidden(!isHidden);
  }


  let featuredProjects = [
    { screenshoot: "\ChatGPT Image May 15, 2025, 11_39_27 PM.png", link: "https://github.com/AutmnIT", name: "Teskisky Mart", desc: "Tekisky Mart is a web-based platform that allows users to search, explore, and purchase a wide range of products from various providers, offering a seamless and efficient shopping experience.", techStack: ["react", "tailwind", "javascript"], live: "https://www.linkedin.com/in/-rajat-yadav-/" },
  ]

  let otherProjects = [
    // { screenshoot: "\ChatGPT Image May 15, 2025, 11_39_27 PM.png", link: "https://github.com/AutmnIT", name: "Teskisky Mart", desc: "Tekisky Mart is a web-based platform that allows users to search, explore, and purchase a wide range of products from various providers, offering a seamless and efficient shopping experience.", techStack: ["react", "tailwind", "javascript"], live: "https://www.linkedin.com/in/-rajat-yadav-/" },
  ]

  return (
    
      <div className="portfolio py-9">
        <div className="flex justify-center p-8 ">
          <h2 className=' border-4 md:text-3xl p-4 md:px-18 font-bold tracking-widest'>P O R T F O L I O</h2>
        </div>
      

      <div className="projects pt-4 m-auto w-[max(85vw,300px)]">

        {/*Populating featured projects card*/}
        <div className="cards flex flex-wrap justify-center items-center gap-4 ">
          {featuredProjects.map((project , index) => (
            <div key={index} className="card group cursor-pointer flex flex-col rounded-2xl p-3 w-[350px] bg-[var(--bg-card)] transition-all duration-300 hover:-translate-y-2">
              <a href={project.link} target='_blank' rel="noopener noreferrer">
                <div className=' w-full h-[200px] rounded-2xl'>
                  <img src={project.screenshoot} alt={project.name} className='w-full h-full object-cover object-center rounded-2xl' />
                </div>

                <div className="content p-2">
                  <h1 className='text-3xl font-bold my-2  bg-gradient-to-r from-white to-white group-hover:from-purple-700 transition-all duration-300 group-hover:to-slate-500 bg-clip-text text-transparent'>{project.name}</h1>
                  <p className='font-light text-sm'>{project.desc}</p>
                </div>
              </a>

              <div className="tech-stack flex  justify-between items-center pt-4 ">
                <ul className='flex  items-center flex-wrap gap-2 text-[12px] '>

                  {/*Populating techstack*/}
                  {project.techStack.map((tech, index)=>(
                    <li key={index} className='bg-gradient-to-l from-purple-500 to-pink-500 bg-clip-text text-transparent'>{tech}</li>
                  ))}
                </ul>
                <div className="icon flex gap-4 justify-center items-center ">
                  <a href={project.link} target='_blank' rel="noopener noreferrer" title="External Link"><FaGithub className='transition-all duration-300 hover:scale-150' /></a>
                  <a href={project.live} target='_blank' rel="noopener noreferrer" title="External Link"><FaExternalLinkAlt className=' transition-all duration-300 hover:scale-150' /></a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/*Show ohter projects if exist */}
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
                  <h1 className='text-3xl font-bold my-2  group-hover:from-purple-700 transition-all duration-300 group-hover:to-slate-900'>{project.name}</h1>

                  <p className='font-light text-sm'>{project.desc}</p>

                </div>
              </a>
              <div className="tech-stack flex  justify-between items-center pt-4 ">
                <ul className='flex  items-center flex-wrap gap-2 text-[12px] '>
                  {project.techStack.map((tech, index)=>(
                    <li key={index} className='bg-gradient-to-l from-purple-500 to-pink-500'>{tech}</li>
                  ))}
                </ul>
                <div className="icon flex gap-4 justify-center items-center ">
                  <a href={project.link} target='_blank' rel="noopener noreferrer" title="External Link"><FaGithub className='transition-all duration-300 hover:scale-150' /></a>
                  <a href={project.live} target='_blank' rel="noopener noreferrer" title="External Link"><FaExternalLinkAlt className='transition-all duration-300 hover:scale-150' /></a>
                </div>
              </div>

            </div>
          ))}
        </div>

          {/*Hide ohter projects if exist */}
        <div className={`less-btn ${!isHidden ? '' : 'hidden'} flex justify-center md:m-[50px] m-4`}>
          <button className='border-x-2 md:px-12 px-6 font-medium tracking-wider cursor-pointer' onClick={handlehidden}>LESS</button>
        </div>

      </div>

    </div>
  )
}

export default Projects
