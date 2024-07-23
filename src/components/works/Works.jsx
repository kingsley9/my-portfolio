import React from 'react';
import { Card, CardContent, Typography, CardActionArea } from '@mui/material';

import './works.scss';

function Works() {
  return (
    <div className="works" id="projects">
      {/* Projects Container */}

      <Typography
        gutterBottom
        align="center"
        variant="h3"
        component="div"
        fontWeight={'bold'}
      >
        Projects
      </Typography>

      <div className="cardContainer">
        <div className="top-row">
          {/* NLP Project */}
          <Card
            className="card"
            variant="elevation"
            elevation={2}
            sx={{
              width: 395,
              height: 165,
            }}
          >
            <CardActionArea href="https://blens.ca">
              <CardContent sx={{ height: 165 }}>
                <span className="tag ruby">Ruby on rails</span>
                <span className="tag reactJs">React native</span>
                <Typography
                  gutterBottom
                  align="left"
                  variant="body1"
                  className="header"
                  component="div"
                  paddingTop={1}
                >
                  Blens
                </Typography>
                <div className="divider" />
                <Typography
                  variant="caption"
                  color="text.secondary"
                  className="description"
                  fontWeight={'light'}
                >
                  Building Blens, a startup providing photographers and
                  videographers with a marketplace and CRM for integrating
                  scheduling, booking, messaging, and customizable pages to
                  enhance their online presence.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            className="card"
            variant="elevation"
            elevation={2}
            sx={{
              width: 380,
              height: 165,
            }}
          >
            <CardActionArea href="https://eecs-4413-auction-website.vercel.app/">
              <CardContent sx={{ height: 165 }}>
                <span className="tag java">Spring Boot</span>
                <span className="tag reactJs"> Next.js </span>
                <Typography
                  align="left"
                  variant="body1"
                  component="div"
                  className="header"
                  paddingTop={1}
                >
                  AuctionZone - E-Commerce Auction System
                </Typography>
                <div className="divider" />
                <Typography
                  variant="caption"
                  color="text.secondary"
                  className="description"
                  fontWeight={'light'}
                >
                  Built a microservice-based e-commerce auction platform,
                  managing catalogues, auctions, user accounts, and payments.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            className="card"
            variant="elevation"
            elevation={2}
            sx={{
              width: 380,
              height: 165,
            }}
          >
            <CardActionArea href="https://cell-order-predictor-w3yw.vercel.app">
              <CardContent sx={{ height: 165 }}>
                <span className="tag reactJs">React</span>
                <span className="tag python"> Python </span>
                <span className="tag python"> Flask </span>
                <Typography
                  align="left"
                  variant="body1"
                  component="div"
                  className="header"
                  paddingTop={1}
                >
                  NotePredict (Engineering Capstone)
                </Typography>
                <div className="divider" />
                <Typography
                  variant="caption"
                  color="text.secondary"
                  className="description"
                  fontWeight={'light'}
                >
                  Developed NotePredict, a web app that optimizes Jupyter
                  notebook organization using deep learning.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="bottom-row">
          <Card
            className="card"
            variant="elevation"
            elevation={2}
            sx={{
              width: 380,
              height: 165,
            }}
          >
            <CardActionArea href="https://kingsley9.github.io/EECS4481-Project-T5/">
              <CardContent sx={{ height: 165 }}>
                <span className="tag reactJs">React</span>
                <span className="tag reactJs">Typescript</span>
                <span className="tag javascript"> Express.js </span>
                <Typography
                  align="left"
                  variant="body1"
                  component="div"
                  className="header"
                  paddingTop={1}
                >
                  Help desk app (Cybersecurity capstone)
                </Typography>
                <div className="divider" />
                <Typography
                  variant="caption"
                  color="text.secondary"
                  className="description"
                  fontWeight={'light'}
                >
                  Developed a secure help desk app as part of my security
                  capstone project and performed rigorous security and
                  performance testing on it.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          {/* TAB2XML */}
          <Card
            className="card"
            variant="elevation"
            elevation={2}
            sx={{
              width: 395,
              height: 165,
            }}
          >
            <CardActionArea href="https://github.com/devivekw/TAB2XML">
              <CardContent sx={{ height: 165 }}>
                <span className="tag java">Java</span>
                <span className="tag javaFx"> JavaFX </span>
                <Typography
                  gutterBottom
                  align="left"
                  variant="body1"
                  component="div"
                  fontWeight={'light'}
                  className="header"
                  paddingTop={1}
                >
                  TAB2XML
                </Typography>
                <div className="divider" />
                <Typography
                  variant="caption"
                  color="text.secondary"
                  className="description"
                  fontWeight={'light'}
                >
                  Contributed to TAB2XML which is a Java based desktop app that
                  enables users to play and view music from musical tablature.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          {/* KOkon.app */}
          <Card
            className="card"
            variant="elevation"
            elevation={2}
            sx={{
              width: 395,
              height: 165,
            }}
          >
            <CardActionArea href="https://github.com/kingsley9/my-portfolio">
              <CardContent sx={{ height: 165 }}>
                <span className="tag reactJs">React</span>
                <span className="tag cs"> SCSS </span>
                <span className="tag firebase"> Firebase </span>

                <Typography
                  gutterBottom
                  align="left"
                  variant="body1"
                  component="div"
                  className="header"
                  paddingTop={1}
                >
                  KOkon.app
                </Typography>
                <div className="divider" />
                <Typography
                  variant="caption"
                  color="text.secondary"
                  className="description"
                  fontWeight={'light'}
                >
                  Built my web portfolio using React and SCSS
                </Typography>
                <br />
              </CardContent>
            </CardActionArea>
          </Card>
          {/* Express Parking */}
        </div>
      </div>
    </div>
  );
}

export default Works;
