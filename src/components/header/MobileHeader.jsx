/* eslint-disable react/prop-types */
import { FaXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const MobileHeader = ({ showNavbar, active }) => {
  return (
    <>
    <div className='md:hidden absolute right-1 z-10 p-4'>
       <ul className = {active ? 'text-xl text-white flex-col flex items-center fixed inset-0 justify-center left-1/3 gap-8 p-8 bg-black/60 backdrop-blur-md md:hidden': "hidden"}>
          <FaXmark className='scale-150' onClick={ showNavbar } />
          <li className='text-white'><NavLink to='/'>Home</NavLink></li>
          <li className='text-white'><NavLink to='/#about'>About</NavLink></li>
          <li className='text-white'><NavLink to='/Projects'>Projects</NavLink></li>
          <li className='text-white'><NavLink to='/Experience'>Experience</NavLink></li>
        </ul>
    </div>
    </>
  )
}

export default MobileHeader
