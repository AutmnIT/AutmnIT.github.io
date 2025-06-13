// if we don't use noopener noreferrer then -> window.opener.location = 'fake site' for phishng

import my from "../assets/Myimg/1.png";

import { LuLinkedin, LuInstagram, LuGithub } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import hand from "../assets/waving-hand.1da6fc7a.gif";


export default function Hero() {
  const socialMedia = [
    { name: "LinkedIn", logo: <LuLinkedin />, link: "https://linkedin.com/in/-rajat-yadav-/" },
    { name: "Instagram", logo: <LuInstagram />, link: "https://www.instagram.com/autumn.storm_/" },
    { name: "Twitter", logo: <FaXTwitter />, link: "https://x.com/RajatYa86769631" },
    { name: "Github", logo: <LuGithub />, link: "https://github.com/AutmnIT" },
  ];

  return (
    < div className="text-[var(--text)]">
      {/* UI for window */}
      <div className="hidden relative w-full h-[100vh] md:flex overflow-hidden">
        {/* Left: Text + Social */}
        <div className="w-1/2 flex flex-col gap-8 justify-center items-center bg-gray-400 [clip-path:polygon(0_0,100%_0,80%_100%,0%_100%)]">
          <h1 className="px-4">
            <div className="text-2xl  flex  gap-1"> <img src={hand} alt="hand-gif" className="w-8 h-8"/> <p>Hi, I am</p></div>
            <div className="text-6xl font-bold tracking-wider ">Rajat Yadav</div>
            <p className="text-lg text-center mt-4 tracking-wider  font-medium text-[var(--bg-logo)] ">Full-Stack Developer</p>
          </h1>

          <div className="flex flex-col items-center gap-6">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-medium border-4 p-2 px-8 transition-all hover:scale-105 hover:text-violet-600"
            >
              R e s u m e
            </a>
            <div className="flex gap-5  text-2xl ">
              {socialMedia.map((media) => (
                <a
                  key={media.name}
                  href={media.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all hover:scale-110 hover:text-violet-600"
                  aria-label={media.name}
                >
                  {media.logo}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Right: Image */}
        <div className="w-1/2 flex justify-center items-center bg-black [clip-path:polygon(100%_0,20%_0,0%_100%,100%_100%)]">
          <img
            src={my}
            alt="Rajat Yadav"
            className="h-[90vh] object-contain absolute bottom-0"
          />
        </div>
      </div>
      
      {/* UI for mobile */}
      <div className="mobile md:hidden relative  w-full h-[90vh] bg-black overflow-hidden ">
        <div className="top ">
          <div className="absolute -right-36 bottom-0 items-center max-h-[80vh] ">
            <img
              src={my}
              alt="Rajat Yadav"
              className=" object-contain brightness-110"
            />
          </div>
        </div>
        <div className="bottom absolute bottom-0 h-1/2 w-full  opacity-50 bg-gray-500 [clip-path:polygon(0_50%,100%_25%,100%_100%,0%_100%)]"/>
        <div className="content absolute bottom-0 z-10 w-full flex justify-between p-4 items-end">
            <div className="px-4">
              <div className="flex gap-1 items-center"><img src={hand} alt="hand-gif" className="w-6 h-6"/><p>Hi, I am</p></div>
              <div className="text-xl font-bold tracking-wider">Rajat Yadav</div>
              <p className=" tracking-wider font-medium text-[var(--bg-logo)] mb-4">Full-Stack Developer</p>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className=" border-2 p-1 px-3  "
              >
                Resume
              </a>
            </div>

            <div className="flex flex-col gap-4 text-white text-2xl px-4">
              {socialMedia.map((media) => (
                <a
                  key={media.name}
                  href={media.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={media.name}
                >
                  {media.logo}
                </a>
              ))}

            </div>
          </div>
      </div>
    </div >
  );
}

