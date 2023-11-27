import React,{useState} from "react";
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from 'react-icons/fa'
import '../components/Styles/NavbarStyles.css'
import Login from "./auth/Login";


const Navbar =()=>{

    const[click, setClick]=useState(false)
    const handleClick =()=> setClick(!click)

return(
<div className="header">
   <Link to='/'><h1> PANDA TRAVEL</h1></Link> 
    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/pricing'>Pricing</Link>
        </li>
        <li>
            <Link to='/training'>FAQ</Link>
        </li>
        <li>
            <Link to='/contact'>Contact</Link>
        </li>
        <li>
            <Link to='/Login'>Login</Link>
        </li>

    </ul>
    <div className="hamburger" onClick={handleClick}>
      {click ?(<FaTimes size={20} style ={{color:'#fff'}} />) :( <FaBars size={20} style ={{color:'#fff'}} />)}
    
       

    </div>
</div>


);
}

export default Navbar