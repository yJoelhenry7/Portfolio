import { NavLink } from "react-router-dom"


const DesktopHeader = () => {
  return (
    <>
        <ul className='hidden md:flex gap-6 items-center text-xl text-bold'>
            <li className='text-white'><NavLink to='/'>Home</NavLink></li>
            {/* <li className='text-white'><a href='/#about'>About</a></li> */}
            <li className='text-white'><a href='/#experience'>Experience</a></li>
            <li className='text-white'><a href='/#skills'>Skills</a></li>
            <li className='text-white'><a href='/#projects'>Projects</a></li>
        </ul>
    </>
  )
}

export default DesktopHeader
