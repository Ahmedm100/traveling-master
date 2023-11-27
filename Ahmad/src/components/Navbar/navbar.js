import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/Panda2.png'; //logo bilden
import contactImg from '../../assets/contact.png' //contact iconen
import { Link } from 'react-router-dom';
import menu from '../../assets/menu.png';


const Navbar = () => {
  const [showMenu , setShowMenu] = useState(false);
  return (
  
    <nav className="navbar">
         <img src={logo} alt="logo" className='logo'/>
         <div className="desktopMenu">
            <Link activeClass='active' to= '/intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to= '/skills' spy={true} smooth={true} offset={-15} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to= '/games' spy={true} smooth={true} offset={-1} duration={500} className="desktopMenuListItem">Game</Link>
            <Link activeClass='active' to= '/contact' spy={true} smooth={true} offset={-1} duration={500} className="desktopMenuListItem">Contact</Link>
            
            
          </div>
           

                <img src={menu} alt="Menu" className='mobMenu' onClick={() =>setShowMenu(!showMenu)}/>
         <div className="navMenu" style={{display:showMenu? 'flex':'none'}}>
            <Link activeClass='active' to= 'intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem"onClick={() =>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to= 'skills' spy={true} smooth={true} offset={-15} duration={500} className="listItem"onClick={() =>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to= 'games' spy={true} smooth={true} offset={-7} duration={500} className="listItem"onClick={() =>setShowMenu(false)}>Game</Link>
            <Link activeClass='active' to= 'clients' spy={true} smooth={true} offset={-1} duration={500} className="listItem"onClick={() =>setShowMenu(false)}>Clients</Link>
            <Link activeClass='active' to= 'contact' spy={true} smooth={true} offset={-1} duration={500} className="listItem"onClick={() =>setShowMenu(false)}>Contact</Link>
          </div>

    </nav> 
  )
}

export default Navbar;