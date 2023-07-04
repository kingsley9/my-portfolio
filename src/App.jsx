import React from 'react';
import TopBar from './components/topBar/TopBar';
import Intro from './components/intro/Intro';
import Works from './components/works/Works';
import Menu from './components/menu/Menu';
import Contact from './components/contact/Contact';
import Skills from './components/skills/Skills';
import './app.scss';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import { useState } from 'react';
function App() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <div className="sections">
          <Intro />
          {/* <About /> */}
          <Works />
          <Skills />
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
