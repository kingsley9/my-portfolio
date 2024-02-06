import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Menu from './components/menu/Menu';
import TopBar from './components/topBar/TopBar';
import './app.scss';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import { useState } from 'react';
import useScrollToAnchor from './hooks/useScrollToAnchor';
export default function App() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  useScrollToAnchor();
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}

      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
