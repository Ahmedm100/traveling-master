import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import {FaBars, FaTimes} from 'react-icons/fa'
import '../components/Styles/NavbarStyles.css'
import { auth } from "./config/firebase";
import { logOut } from "./auth/Auth";

const Navbar =()=>{

    const [click, setClick] = useState(false);
    const currentUser = auth.currentUser;
    const navigate = useNavigate();
  
    const handleClick = () => setClick(!click);
return (
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
        {currentUser ? (
        <button onClick={() => logOut(navigate)} className="logout-button">
          Logout
        </button>
      ) : (
        <Link to="/login">
          <button className="login-button">Sign In</button>
        </Link>
      )}
    </ul>
    <div className="hamburger" onClick={handleClick}>
      {click ?(<FaTimes size={20} style ={{color:'#fff'}} />) :( <FaBars size={20} style ={{color:'#fff'}} />)}
    </div>
    
</div>
 )
}
export default Navbar;