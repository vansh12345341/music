import React from 'react'
import girl from '../assets/sneak.png';
import "./Header.css";


const Header = () => {
  return (
    <div className="main">
       
        <img className="img"src={girl} />
        <h1 className="head"style={{ margin: 'auto'}}>Your Favourite Tunes</h1>
        </div>
  )
}

export default Header