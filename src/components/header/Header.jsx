import { useState } from "react";
import DesktopHeader from "./DesktopHeader"
import MobileHeader from "./MobileHeader"
import { FaBars } from 'react-icons/fa6';
import { Link } from "react-router-dom";


const Header = () => {
    const [active,Setactive] = useState(false);

    const showNavbar = () => {
        Setactive(!active);
    }
  return (
    <>
    <header className='bg-black bg-opacity-50 fixed w-full z-10'>
      <nav className='flex items-center justify-between p-3'>
        <Link to='/'><h1 className='text-4xl ml-4 text-white' style={{fontFamily:"Great Vibes"}}>Joelhenry.</h1></Link>
        <DesktopHeader />
        <div className='md:hidden'>
          <FaBars className='scale-150 text-white' onClick={ showNavbar }/>
          <MobileHeader showNavbar={showNavbar} active={active}/>
        </div>
      </nav>
    </header>
    </>
  )
}

export default Header
