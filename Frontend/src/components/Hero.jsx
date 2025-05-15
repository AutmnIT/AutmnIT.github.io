// if we don't use noopener noreferrer then -> window.opener.location = 'fake site' for phishng

export default function Hero() {
  return (
    <div>
      <div className='container bg-darkSlate text-white py-16 flex p-4 w-[90vw] h-[96vh]'>

        <div className="left w-[50%] flex flex-col justify-center items-center">
          <h1 className='text-4xl font-bold'>Hi, I am <span className='text-blue-500'>Rajat Yadav</span></h1>
          <p className='text-lg mt-4'>Full-Stack Developer</p>
          <a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
        <div className="right w-[50%] flex flex-col justify-center items-center">
          <img className='w-[300px] h-[300px]' src="https://avatars.githubusercontent.com/u/103546648?v=4" alt="rajat yadav" />
        </div>
      </div>
    </div>
  )
}
