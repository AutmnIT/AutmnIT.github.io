import { useEffect, useRef, useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import logo from "../assets/favicon.svg";
import { Link } from "react-router-dom";

function Navbar() {

    const [shownav, setShownav] = useState(true);
    const lastScrollY = useRef(window.scrollY);

    //Get the theme
    const [theme, setTheme] = useState(() => {
        const th = localStorage.getItem('Theme')
        return (th) ? th : 'light';
    });

    //For mobile nav window
    const [isOpen, setIsOpen] = useState(false);


    //side effect to hide/unhide navbar on scroll
    useEffect(() => {

        const handleScroll = () => {
            if (lastScrollY.current < window.scrollY) {
                setShownav(false);
            } else {
                setIsOpen(false);
            }
            setShownav(true); //to close mobile menu in case nav hide/unhide
            lastScrollY.current = window.scrollY;
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, [])

    //sideEffect to change theme
    useEffect(() => {
        //targets the <html> tag to set the theme
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('Theme', theme);
    }, [theme])

    //hande theme
    let handleTheme = () => {
        setTheme((theme === 'light') ? 'dark' : 'light');
    }

    //handle mobile nav window
    let handleMenu = () => {
        setIsOpen(!isOpen)
    }

    //Navbar elements
    let Navlinks = [
        { name: 'ABOUT', to: 'about', isRoute: false },
        { name: 'PROJECTS', to: 'projects', isRoute: false },
        { name: 'WORK WITH ME', to: 'workWithMe', isRoute: false },
        // { name: 'DONATE', to: 'donate', isRoute: false },
        { name: 'BLOGS', to: '/blog', isRoute: true }
    ]

    //css class
    let navUpClass = (shownav) ? "translate-y-0" : '-translate-y-full';
    return (
        <>
            <nav className={`navbar bg-[var(--bg-nav)] bg-opacity-40  text-sm font-medium tracking-wider flex justify-between relative p-2 px-10 xl:px-20 ${navUpClass} `}>
                <div className='logo' >
                    <HashLink to="/#hero" aria-label="Navigate to Home" >
                        <img src={logo} alt="logo" className="  w-8 transition-all duration-300 hover:scale-110" />
                    </HashLink>
                </div>
                {/* window navbar */}
                <div className='hidden md:flex lg:gap-4 xl:gap-6 gap-2 items-center'>
                    <ul className='flex lg:gap-4 xl:gap-6 gap-2'>
                        {/* Populate navbar */}
                        {
                            Navlinks.map((link) => (
                                <li key={link.name} className="hover:text-violet-600">
                                    {
                                        (link.isRoute) ? (
                                            <Link to={link.to} aria-label={`Navigate to ${link.name.toLowerCase()} page`} className="">
                                                {link.name}
                                            </Link>
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


                {/* mobile menu*/}
                <div className=" flex flex-row md:hidden ">
                    <div className="toggle flex justify-center items-center gap-6 z-10 ">
                        <div className="md:hidden">
                            <button onClick={handleTheme} className="cursor-pointer " aria-label="Toggle theme">{(theme === 'light') ? <FaSun /> : <FaMoon />}</button>
                        </div>
                        <button className="md:hidden flex justify-end items-center cursor-pointer" onClick={handleMenu} aria-label="Toggle menu">{(!isOpen) ? <FaBars /> : <FaTimes />}</button>
                    </div>

                    {/* if toogle or screen moves menu closes */}
                    {(isOpen && shownav) && (
                        <div className='md:hidden gap-4 flex flex-col items-center justify-center fixed top-0 bottom-0 right-0 w-[min(75vw,400px)] h-[100vh] bg-[var(--bg-nav)]'>
                            <ul className='flex flex-col gap-8 items-center justify-center'>
                                {
                                    Navlinks.map((link) => (

                                        <li key={link.name} className="hover:text-violet-600" >
                                            {
                                                (link.isRoute) ? (
                                                    <Link to={link.to} onClick={() => (setIsOpen(false))} aria-label={`Navigate to ${link.name.toLowerCase()} page`}>{link.name}</Link>
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
        </>
    )
}

export default Navbar


