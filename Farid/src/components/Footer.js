import React from "react"
import '../components/Styles/FooterStyles.css'
import {FaFacebook,FaLinkedin,  FaMailBulk,FaPhone,FaSearchLocation,FaTwitter} from 'react-icons/fa'                  
import { Link } from "react-router-dom"
const Footer=()=>{
return(
<div className="footer">

    <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaSearchLocation size={20} style={{color:'#ffffff', marginRight:'2rem'}} />
                
                <div>
                <p> Drottninggatan 59</p>
                <h4>602 32 Norrköping</h4>
                </div>
            </div>
            <div className="phone">
                <h4><FaPhone size={20} style={{color:'#ffffff', marginRight:'2rem'}} />+46 071-234-1234</h4>
            </div>
             <div className="email">
                <h4><FaMailBulk size={20} style={{color:'#ffffff', marginRight:'2rem'}} />info@pandatravel.com</h4>

             </div>
             <div className="right">
                <h4>About the company</h4>
                <p>Panda Travel is a company that makes it easier to travel. With only a few steps, you could be on the next plane to your dream Gaming destination. 
    
                </p>
                <div className="social">
                    <FaFacebook size={30} style={{color:'#ffffff', marginRight:'1rem'}} />
                    <FaTwitter size={30} style={{color:'#ffffff', marginRight:'1rem'}} />
                    <FaLinkedin size={30} style={{color:'#ffffff', marginRight:'1rem'}} />
                    <Link to='http://localhost:3000'>Pandahub</Link>

                </div>
               
            
        
             </div>
        </div>
    </div>
</div>


)




}

export default Footer;