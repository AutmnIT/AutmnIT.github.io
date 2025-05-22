// if we don't use noopener noreferrer then -> window.opener.location = 'fake site' for phishng
import my from "../assets/IMG-20250509-WA0006-Photoroom.png";
import { LuLinkedin, LuInstagram, LuGithub } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { HashLink } from 'react-router-hash-link';


export default function Hero() {
  const socialMedia = [
    { name: "LinkedIn", logo: <LuLinkedin />, link: "https://linkedin.com/in/-rajat-yadav-/" },
    { name: "Instagram", logo: <LuInstagram />, link: "https://www.instagram.com/autumn.storm_/" },
    { name: "Twitter", logo: <FaXTwitter />, link: "https://x.com/RajatYa86769631" },
    { name: "Github", logo: <LuGithub />, link: "https://github.com/AutmnIT" },
  ];

  return (
    <>
      {/* UI for window */}
      <div className="hidden relative w-full h-[100vh] md:flex overflow-hidden">
        {/* Left: Text + Social */}
        <div className="w-1/2 flex flex-col gap-8 justify-center items-center bg-gray-400 [clip-path:polygon(0_0,100%_0,80%_100%,0%_100%)]">
          <div className="px-4">
            <div className="text-2xl mx-2">Hi, I am</div>
            <div className="text-6xl font-bold tracking-wider">Rajat Yadav</div>
            <p className="text-lg text-center mt-4 tracking-wider text-gray-200">Full-Stack Developer</p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-medium border-4 p-2 px-8 transition-all duration-200 hover:scale-105"
            >
              R e s u m e
            </a>
            <div className="flex gap-5 text-white text-2xl">
              {socialMedia.map((media) => (
                <a
                  key={media.name}
                  href={media.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all hover:scale-110"
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
      <div className="mobile md:hidden relative  w-full h-[100vh] bg-black overflow-hidden ">
        <div className="top ">
          <div className="absolute -right-36  items-center max-h-[80vh] ">
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
              <div className=" ">Hi, I am</div>
              <div className="text-xl font-bold tracking-wider">Rajat Yadav</div>
              <p className=" tracking-wider text-gray-200 mb-4">Full-Stack Developer</p>
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
    </>
  );
}

