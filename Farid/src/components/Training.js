import React from "react";
import '../components/Styles/TrainingStyles.css'

import { Link } from "react-router-dom";

import Good from '../assets/bild1.jpeg.jpeg'
import Good1 from '../assets/bild2.jpeg.jpg'

const Training =()=>{
return(
<div className="training">
    <div className="left">
        <h1>FAQ</h1>
        <p>How do I book my ticket?</p>
        <p>How  do I get my refund?</p>
        <p>Can I cancel my ticket?</p>
        <p>What's included in the pre-booked insurance?</p>
         <Link to='/contact'><button className="btn">Contact</button></Link>
    </div>
    <div className="right">
        <div className="img-container">
            <div className="imag-stack top">
                <img src={Good} className="img" alt="" />
            </div>
            <div className="imag-stack bottom">
                <img src={Good1} className="img" alt="" />
            </div>
        </div>

    </div>

</div>

)

}
export default Training;