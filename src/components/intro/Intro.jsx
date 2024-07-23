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
            variant="h5"
            component="div"
            fontWeight={'bold'}
          >
            Hi, I'm
          </Typography>
          <Typography
            gutterBottom
            variant="h3"
            component="h4"
            fontWeight={'bold'}
            style={{ overflow: 'hidden' }}
          >
            Kingsley Okon
          </Typography>

          <div className="role">
            <Typography
              gutterBottom
              variant="h3"
              component="h4"
              fontWeight={'bold'}
              className="soft"
            >
              A Software
            </Typography>
            <Typography
              gutterBottom
              variant="h3"
              component="h4"
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
            <Typography gutterBottom variant="h6" fontWeight={'light'}>
              Specializing in web development & design
            </Typography>
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
                href="/assets/Kingsley_Okon's_resume.pdf"
                onClick={(event) => {
                  event.preventDefault(); // Prevent the router from handling the click
                  window.location.href =
                    event.currentTarget.getAttribute('href'); // Directly navigate to the URL
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight={'light'}
                  sx={{ paddingY: { xs: 0, md: 2 } }}
                >
                  Resume
                </Typography>
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
