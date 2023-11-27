import React from "react";
import './Bookning1Styles.css'
import { Link } from "react-router-dom";
const Bookning1 =()=>{
return (

<div className="form">
    <form>
       <label>Fname</label>
       <input type="text"></input>
       <label>Lname</label>
       <input type="text"></input>
       <label>Email</label>
       <input type="text"></input>
       <label>Mobile</label>
       <textarea rows='6' placeholder ='Type a short message here' />
       <Link to='/' className="btn">Send</Link>
    </form>
</div>

)

}

export default Bookning1;