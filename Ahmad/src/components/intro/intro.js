import React from 'react';
import './intro.css';
import bg from '../../assets/gaming 2.png';
import btnImg from '../../assets/Play.png'
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello Gamers ,</span>
            <span className="introText">Welcome <span className="introName">to the hunger games</span><br />Enjoy your gaming time</span>
            <p className="introPara">Dive into a world of endless gaming possibilities <br/> at Pandahub. Your epic journey begins here.</p>
            
        </div>
        <img src={bg} alt="Profile" className="bg"/>
    </section>
  )
}

export default Intro;