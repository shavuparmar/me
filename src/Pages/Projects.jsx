import React from 'react'
import NavBar from '../Common/NavBar'
import "../index.css"

import Netfliximg from "../Images/Icon/netflix.png"
import Weatherimg from "../Images/Icon/Weather.png"
import StonePaperimg from "../Images/Icon/RockPaper.png"
import Galleryimg from "../Images/Icon/Gallery.png"
import Studentwaze from "../Images/Icon/Student-waze.png"



export default function Projects() {
  return (
    <div className="mainContainer">
      <NavBar />
      <div className="ProjectsContainer">

        <div className="Boxes">
          <div className="BoxDetails">
            <img src={Galleryimg} alt="" />
            <h2>Animation-Gallery</h2>
            <button className='BtnDesing' onClick={() => window.location.href = 'https://github.com/shavuparmar/Animation-Gallery'}>
              Github
            </button>
          </div>
        </div>
        <div className="Boxes">
          <div className="BoxDetails">
            <img src={Studentwaze} alt="" />
            <h2>College Projects</h2>
            <button className='BtnDesing' onClick={() => window.location.href = 'https://github.com/shavuparmar/PPSU'}>
              Github
            </button>
          </div>
        </div>
        <div className="Boxes">
          <div className="BoxDetails">
            <img src={Weatherimg} alt="" />
            <h2>Weather</h2>
            <button className='BtnDesing' onClick={() => window.location.href = 'https://github.com/shavuparmar/weatherapp'}>
              Github
            </button>
          </div>
        </div>
        <div className="Boxes">
          <div className="BoxDetails">
            <img src={Netfliximg} alt="" />
            <h2>NetflixClone</h2>
            <button className='BtnDesing' onClick={() => window.location.href = 'https://github.com/shavuparmar/NetflixClone'}>
              Github
            </button>
          </div>
        </div>
        <div className="Boxes">
          <div className="BoxDetails">
            <img src={StonePaperimg} alt="" />
            <h2>StonePaper-Game</h2>
            <button className='BtnDesing' onClick={() => window.location.href = 'https://github.com/shavuparmar/StonePaper'}>
              Github
            </button>
          </div>
        </div>
        





































      </div>
    </div>
  )
}
