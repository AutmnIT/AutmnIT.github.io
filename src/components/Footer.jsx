import { useLocation } from 'react-router-dom';
import { LuLinkedin, LuInstagram, LuGithub } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { PiRocketBold } from "react-icons/pi";
import { useInViewSection } from '../hooks/useInViewSection';
import { Link } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();

    const socialMedia = [
        { name: "Linkdin", logo: <LuLinkedin />, link: "https://linkedin.com/in/-rajat-yadav-/" },
        { name: "Instagram", logo: <LuInstagram />, link: "https://www.instagram.com/autumn.storm_/" },
        { name: "Twitter", logo: <FaXTwitter />, link: "https://x.com/RajatYa86769631" },
        { name: "Github", logo: <LuGithub />, link: "https://github.com/AutmnIT" },
    ]

    //Keep check on page section
    const activeSection = useInViewSection(['hero', 'about', 'projects', 'workWithMe']);

    const scrollToTop = () => (
        window.scrollTo({ top: 0, behavior: 'smooth' })
    )

    return (
        <>
            <style>
                {`
                    @keyframes jump {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                    }
                    .jump {
                    animation: jump 0.8s ease-in-out infinite;
                    }
                    .jump-on-hover:hover {
                    animation: jump 0.8s ease-in-out infinite;
                    }
                `}
            </style>


            {/* window view left/right side */}
            <div className={`hidden transition-all duration-300  md:flex ${(activeSection === 'hero') ? " opacity-0" : ""} `}>
                <div className="fixed bottom-0 left-8 flex flex-col items-center justify-center space-y-3 z-50">
                    <div className=" text-sm text-gray-500 flex flex-col items-center gap-6">
                        <div className="social flex flex-col gap-6">
                            {socialMedia.map((media) => (
                                <a key={media.name} href={media.link} target="_blank" rel='noopener noreferrer' className='font-bold text-xl  jump-on-hover  hover:text-violet-600 ' > {media.logo}</a>
                            ))}
                        </div>
                        <div className="w-px h-24 bg-gray-400"></div>
                    </div>
                </div>

                <div className="fixed bottom-0 -right-10 flex flex-col items-center space-y-3 z-50">
                    <div className=" text-sm text-gray-500 flex flex-col items-center justify-center gap-24 ">
                        <div className="text-sm text-gray-500 rotate-90 tracking-widest hover:text-violet-600">
                            <Link to="mailto:mbmrajatit@gmail.com">
                                mbmrajatit@gmail.com
                            </Link>
                        </div>
                        <div className="w-px h-24 bg-gray-400"></div>
                    </div>
                </div>
            </div>


            <footer className="w-full md:mt-10 md:p-12 text-center text-sm text-gray-400 flex flex-col justify-center items-center ">

                <div className="group back flex flex-col justify-center items-center py-6 md:py-1 cursor-pointer" onClick={scrollToTop}>
                    <div className="logo jump  text-2xl"><PiRocketBold /></div>
                    <p className='tracking-widest text-[10px] font-medium opacity-95 md:opacity-0 group-hover:opacity-95'>BACK TO TOP</p>
                </div>


                {/*Media of Mobile view */}
                <div className="mb-2 flex justify-center items-center gap-5 md:hidden pb-4">
                    {socialMedia.map((media) => (
                        <a key={media.name} href={media.link} target="_blank" rel='noopener noreferrer' className='font-bold text-xl transition-all hover:scale-125' > {media.logo}</a>
                    ))}~
                </div>

                <p>&copy; 2025 Rajat yadav. All rights reserved.</p>
            </footer>
        </>
    );
};

export default Footer;

