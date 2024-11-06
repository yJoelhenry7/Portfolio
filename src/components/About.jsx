/* eslint-disable react/no-unescaped-entities */
import { GitHub, LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
  >
      <div className="text-white" style={{background:'rgb(24 23 37)'}}>
          <div className="flex justify-center px-4 py-8 md:p-32 flex-wrap">
              <div className='flex items-center justify-center pb-4 md:block md:pb-0'>
                <img className="border-2 border-purplish w-2/3 p-4" src="https://avatars.githubusercontent.com/u/86186443?v=4" alt="joel image" />
              </div>
              <div id="about" className="w-full md:w-1/2">
                  <h1 className="text-3xl font-bold">About Me</h1>
                  <hr className="mb-8 mt-2" />
                  <p className="text-lg mb-4">
                    Hello, I am Joel Henry.
                  
                  </p>
                  <p className="text-lg mb-1">
                    Software Engineer @<a href='https://www.oneconvergence.com/' className='font-semibold'>OneConvergence</a>
                  </p>
                  <p className="text-lg mb-2">FullStack Dev | Andriod Dev | Machine Learning </p>
                  <div>
                    <Link to='https://github.com/yJoelhenry7' aria-label='Github Link'  target='_blank'> <GitHub style={{fontSize: '2.2rem'}} /></Link>
                    <Link to='https://www.linkedin.com/in/joel-henry-yellamelli/' aria-label='Linkedin Link' target='_blank'> <LinkedIn style={{fontSize: '2.2rem'}} /></Link>
                  </div>
              </div>
          </div>
      </div>
    </motion.div>
  )
}

export default About
