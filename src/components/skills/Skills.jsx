import React from 'react';

import './skills.scss';
import Pll from 'react-pll';
import { Typography } from '@mui/material';
function Skills() {
  return (
    <div className="skills" id="skills">
      {/* Skills container */}
      <Typography
        gutterBottom
        fontFamily={'Montserrat'}
        align="center"
        variant="h3"
        component="div"
        fontWeight={'bold'}
      >
        Skills
      </Typography>
      <div className="skills-box">
        <Pll alt="Python Logo" height={100} language="python" />

        <Pll alt="Python Logo" height={100} language="java" />
        <Pll alt="Python Logo" height={100} language="javascript" />
        <Pll alt="Python Logo" height={100} language="typescript" />
        <Pll alt="Python Logo" height={100} language="html" />
        <Pll alt="Python Logo" height={100} language="css" />
        <Pll alt="Python Logo" height={100} language="c" />
        <Pll alt="Python Logo" height={100} language="cpp" />
        <Pll alt="Python Logo" height={100} language="ruby" />
        <i
          style={{ fontSize: 90 }}
          className="devicon-nodejs-plain-wordmark colored"
        ></i>
        <i
          style={{ fontSize: 100 }}
          className="devicon-react-original-wordmark colored"
        ></i>
        <i
          style={{ fontSize: 100 }}
          className="devicon-git-plain-wordmark colored"
        ></i>
        <i
          style={{ fontSize: 100 }}
          className="devicon-mysql-plain-wordmark colored"
        ></i>
        <i
          style={{ fontSize: 100 }}
          className="devicon-tailwindcss-original-wordmark colored"
        ></i>
      </div>
    </div>
  );
}

export default Skills;
