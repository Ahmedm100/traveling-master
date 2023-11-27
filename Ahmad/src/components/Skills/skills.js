import React from 'react'
import './skills.css';
import UIDesign from '../../assets/A panda holding 1.png';
import WebDesign from '../../assets/An AI panda hol 0.png';
import AppDesign from '../../assets/An AI panda hol 1.png';


const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What we do<br></br></span>
        <span className="skillDesc">We are Pandahub, where gaming is a blast! Get the latest news, read cool reviews, and chat with fellow gamers. welcome to your gaming days!</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className='skillBarText'>
                    <h2>Gaming</h2>
                    <p>We take pride in delivering captivating games to the community, offering immersive experiences that entertain and delight players worldwide. Our commitment is to create enjoyable, memorable moments for gaming enthusiasts</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className='skillBarText'>
                    <h2>Who we are</h2>
                    <p>At Pandahub, we are a passionate gaming entity dedicated to crafting engaging experiences that resonate with players. Our mission is to be a hub of entertainment, connecting people through the joy of gaming</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className='skillBarText'>
                    <h2>Games</h2>
                    <p>At Pandahub, we offer a diverse portfolio of games ranging from immersive open-world adventures and strategic simulations to fast-paced action titles. Our collection caters to a wide audience, providing gaming experiences that span various genres and play styles</p>
                </div>
            </div>
        </div>
    </section>
  );
}
export default Skills;