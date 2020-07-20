import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './../styles/header-footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro, faHome, faDna, faCode } from '@fortawesome/free-solid-svg-icons';

function Header() {
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  return (
    <div className="Header">
      <div className="topnav">
          <div className="logo">
             Max Land
          </div>
          <div className="menu">
            <Link to="/" className="link">
              <div className="title"><FontAwesomeIcon icon={faHome}/> Home</div>
              <div className="bar"></div>
            </Link>
            <Link to="/Research" className="link">
              <div className="title"><FontAwesomeIcon icon={faDna}/> Research</div>
              <div className="bar"></div>
            </Link>
            <Link to="/projects" className="link">
              <div className="title"><FontAwesomeIcon icon={faCode}/> Projects</div>
              <div className="bar"></div>
            </Link>
            <Link to="/gallery" className="link">
              <div className="title"><FontAwesomeIcon icon={faCameraRetro}/> Photo Gallery</div>
              <div className="bar"></div>
            </Link>
          </div>
          <div className="sidenav-button" onClick={openNav}>
              &#9776;
          </div>
        </div>

        <div id="mySidenav" className="sidenav">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
          <Link to="/" className="link">
              <div className="title"><FontAwesomeIcon icon={faHome}/> Home</div>
              <div className="bar"></div>
            </Link>
            <Link to="/Research" className="link">
              <div className="title"><FontAwesomeIcon icon={faDna}/> Research</div>
              <div className="bar"></div>
            </Link>
            <Link to="/projects" className="link">
              <div className="title"><FontAwesomeIcon icon={faCode}/> Projects</div>
              <div className="bar"></div>
            </Link>
            <Link to="/gallery" className="link">
              <div className="title"><FontAwesomeIcon icon={faCameraRetro}/> Photo Gallery</div>
              <div className="bar"></div>
            </Link>
        </div>
    </div>
  );
}

export default Header;
