import { Link } from "react-router-dom";
import Images from "../assets/Images/Images"
import Typewriter from "typewriter-effect";

const Hero = () => {
    const roles= [ "Full Stack Developer", "Android Developer", "UI/UX Designer", "Programmer" ]
    const textXl = 'text-6xl font-semibold'
  return (
    <div className="flex items-center justify-center flex-wrap p-4 text-white">
      <div className="basis-1/2">
        <div className="my-4">
            <h1 className={textXl}>Hi, I am</h1>
            <h1 className={textXl}>Joel Henry</h1>
        </div>
        <h1 className="flex gap-2 my-4 text-4xl font-semibold">
         I am a
         <span className="text-purplish">
            <Typewriter
                options={{
                    strings: roles,
                    autoStart: true,
                    loop: true,
                }}
             />
         </span>
        </h1>
        <p className="w-2/3">I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.</p>
        <button style={{background: 'linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%)'}}><Link to='https://drive.google.com/file/d/1C96IINgbB6MYDdTgaSQHY2IWicBt_UIR/view?usp=sharing' target='_blank'>Resume</Link></button>
      </div>
      <div className="basis-1/4">
        <img className="w-full" src={Images.HeroImage} alt="Hero Image" />
      </div>
    </div>
  )
}

export default Hero
