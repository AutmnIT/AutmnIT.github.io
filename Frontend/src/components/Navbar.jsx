import { useEffect, useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Navbar() {

    //Get the theme
    const [theme, setTheme] = useState(() => {
        const th = localStorage.getItem('Theme')
        return (th) ? th : 'light';
    });
    //For mobile nav window
    const [isOpen, setIsOpen] = useState(false);

    //sideEffect to change theme
    useEffect(() => {
        //targets the <html> tag to set the theme
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

    //Navbar elements
    let Navlinks = [
        { name: 'ABOUT', to: 'about', isRoute: false },
        { name: 'PROJECTS', to: 'projects', isRoute: false },
        { name: 'WORK WITH ME', to: 'workWithMe', isRoute: false },
        { name: 'DONATE', to: 'donate', isRoute: false },
        { name: 'BLOGS', to: '/blog', isRoute: true }
    ]

    return (
        <div className="">
            <nav className='navbar bg-[var(--midnight)]  text-white flex justify-between relative p-4'>
                <div className='logo' >
                    <RouterLink to="/" aria-label="Navigate to Home" >LOGO</RouterLink>
                </div>
                {/* window navbar */}
                <div className='hidden md:flex gap-4 items-center'>
                    <ul className='flex gap-4'>
                        {/* Populate navbar */}
                        { 
                            Navlinks.map((link) => (
                                <li key={link.name}>
                                    {
                                        (link.isRoute) ? (
                                            <RouterLink to={link.to} aria-label={`Navigate to ${link.name.toLowerCase()} page`} className="">
                                                {link.name}
                                                </RouterLink>
                                        ) : (
                                            <HashLink to={`/#${link.to}`} aria-label={`Navigate to ${link.name.toLowerCase()} section`} className="">
                                                {link.name}
                                                </HashLink>
                                        )
                                    }
                                </li>
                            ))
                        }
                    </ul>
                    <div>
                        <button onClick={handleTheme} className="cursor-pointer " aria-label="Toggle theme">{(theme === 'light') ? <FaSun /> : <FaMoon />}</button>
                    </div>
                </div>

                 {/* mobile navbar*/}
                <div className="md:hidden">
                    <button onClick={handleTheme} className="cursor-pointer " aria-label="Toggle theme">{(theme === 'light') ? <FaSun /> : <FaMoon />}</button>
                </div>
                <div className=" flex flex-row md:hidden ">
                    <button className="md:hidden flex justify-end items-center z-10" onClick={handleMenu} aria-label="Toggle menu">{(!isOpen) ? <FaBars /> : <FaTimes />}</button>
                    {(isOpen) && (
                        <div className='md:hidden gap-4 flex flex-col items-center justify-center fixed top-0 bottom-0 right-0 w-[min(75vw,400px)] h-[100vh]'>
                            <ul className='flex flex-col gap-8 items-center justify-center'>
                                {
                                    Navlinks.map((link) => (
                                      
                                        <li  key={link.name} >
                                        {
                                            (link.isRoute) ? (
                                                <RouterLink to={link.to} onClick={() => (setIsOpen(false))} aria-label={`Navigate to ${link.name.toLowerCase()} page`}>{link.name}</RouterLink>
                                            ) : (
                                                <HashLink to={`/#${link.to}`} onClick={() => (setIsOpen(false))} aria-label={`Navigate to ${link.name.toLowerCase()} section`}>{link.name}</HashLink>
                                            )
                                        }
                                        </li>
                                     
                                    ))
                                }
                            </ul>
                        </div>
                    )}
                </div >
            </nav>
        </div>
    )
}

export default Navbar


