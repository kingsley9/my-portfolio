import React from 'react';
import './intro.scss';
import { KeyboardArrowDown } from '@material-ui/icons';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { Typography } from '@mui/material';

import Typewriter from 'typewriter-effect';

function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/main.png" alt="my profile picture" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <Typography
            gutterBottom
            fontFamily={'Montserrat'}
            variant="h5"
            component="div"
            fontWeight={'bold'}
          >
            Hello, I'm
          </Typography>
          <Typography
            gutterBottom
            fontFamily={'Montserrat'}
            variant="h3"
            component="div"
            fontWeight={'bold'}
            style={{ overflow: 'hidden' }}
          >
            Kingsley Okon
          </Typography>

          <div className="role">
            <Typography
              gutterBottom
              fontFamily={'Montserrat'}
              variant="h5"
              component="div"
              fontWeight={'bold'}
              className="soft"
            >
              A Software
            </Typography>
            <Typography
              gutterBottom
              fontFamily={'Montserrat'}
              variant="h5"
              component="div"
              fontWeight={'bold'}
            >
              <Typewriter
                options={{
                  strings: ['Engineer.', 'Developer.', 'Designer.'],
                  autoStart: true,
                  delay: 75,
                  loop: true,
                }}
              />
            </Typography>
          </div>
          <div className="about-me">
            <p>Specializing in web development & design</p>
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
              <a
                href="/assets/Kingsley_Okon_resume.pdf"
                onClick={(event) => {
                  event.preventDefault(); // Prevent the router from handling the click
                  window.location.href =
                    event.currentTarget.getAttribute('href'); // Directly navigate to the URL
                }}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
        <a className="down" href="#projects">
          <KeyboardArrowDown className="downBtn" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
