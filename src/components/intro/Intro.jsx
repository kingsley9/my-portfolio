import React from "react";
import "./intro.scss";
import { KeyboardArrowDown } from "@material-ui/icons";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { init } from "ityped";
import Typewriter from "typewriter-effect";
import { useEffect, useRef } from "react";

function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/main.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello, I'm</h2>
          <h1>Kingsley Okon</h1>
          <div className="role">
            <h3 className="soft">Software</h3>

            <h3>
              <Typewriter
                options={{
                  strings: ["Engineer", "Developer", "Designer"],
                  autoStart: true,
                  delay: 75,
                  loop: true,
                }}
              />
            </h3>
          </div>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="https://github.com/kingsley9">
                <BsGithub />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kingsley-okon-190164221/">
                <BsLinkedin />
              </a>
            </li>
            <li>
              <a href="assets/Kingsley_Okon_Resume.pdf">RESUME</a>
            </li>
          </ul>
        </div>
        <a className="down" href="#about">
          <KeyboardArrowDown className="downBtn" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
