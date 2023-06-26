import React from 'react';
import './topBar.scss';
import { Person, Mail } from '@material-ui/icons';
function TopBar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="https://www.kokon.app" className="logo">
            KOkon<span style={{ color: 'brown' }}>.app</span>
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span className="text">+1 647 573 6412</span>
            <div className="itemContainer">
              <Mail className="icon" />
              <span className="text">KingsleyOkon09@gmail.com</span>
            </div>
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
