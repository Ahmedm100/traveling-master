import React, { useRef } from 'react';
import './contact.css';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Dreamhack from '../../assets/DreamHack_lightmode.png';
import Facebook from '../../assets/facebook.png';
import FacbookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YouTubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';



const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_nr8qnwe', 'template_atmlwze', form.current, 'ZHvBRDZI0mdC4Txly')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent!');
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle"> My Clients</h1>
            <p className="clientDesc">We had the oppertunity to work with a diverse group pf companies.<br></br> some of the notable companies we have worked with includes</p>
            <div className="clientImgs">
                <img src={Adobe} alt="Client" className="clientImg"/>
                <img src={Microsoft} alt="Client" className="clientImg"/>
                <img src={Dreamhack} alt="Client" className="clientImg"/>
                <img src={Facebook} alt="Client" className="clientImg"/>
            </div>
            <Link to='http://localhost:53423' className="gameBtn">Book</Link>
            
    
        </div>
        <div id="contact">
            <h1 className='contactPageTitle'>Contact Us</h1>
            <span className='contactDesc'>Please fill out the form below to discuss and work oppotunities or to give us your feedback.</span>
            <form className='contactForm'ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name'name='your_name'/>
                <input type='email' className='email' placeholder='Your Email' name='your_email'/>
                <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
                <button type='submit'value="send" className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={FacbookIcon} alt='Facebook' className='link'/>
                    <img src={TwitterIcon} alt='Twitter' className='link'/>
                    <img src={YouTubeIcon} alt='Youtube' className='link'/>
                    <img src={InstagramIcon} alt='Instagram' className='link'/>
                </div>
            </form>

        </div>
        
    </section>
  );
}

export default Contact;