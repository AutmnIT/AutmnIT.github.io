import React, { useState } from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiPostman, SiRedux } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBrandNextjs } from "react-icons/tb";


function Skills() {
    //tell the button selected
    const [selected, setSelected] = useState("btn1");

    let handleSelect = (buttonId) => {
        setSelected(buttonId);
    }

    const skills = [
        { name: 'HTML', icon: <FaHtml5 className='w-15 h-15' />, proficiency: 90 },
        { name: 'CSS', icon: <FaCss3Alt className='w-15 h-15' />, proficiency: 85 },
        { name: 'JavaScript', icon: <FaJs className='w-15 h-15' />, proficiency: 80 },
        { name: 'React', icon: <FaReact className='w-15 h-15' />, proficiency: 85 },
        { name: 'Node.js', icon: <FaNodeJs className='w-15 h-15' />, proficiency: 80 },
        { name: 'Express', icon: <SiExpress className='w-15 h-15' />, proficiency: 85 },
        { name: 'MongoDB', icon: <FaDatabase className='w-15 h-15' />, proficiency: 85 },
        { name: 'Git', icon: <FaGitAlt className='w-15 h-15' />, proficiency: 85 },
        { name: 'Postman', icon: <SiPostman className='w-15 h-15' />, proficiency: 75 },
        { name: 'Tailwind', icon: <SiTailwindcss className='w-15 h-15' />, proficiency: 75 },
        { name: 'Python', icon: <FaPython className='w-15 h-15' />, proficiency: 65 },
        { name: 'VScode', icon: <VscVscode className='w-15 h-15' />, proficiency: 85 },
        
    ];

    const learning = [
        // { name: 'Redux', icon: <SiRedux className='w-15 h-15' />, proficiency: 55 },
        // { name: 'Nextjs', icon: <TbBrandNextjs className='w-15 h-15' />, proficiency: 55 },
    ]

    return (
        <div>
            <div className="skill-nav flex  justify-center p-8">
                <div className='flex rounded-4xl border-1  '>
                    <button className={`using cursor-pointer font-bold tracking-widest px-9 py-2 hover:rounded-4xl ${(selected === 'btn1') ? "bg-gradient-to-r from-purple-900 to-slate-900 rounded-4xl " : ''} `} onClick={() => handleSelect('btn1')}>USING </button>

                    <button className={`learning cursor-pointer font-bold tracking-widest px-9 py-2 hover:rounded-4xl  ${(selected === 'btn2') ? "bg-gradient-to-r from-slate-900 to-purple-900 rounded-4xl" : ''}`} onClick={() => handleSelect('btn2')}>LEARNING </button>
                </div>
            </div>

            <div className="skills container w-[max(65vw,325px)] m-auto min-h-[40vh]">
                <div className="cards flex justify-center flex-wrap gap-4 ">
                    {(selected === 'btn1') ?
                        skills.map((skill, index) => (
                            <div className="card  rounded" key={index}>
                                <div className=' m-2  justify-start p-4 transition-all duration-300 ease-in-out hover:scale-150 hover:rotate-[720deg] '>
                                    {skill.icon}
                                </div>
                                <p className=" text-sm font-semibold text-center">{skill.name}</p>
                            </div>
                        ))
                        :
                        ((learning.length) ?
                            learning.map((skill, index) => (
                                <div className="card  rounded" key={index}>
                                    <div className=' m-2  justify-start p-4 transition-all duration-300 ease-in-out hover:scale-150 hover:rotate-[720deg] '>
                                        {skill.icon}
                                    </div>
                                    <p className=" text-sm font-semibold text-center">{skill.name}</p>
                                </div>
                            ))
                            :
                            (<div className='p-16 font-bold text-xl tracking-wider'> <p>NONE: FOCUSSING ON MASTERING EXISTING SKILLS</p> </div>)
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills
