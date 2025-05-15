import { useEffect, useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
// import { a } from "react-router-dom";

function Navbar() {

  const [theme, setTheme] = useState(() => {
    
    const th = localStorage.getItem('Theme')
    return (th) ? th : 'light';
  });
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if(window.innerWidth < 768){
       setTheme("dark");
    }
  }, [])
  

  useEffect(() => {
    //targets the <html> tag href set the theme
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('Theme', theme);
  }, [theme])

  let handleTheme = () => {
    setTheme((theme === 'light') ? 'dark' : 'light');
    // if(theme === 'light'){
    //   setTheme('dark');
    // }else{
    //   setTheme('light');
    // }
  }

  let handleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <nav className='navbar bg-[var(--midnight)] text-white flex justify-between relative p-4 '>
        <div className='logo' >
          <a href="/">LOGO</a>
        </div>
        <div className='hidden md:flex gap-4 items-center'>
          <ul className='flex gap-4'>
            <li><a href="/#about"  >ABOUT</a></li>
            <li ><a href="/#projects" >PROJECTS</a></li>
            <li ><a href="/blog" >BLOGS</a></li>
            <li><a href="/#workWithMe" >WORK WITH ME</a></li>
            <li><a href="/#donate" >DONATE</a></li>
          </ul>
          <div>
            <button onClick={handleTheme} className="cursor-pointer ">{(theme === 'light') ? <FaSun /> : <FaMoon />}</button>
          </div>
        </div>

        <div className=" flex flex-col md:hidden">
          <button className="md:hidden flex justify-end items-center z-10" onClick={handleMenu}>{(!isOpen) ? <FaBars /> : <FaTimes />}</button>
          {(isOpen) && (
            <div className='md:hidden gap-4 flex flex-col items-center justify-center fixed top-0 bottom-0 right-0 w-[min(75vw,400px)] h-[100vh]'>
              <ul className='flex flex-col gap-8 items-center justify-center'>
                <li><a href="/#about" onClick={()=>(setIsOpen(false))}  >ABOUT</a></li>
                <li><a href="/#skills" onClick={()=>(setIsOpen(false))}  >SKILLS</a></li>
                <li ><a href="/#projects" onClick={()=>(setIsOpen(false))}  >PROJECTS</a></li>
                <li ><a href="/blog"  onClick={()=>(setIsOpen(false))} >BLOGS</a></li>
                <li><a href="/#workWithMe" onClick={()=>(setIsOpen(false))}  >WORK WITH ME</a></li>
                <li><a href="/#donate"  onClick={()=>(setIsOpen(false))} >DONATE</a></li>
              </ul>
            </div>
          )}
        </div >

      </nav>
    </div>
  )
}

export default Navbar


