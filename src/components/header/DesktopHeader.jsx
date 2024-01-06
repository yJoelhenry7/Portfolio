import { NavLink } from "react-router-dom"


const DesktopHeader = () => {
  return (
    <>
        <ul className='hidden md:flex gap-4 items-center'>
            <li className='text-white'><NavLink to='/'>Home</NavLink></li>
            <li className='text-white'><a href='/#about'>About</a></li>
            <li className='text-white'><NavLink to='/Projects'>Projects</NavLink></li>
            <li className='text-white'><NavLink to='/Experience'>Experience</NavLink></li>
        </ul>
    </>
  )
}

export default DesktopHeader
