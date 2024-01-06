/* eslint-disable react/no-unescaped-entities */
import { GitHub, LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="text-white" style={{background:'rgb(24 23 37)'}}>
        <div className="flex justify-center p-32 flex-wrap">
            <div>
               <img className="border-2 border-purplish w-2/3 p-4" src="https://avatars.githubusercontent.com/u/86186443?v=4" alt="joel image" />
            </div>
            <div  id="about" className="w-1/2">
                <h1 className="text-3xl font-bold">About Me</h1>
                <hr className="mb-8 mt-2" />
                <p className="text-lg mb-4">
                  Hello, I'm Joel, a Final Year AI&DS undergrad at VIT, BHIMAVARAM.
                </p>
                <p className="text-lg mb-4">
                  I am a self-taught programmer.I am Very Enthusiastic to Learn New Technologies and Implement them to Create More Optimised and Useful Products
                </p>
                <p className="text-lg">Interested in MERN STACK, Machine Learning and Data Science</p>
                <div>
                   <Link to='https://github.com/yJoelhenry7'  target='_blank'> <GitHub style={{fontSize: '2.2rem'}} /></Link>
                   <Link to='https://www.linkedin.com/in/joel-henry-yellamelli/' target='_blank'> <LinkedIn style={{fontSize: '2.2rem'}} /></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
