import { useState } from "react";
import { Link } from "react-router-dom";
import ResumeDrawer from "./ResumeDrawer";
import Images from "../assets/Images/Images"
import Typewriter from "typewriter-effect";
import HeroBgAnimation from "./HeroBgAnimation";
import { GitHub, LinkedIn } from '@mui/icons-material';

const Hero = () => {
    const roles= [ "Full Stack AI Engineer", "Full Stack Developer", "Builder of AI-native products" ]
    const textXl = 'text-5xl md:text-6xl font-semibold my-4'
    const [resumeOpen, setResumeOpen] = useState(false);
  return (
    <>
    <div className="flex items-center justify-center flex-wrap-reverse px-4 pb-4 pt-24 text-white gap-16 md:gap-0" style={{background: 'rgb(25, 25, 36);',clipPath: 'polygon(0px 0px, 100% 0px, 100% 100%, 70% 95%, 0px 100%);'}}>
      <div className="md:basis-1/2 md:pl-52 text-center md:text-left">
        <h1 className={textXl}>Hi, I am</h1>
        <h1 className={textXl}>Joel Henry</h1>
        <h1 className="flex justify-center md:justify-normal gap-2 my-4 text-xl md:text-4xl font-semibold">
         I am a
         <span className="text-purplish cursor-pointer">
            <Typewriter
                options={{
                    strings: roles,
                    autoStart: true,
                    loop: true,
                }}
             />
         </span>
        </h1>
        <p className="w-full mb-8 text-xl opacity-50">I build AI-native products with React, Next.js and FastAPI. Currently a Full Stack Developer at Mondee, with 3+ years of experience shipping web apps, AI agents and cloud-deployed services.</p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <button type="button" onClick={() => setResumeOpen(true)} className="resumebtn px-8 py-4 text-xl font-semibold rounded-2xl shadow-xl hover:scale-110" style={{background: 'linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%)'}}>Check Resume</button>
          <button className="px-8 py-4 text-xl font-semibold rounded-2xl shadow-xl hover:scale-110 border-2 border-purplish"><a href="#contact">Contact Me</a></button>
        </div>
        <div className="mt-4 flex items-center">
            <Link to='https://github.com/yJoelhenry7' aria-label='Github Link'  target='_blank'> <GitHub style={{fontSize: '2.2rem'}} /></Link>
            <Link to='https://www.linkedin.com/in/joel-henry-yellamelli/' aria-label='Linkedin Link' target='_blank'> <LinkedIn style={{fontSize: '2.2rem'}} /></Link>
          </div>
      </div>
      <div className="basis-full md:basis-1/2 relative">
        <HeroBgAnimation />
        <img className="absolute top-1/4 left-16 rounded-xl w-2/3 h-2/3 object-contain p-2 border-2 border-white border-dotted border-opacity-5 rounded md:top-32 md:left-32 md:w-2/3" src={Images.HeroImage} alt="Hero Image" />
      </div>
    </div>
    <ResumeDrawer open={resumeOpen} setOpen={setResumeOpen} />
    </>
  )
}

export default Hero
