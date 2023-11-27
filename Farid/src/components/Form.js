import React from "react";
import './FormStyles.css'
import { Link } from "react-router-dom";
const Form =()=>{
return (

<div className="form">
    <form>
       <label>Your Name</label>
       <input type="text"></input>
       <label>Email</label>
       <input type="text"></input>
       <label>Subject</label>
       <input type="text"></input>
       <label>Details</label>
       <textarea rows='6' placeholder ='Type a short message here' />
       <Link to='/' className="btn">Send</Link>
    </form>
</div>

)

}

export default Form;