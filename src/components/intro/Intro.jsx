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
          <img src="assets/main.png" alt="" />
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
            sx={{
              fontSize: {
                xs: '35px', // Set the font size for mobile screens
              },
            }}
          >
            Kingsley Okon
          </Typography>

          <div className="role">
            <Typography
              gutterBottom
              fontFamily={'Montserrat'}
              variant="h4"
              component="div"
              fontWeight={'bold'}
              className="soft"
              sx={{
                fontSize: {
                  xs: '20px', // Set the font size for mobile screens
                },
              }}
            >
              A software
            </Typography>
            <Typography
              gutterBottom
              fontFamily={'Montserrat'}
              variant="h4"
              component="div"
              fontWeight={'bold'}
              sx={{
                fontSize: {
                  xs: '20px', // Set the font size for mobile screens
                },
              }}
            >
              <Typewriter
                options={{
                  strings: ['engineer', 'developer', 'designer'],
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
              <a href="../assets/Kingsley_Okon_Resume.pdf">RESUME</a>
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
