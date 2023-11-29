import React from "react";
import '../components/Styles/PricingStyles.css'
import { Link } from "react-router-dom";
const Pricing =()=>{
return(

  <div className="pricing">
    <div className="card-container">
        <div className="card">
            <h3>- Basic -</h3>
            <span className="bar"></span>
            <p className="btc">6000 kr</p>
            <p>- 3 days -</p>
            <p>- Simple Inclusive -</p>
            <p>- Standard room -</p>
            <p>- Simple chair -</p>
            <Link to='/bookning' className="btn">Book</Link>

        </div>
        <div className="card">
            <h3>- Suite -</h3>
            <span className="bar"></span>
            <p className="btc">14000 kr</p>
            <p>- 4 days -</p>
            <p>- Regular Inclusive -</p>
            <p>- Suite with pool -</p>
            <p>- LAN tournaments -</p>
            <Link to='/bookning' className="btn">Book</Link>

        </div>

        <div className="card">
            <h3>- Excutive -</h3>
            <span className="bar"></span>
            <p className="btc">20000 kr</p>
            <p>- 5 days -</p>
            <p>- All Inclusive -</p>
             <p></p><br></br>
           
             <p></p><br></br>
             
           <Link to='/bookning' className="btn">Book</Link>

        </div>
    </div>
  </div>  
)


}
export default Pricing