import { useState } from "react";
import DesktopHeader from "./DesktopHeader"
import MobileHeader from "./MobileHeader"
import { FaBars } from 'react-icons/fa6';


const Header = () => {
    const [active,Setactive] = useState(false);

    const showNavbar = () => {
        Setactive(!active);
    }
  return (
    <>
    <header className='bg-black'>
      <nav className='flex items-center justify-between p-3'>
        <h1 className='text-2xl text-white'>Portfolio</h1>
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
