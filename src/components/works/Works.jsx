import { Card, CardContent, Typography, CardActionArea } from "@mui/material";

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
                fontFamily={"Montserrat"}
                align="left"
                variant="body1"
                component="div"
                className="header"
                paddingTop={1}
              >
                Express Parking
              </Typography>
              <hr className="divider" />
              <Typography
                fontFamily={"Montserrat"}
                variant="caption"
                color="text.secondary"
                className="description"
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
                className="header"
                paddingTop={1}
              >
                TAB2XML
              </Typography>
              <hr className="divider" />
              <Typography
                fontFamily={"Montserrat"}
                variant="caption"
                color="text.secondary"
                className="description"
              >
                Contributed to TAB2XML which is a Java based tool that enables
                users to play and view music from musical tablature.
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
          <CardActionArea href="https://github.com/kingsley9/my-portfolio">
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
                className="header"
                paddingTop={1}
              >
                KOkon.app
              </Typography>
              <hr className="divider" />
              <Typography
                fontFamily={"Montserrat"}
                variant="caption"
                color="text.secondary"
                className="description"
              >
                To practice my React skills I used it with scss and Material UI
                to build my entire portfolio website.
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
                className="header"
                component="div"
                paddingTop={1}
                paddingBottom={0}
              >
                NLP For Software Engineering
              </Typography>
              <hr className="divider" />
              <Typography
                fontFamily={"Montserrat"}
                variant="caption"
                color="text.secondary"
                className="description"
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
