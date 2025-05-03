import React, { useState } from 'react'
import "./NavBar.css"
import Lion from "../Images/Icon/lion.png"
import {Link} from "react-router-dom"

export default function NavBar() {

    const [ShowMenu,SetShowMenu] = useState(false);
    const ToggleMenu=()=>{
        SetShowMenu(!ShowMenu);

    }


  return (
   <div className="MainCotiner">
            <div className="Dek-View">
                <div className="Desk-Navigation">
                    <div className="Logos">
                        <img src={Lion} alt="" />
                        <h1>ShavuParmar</h1>
                    </div>

                        <nav className={ShowMenu ? "MobileMenu": "Web-Menu"}>
                            <ul>
                             <Link to={"/"}> <li>Home</li></Link>
                             <Link to={"/about"}> <li>About</li></Link>
                             <Link to={"/projects"}> <li>Projects</li></Link>
                             <Link to={"/contact"}> <li>Contact Us</li></Link>
                            </ul>
                        </nav>
                        <div className="HamBuger">
                        <button onClick={ToggleMenu}>
                            {ShowMenu ?
                                <h2>&times;</h2>
                                :
                                <h2>&#9776;</h2>
                            }
                        </button>
                    </div>
                </div>
            </div>
   </div>
  )
}


