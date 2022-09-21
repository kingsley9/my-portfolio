import "./about.scss";
import { Card, CardContent, Typography } from "@mui/material";

function About() {
  return (
    <div className="about" id="about">
      <Typography
        fontFamily={"Montserrat"}
        align="center"
        variant="h4"
        component="div"
        className="header"
      >
        About Me
      </Typography>
      <Card
        className="card"
        variant="elevation"
        elevation={3}
        sx={{ width: 700, height: 500, borderRadius: "1rem" }}
      >
        <CardContent>
          <hr />
          <Typography
            fontFamily={"Montserrat"}
            variant="body1"
            padding={2}
            color="text.secondary"
            className="text"
          >
            My name is Kingsley, I am Nigerian and I moved to Canada in 2016. I
            have a Diploma in Electronics Engineering and I am currently a final
            year student at York University pursuing a Bachelor of Engineering
            in Software Engineering. I was born and raised in Lagos, Nigeria. I
            am an avid football and music enjoyer which usually occupies most of
            my time when i'm not coding or studying.
          </Typography>
          <br />

          <Typography
            fontFamily={"Montserrat"}
            variant="body1"
            paddingX={2}
            color="text.secondary"
            className="text"
          >
            My time at Lassonde so far has helped me develop and refine my
            creative problem solving skills which have in turn shaped me into
            the Engineer I am today. My parents were very instrumental in me
            choosing the Software engineering program and have been a great
            source of inspiration for me throughout my life. They got me into a
            coding camp when I was younger where I was first introduced to HTML
            and css. I was able to gain an early inclination towards programming
            which has followed me to this day.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default About;
