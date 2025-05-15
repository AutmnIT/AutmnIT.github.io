import { useEffect, useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { scroller, Link as ScrollerLink, ScrollLink } from 'react-scroll';

function Navbar() {

  const [theme, setTheme] = useState(() => {
    const th = localStorage.getItem('Theme')
    return (th) ? th : 'light';
  });
  useEffect(() => {
    if (window.innerWidth < 768) {
      setTheme("dark");
    }
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  console.log(location)

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

  let Navlinks = [
    { name: 'ABOUT', to: 'about', isRoute: false },
    { name: 'PROJECTS', to: 'projects', isRoute: false },
    { name: 'BLOGS', to: '/blog', isRoute: true },
    { name: 'WORK WITH ME', to: 'workWithMe', isRoute: false },
    { name: 'DONATE', to: 'donate', isRoute: false }
  ]
  useEffect(() => {
    if (location.pathname === '/' && location.hash != "") {
      let section = location.hash.replace('#', '');
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
      }
      )
    }
  }, [location])

  return (
    <div>
      <nav className='navbar bg-[var(--midnight)] text-white flex justify-between relative p-4 '>
        <div className='logo' >
          <RouterLink to="/">LOGO</RouterLink>
        </div>
        <div className='hidden md:flex gap-4 items-center'>
          <ul className='flex gap-4'>
            {
              Navlinks.map((link) => (
                <div key={link.name}>
                  {
                    (link.isRoute) ? (
                      <li><RouterLink to={link.to} >{link.name}</RouterLink></li>
                    ) : (
                      (location.pathname === '/') ? (
                        <li><ScrollerLink to={link.to} smooth={true} duration={500} >{link.name}</ScrollerLink></li>
                      ) : (
                        <li><RouterLink to={`/#${link.to}`} >{link.name}</RouterLink></li>
                      )
                    )
                  }
                </div>
              ))
            }
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
                {
                  Navlinks.map((link) => (
                    <div key={link.name}>
                      {
                        (link.isRoute) ? (
                          <li><RouterLink to={link.to} onClick={() => (setIsOpen(false))} >{link.name}</RouterLink></li>
                        ) : (
                          (location.pathname === '/') ? (
                            <li><ScrollerLink to={link.to} smooth={true} duration={500} onClick={() => (setIsOpen(false))} >{link.name}</ScrollerLink></li>
                          ) : (
                            <li><RouterLink to={`/#${link.to}`} onClick={() => (setIsOpen(false))} >{link.name}</RouterLink></li>
                          )
                        )
                      }
                    </div>
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


