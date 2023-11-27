import React from 'react';
import "./games.css";
import Games1 from "../../assets/game_single_gallery01.jpg";
import Games2 from "../../assets/game_single_gallery02.jpg";
import Games3 from "../../assets/game_single_gallery03.jpg";
import Games4 from "../../assets/game_single_gallery04.jpg";
import Games5 from "../../assets/game_single_gallery05.jpg";
import Games6 from "../../assets/game_single_gallery01.jpg";


const Games = () => {
  return (
    <section id='games'>
        <h2 className="gamesTitle">Games</h2>
        <span className="gamesDesc">Pandahub presents a gaming universe where players can dive into rich, immersive worlds across genres. From thrilling action-packed adventures to strategic simulations, each Pandahub game is meticulously crafted for an unforgettable and diverse gaming experience, ensuring endless entertainment for every player</span>
        <div className="gamesImgs">
            <img src={Games1} alt="" className="gamesImg"/>
            <img src={Games2} alt="" className="gamesImg"/>
            <img src={Games3} alt="" className="gamesImg"/>
            <img src={Games4} alt="" className="gamesImg"/>
            <img src={Games5} alt="" className="gamesImg"/>
            <img src={Games6} alt="" className="gamesImg"/>
        </div>
        
    </section>
  );
}

export default Games;