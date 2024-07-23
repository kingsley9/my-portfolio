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
import BlogPostPage from './pages/blog/BlogPostPage';
import { useDarkMode, DarkModeProvider } from './contexts/DarkModeContext';

function AppContent() {
  const { darkMode } = useDarkMode();

  let theme = createTheme({
    typography: {
      body1: {
        fontWeight: 230,
        fontSize: '1.5rem',
      },
      fontFamily: [
        'BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      ].join(','),
    },

    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });
  theme = responsiveFontSizes(theme);

  useScrollToAnchor();

  console.log(darkMode, theme.palette.mode);
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="post/:id" element={<BlogPostPage />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

const App = () => {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
};

export default App;

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
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
