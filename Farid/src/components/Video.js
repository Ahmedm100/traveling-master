import React from "react";
import { Link } from "react-router-dom";
import './VideoStyles.css'

import spaceVideo from '../assets/Wtravel.mp4.mp4'



const Video =()=>{
    return (
        <div className="hero">
           <video autoPlay loop muted id="video">
            <source src={spaceVideo} type="video/mp4" />
           </video>
            <div className="content">
                <h1>PANDA TRAVEL</h1>
                <p>Travel the world with Panda Travel</p>

           
            <div>
            <Link to='/training' className="btn">FAQ</Link>
            <Link to='/contact' className="btn btn-light">contact</Link>

        </div>
        </div>
        </div>
    )
}

export default Video