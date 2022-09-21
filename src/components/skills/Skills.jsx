import "./skills.scss";
import Pll from "react-pll";
import { Typography } from "@mui/material";
function Skills() {
  return (
    <div className="skills" id="skills">
      {/* Skills container */}
      <Typography
        gutterBottom
        fontFamily={"Montserrat"}
        align="center"
        variant="h4"
        component="div"
      >
        Skills
      </Typography>
      <div className="skills-box">
        <div className="left">
          <Pll alt="Python Logo" height={80} language="python" />

          <Pll alt="Python Logo" height={80} language="java" />
          <Pll alt="Python Logo" height={80} language="javascript" />
          <Pll alt="Python Logo" height={80} language="typescript" />
          <Pll alt="Python Logo" height={80} language="html" />
          <Pll alt="Python Logo" height={80} language="css" />
        </div>
        <div className="right">
          <Pll alt="Python Logo" height={80} language="c" />
          <Pll alt="Python Logo" height={80} language="cpp" />
          <i
            style={{ fontSize: 90 }}
            class="devicon-nodejs-plain-wordmark colored"
          ></i>
          <i
            style={{ fontSize: 90 }}
            class="devicon-react-original-wordmark colored"
          ></i>
          <i
            style={{ fontSize: 90 }}
            class="devicon-git-plain-wordmark colored"
          ></i>
          <i
            style={{ fontSize: 90 }}
            class="devicon-mysql-plain-wordmark colored"
          ></i>
          <i
            style={{ fontSize: 100 }}
            class="devicon-tailwindcss-original-wordmark colored"
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Skills;
