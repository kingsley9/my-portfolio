import React from 'react';
import './menu.scss';
import { Link } from 'react-router-dom';
export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={'menu ' + (menuOpen && 'active')}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        {/* <li onClick={() => setMenuOpen(false)}>
          <a href="#about">About Me</a>
        </li> */}
        <li onClick={() => setMenuOpen(false)}>
          <a href="#projects">Projects</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#skills">Skills</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  );
}
