import React from 'react'
import "./NavBar.css"
import Lion from "../Images/Icon/lion.png"
import {Link} from "react-router-dom"

export default function NavBar() {
  return (
   <div className="MainCotiner">
            <div className="Dek-View">
                <div className="Desk-Navigation">
                    <div className="Logos">
                        <img src={Lion} alt="" />
                        <h1>ShavuParmar</h1>
                    </div>
                    <div className="Nav">
                        <nav>
                            <ul>
                             <Link to={"/"}> <li>Home</li></Link>
                             <Link to={"/about"}> <li>About</li></Link>
                             <Link to={"/projects"}> <li>Projects</li></Link>
                             <Link to={"/contact"}> <li>Contact Us</li></Link>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
   </div>
  )
}
