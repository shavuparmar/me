import React from "react";
import NavBar from "../Common/NavBar";
import "../index.css";
import Developer from "../Images/Developer.jpg";
import Ghumi from "./Ghumi";
import Aboutimg from "../Images/AboutUs.jpg";
import GitHub from "../Images/Icon/github.png";
import { Link } from "react-router-dom";
// import Instagram from "../Images/Icon/instagram.png";
import Figma from "../Images/Icon/figma.png"
import Photoshopig from "../Images/Icon/photoshop.png"
import ReactPic from "../Images/Icon/React-Js.png"
import HtmlPic from "../Images/Icon/Html.png"
import Csspic from "../Images/Icon/Css.png"
import Gitpic from "../Images/Icon/Git.png"
import NodePic from "../Images/Icon/nodejs.png"
import pdfFile from "../Resume.pdf"
import SnapChatpic from "../Images/Icon/snapchat.png"
import LinkeDinpic from "../Images/Icon/linkedin.png"
import Twiterpic from "../Images/Icon/twitter.png"
import Resumeicon from "../Images/Icon/Resume.png"
import Emailpic from "../Images/Icon/gmail.png"
import ContactForm from "./ContactForm";











export default function Home() {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "Resume";
    link.click();
  };

  return (
    <div className="MainContainer">
      <NavBar />

      <div className="Container">
        <div className="MainSection">
          <div className="TextSection">
            <div className="textDetails">
              <h1>i am ShavuParmar , and i am </h1>
              <h2>
                {" "}
                <Ghumi />{" "}
              </h2>
              <p>
                Hi! I'm ShavuParmar, a passionate Web Developer and Graphic
                Designer with a creative eye and a knack for clean, functional
                design. I blend technical expertise with visual storytelling to
                create websites and graphics that not only look great but also
                deliver a seamless user experience.
              </p>
            </div>
            <div className="SocialLinks">
              <div className="SocialICon">
                <ul>
                  {/* <li>
                    
                    <Link
                      to="https://www.instagram.com/shavuparmar"
                      className="icon"
                    >
                      
                      <img src={Instagram} alt="" />
                    </Link>
                  </li> */}
                  <li>

                    <Link to="https://www.github.com/shavuparmar">

                      <img src={GitHub} alt="" />
                    </Link>
                  </li>
                  <li>

                    <Link to="https://www.snapchat.com/add/imshavuparmar">

                      <img src={SnapChatpic} alt="" />
                    </Link>
                  </li>
                  <li>

                    <Link to="mailto:parmarshavu009@gmail.com">

                      <img src={Emailpic} alt="" />
                    </Link>
                  </li>
                  <li>

                    <Link to="https://x.com/shavuparmar">

                      <img src={Twiterpic} alt="" />
                    </Link>
                  </li>
                  <li>

                    <Link to="http://linkedin.com/in/shavuparmar/">

                      <img src={LinkeDinpic} alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="BtnSection">
              <button
                className="btns"
                onClick={handleDownload}

              >
                <img src={Resumeicon} alt="PDF" className="Resunepic" />
                Resume
              </button>
            </div>
          </div>
          <div className="ImagesSection">
            <img src={Developer} alt="" />
          </div>
        </div>
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

        <div className="SkillSection">
          <h1>Skill</h1>
          <div className="SkillDetials">
            <div className="skillText">
              <h2>HTML</h2>
              <h2>CSS</h2>
              <h2>JAVASCRIPT</h2>
              <h2>REACTJS</h2>
              <h2>PHOTOSHOP</h2>
              <h2>FIGMA</h2>
              <h2>NODEJS</h2>
              <h2>hell</h2>
              <h2>Html</h2>
            </div>
            <div className="SkillIcon">
              <img src={HtmlPic} alt="" />
              <img src={Csspic} alt="" />
              <img src={Photoshopig} alt="" />
              <img src={Gitpic} alt="" />
              <img src={ReactPic} alt="" />
              <img src={NodePic} alt="" />
              <img src={Figma} alt="" />
            </div>
          </div>
        </div>

       


                  <ContactForm/>





      </div>
    </div>
  );
}
