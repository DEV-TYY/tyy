import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { FiSun } from "react-icons/fi"
import React, { useState } from 'react'
import "./Navbar.css"


const Navbar = () => {
  const [isMenuActive, setISMneuActive] = useState(false);
  const toggleMenu = () => {
    setISMneuActive(!isMenuActive);
  }
  return (
    <header>
      <nav className="flex between wrapper navbar">
         <a href="#" className='logo'>
            <span>T</span>Y
         </a> 
         {/* DESTOP MENU */}
         <ul className="flex gap-2 desktop-menu">
             <li>
                 <a href="#" className="link">Home</a>
             </li>
             <li>
                 <a href="#" className="link">Service</a>
             </li>
             <li>
                 <a href="#" className="link">About Me</a>
             </li>
             <li>
                 <a href="#" className="link">Testimonials</a>
             </li>
             <li>
                 <a href="#" className="link">Contact Me</a>
             </li>
         </ul>
         <div className="flex gap-2 nav-action">
             <a href="#" className="icon-container border-inverse"><FiSun/></a>
             <a href="#" className="btn">Let's Talk</a>
             <a href="#" className="hamberger"onClick={toggleMenu}>
                {isMenuActive ? <FaXmark/> : <FaBarsStaggered /> }
             </a>
         </div>
        {/* MOBILE MENU */}
          <ul className={`mobile-menu ${isMenuActive ? 'mobile-menu-active' : null}`}>
             <li>
                 <a href="#" className="link">Home</a>
             </li>
             <li>
                 <a href="#" className="link">Service</a>
             </li>
             <li>
                 <a href="#" className="link">About Me</a>
             </li>
             <li>
                 <a href="#" className="link">Testimonials</a>
             </li>+
             <li>
                 <a href="#" className="link">Contact Me</a>
             </li>
             <li>
                <a href="#" className="btn">Let's Talk</a>
             </li>
         </ul>
      </nav>
    </header>
  )
}

export default Navbar
