import { Link } from "react-router-dom";
import Images from "../assets/Images/Images"
import Typewriter from "typewriter-effect";
import HeroBgAnimation from "./HeroBgAnimation";

const Hero = () => {
    const roles= [ "Full Stack Developer", "Android Developer", "UI/UX Designer", "Programmer" ]
    const textXl = 'text-5xl md:text-6xl font-semibold my-4'
  return (
    <div className="flex items-center justify-center flex-wrap-reverse p-4 text-white gap-16 md:gap-0" style={{background: 'rgb(25, 25, 36);',clipPath: 'polygon(0px 0px, 100% 0px, 100% 100%, 70% 95%, 0px 100%);'}}>
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
        <p className="w-full mb-4 text-xl opacity-50">I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.</p>
        <button className="resumebtn px-16 py-4 text-xl font-semibold rounded-2xl shadow-xl hover:scale-110" style={{background: 'linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%)'}}><Link to='https://drive.google.com/file/d/1C96IINgbB6MYDdTgaSQHY2IWicBt_UIR/view?usp=sharing' target='_blank'>Check Resume</Link></button>
      </div>
      <div className="basis-full md:basis-1/2 relative">
        <HeroBgAnimation />
        <img className="absolute top-1/4 left-16 rounded-xl w-2/3 md:top-32 md:left-32 md:w-2/3" src={Images.HeroImage} alt="Hero Image" />
      </div>
    </div>
  )
}

export default Hero
