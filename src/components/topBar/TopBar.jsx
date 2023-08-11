import React from 'react';
import './topBar.scss';
import DarkModeToggle from '../darkModeToggle/DarkModeToggle';
import { Person, Mail } from '@material-ui/icons';
function TopBar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="/" className="logo">
            KOkon<span style={{ color: 'brown' }}>.app</span>
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span className="text">+1 647 573 6412</span>
            <a href="mailto:kingsleyokon09@gmail.com" className="email">
              <Mail className="icon" />
              <span className="text">KingsleyOkon09@gmail.com</span>
            </a>
            <DarkModeToggle menuOpen={menuOpen} />
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"> </span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
