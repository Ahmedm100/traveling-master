import React from 'react'
import Games from '../Games/games';
import Footer from '../Footer/footer';
import Navbar from '../Navbar/navbar';

const GamesRoute = () => {
  return (
    <div>
        <Navbar />
        <Games />
        <Footer />

    </div>
  )
}

export default GamesRoute;