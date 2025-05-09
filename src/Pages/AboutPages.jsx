import React from 'react'
import NavBar from '../Common/NavBar'
import Aboutimg from "../Images/AboutUs.jpg"

export default function AboutPages() {
  return (
  <div className="MainContainer">
    <NavBar/>

    <div className="Container">
    <div className="AboutSection">
          <h1>About</h1>
          <div className="About">
            <div className="AboutImages">
              <img src={Aboutimg} alt="" />
            </div>
            <div className="AboutDetials">
              <h1>About Me</h1>
              <p>
                Hi! I'm <b> ShavuParmar </b> a passionate Web Developer and Graphic
                Designer with a creative eye and a knack for clean, functional
                design. I blend technical expertise with visual storytelling to
                create websites and graphics that not only look great but also
                deliver a seamless user experience. Whether I'm building
                responsive websites from scratch or designing compelling
                visuals, I focus on every detail—from the structure of the code
                to the flow of color, layout, and typography. My goal is to
                bring ideas to life digitally, ensuring that every project
                reflects both purpose and personality. I'm experienced in tools
                and technologies like HTML, CSS, JavaScript, and frameworks like
                React, as well as Adobe Creative Suite (Photoshop, Illustrator,
                XD) for graphic and UI design. Let's create something awesome
                together!
              </p>
            </div>
          </div>
        </div>
    </div>
  </div>
  )
}
