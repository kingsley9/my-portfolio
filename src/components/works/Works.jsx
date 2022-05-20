import {
  Button,
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";

import "./works.scss";
function Works() {
  return (
    <div className="works" id="works">
      {/* Projects Container */}

      <Typography
        gutterBottom
        fontFamily={"Montserrat"}
        align="center"
        variant="h4"
        component="div"
      >
        Projects
      </Typography>
      <div className="cardContainer">
        {/* Express Parking */}
        <Card
          className="card"
          variant="elevation"
          elevation={4}
          sx={{
            width: 380,
            height: 150,
          }}
        >
          <CardActionArea href="https://github.com/kingsley9/EECS3311F-proj">
            <CardContent sx={{ height: 150 }}>
              <span className="tag java">Java</span>
              <span className="tag swing"> Java Swing </span>
              <Typography
                gutterBottom
                fontFamily={"Montserrat"}
                align="left"
                variant="body1"
                component="div"
                paddingTop={1}
              >
                Express Parking
              </Typography>
              <hr />
              <Typography
                fontFamily={"Montserrat"}
                variant="caption"
                color="text.secondary"
              >
                Designed and developed a parking booking and management
                application in Java.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        {/* TAB2XML */}
        <Card
          className="card"
          variant="elevation"
          elevation={4}
          sx={{
            width: 395,
            height: 150,
          }}
        >
          <CardActionArea href="https://github.com/devivekw/TAB2XML">
            <CardContent sx={{ height: 150 }}>
              <span className="tag java">Java</span>
              <span className="tag javaFx"> JavaFX </span>
              <Typography
                gutterBottom
                fontFamily={"Montserrat"}
                align="left"
                variant="body1"
                component="div"
                paddingTop={1}
              >
                TAB2XML
              </Typography>
              <hr />
              <Typography
                fontFamily={"Montserrat"}
                variant="caption"
                color="text.secondary"
              >
                TAB2XML is Java based tool that enables users to play and view
                music from musical tablature as well as convert it to MusicXML.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* KOkon.app */}
        <Card
          className="card"
          variant="elevation"
          elevation={4}
          sx={{
            width: 395,
            height: 150,
          }}
        >
          <CardActionArea href="#intro">
            <CardContent sx={{ height: 150 }}>
              <span className="tag reactJs">React</span>
              <span className="tag cs"> SCSS </span>
              <span className="tag firebase"> Firebase </span>

              <Typography
                gutterBottom
                fontFamily={"Montserrat"}
                align="left"
                variant="body1"
                component="div"
                paddingTop={1}
              >
                KOkon.app
              </Typography>
              <hr />
              <Typography
                fontFamily={"Montserrat"}
                variant="caption"
                color="text.secondary"
              >
                To practice my React skills I used ReactJS and Material UI to
                build my entire portfolio website.
              </Typography>
              <br />
            </CardContent>
          </CardActionArea>
        </Card>
        {/* NLP Project */}
        <Card
          className="card"
          variant="elevation"
          elevation={4}
          sx={{
            width: 395,
            height: 150,
          }}
        >
          <CardActionArea href="https://github.com/kingsley9/NLP-reviews-python">
            <CardContent>
              <span className="tag python">Python</span>
              <span className="tag jupyter"> Jupyter Notebook </span>
              <Typography
                gutterBottom
                fontFamily={"Montserrat"}
                align="left"
                variant="body1"
                component="div"
                paddingTop={1}
                paddingBottom={0}
              >
                NLP For Software Engineering
              </Typography>
              <hr />
              <Typography
                fontFamily={"Montserrat"}
                variant="caption"
                color="text.secondary"
              >
                A Jupyter project which uses natural language processing to
                analyze app reviews in order to generate bug reports.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}

export default Works;
