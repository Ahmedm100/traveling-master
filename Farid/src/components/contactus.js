import React, { useRef } from "react";
import "../components/Styles/contactus.css";
import Image from "../assets/contact_image1.jpg";
import emailjs from '@emailjs/browser';

function Contactus() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nr8qnwe', 'template_atmlwze', form.current, 'ZHvBRDZI0mdC4Txly')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
        alert('Email Sent')
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="contact">
      <div className="leftSide"></div>

      <img src={Image} alt="image" className="image" />

      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST" ref={form} onSubmit={sendEmail}>
          <label htmlFor="your_name">Full Name</label>
          <input name="your_name" placeholder="Enter full name..." type="text" />
          <label htmlFor="your_email">Email</label>
          <input name="your_email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contactus;