import { Link } from "react-router-dom"


const DesktopHeader = () => {
  return (
    <>
        <ul className='hidden md:flex gap-4 items-center'>
            <li className='text-white'><Link to='/'>Home</Link></li>
            <li className='text-white'><Link to='/AboutMe'>About Me</Link></li>
            <li className='text-white'><Link to='/Projects'>Projects</Link></li>
            <li className='text-white'><Link to='/Experience'>Experience</Link></li>
        </ul>
    </>
  )
}

export default DesktopHeader
