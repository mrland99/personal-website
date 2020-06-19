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
      <div class="topnav">
          <div class="logo">
             Max Land
          </div>
          <div class="menu">
            <Link to="/" class="link">
              <div class="title"><FontAwesomeIcon icon={faHome}/> Home</div>
              <div class="bar"></div>
            </Link>
            <Link to="/Research" class="link">
              <div class="title"><FontAwesomeIcon icon={faDna}/> Research</div>
              <div class="bar"></div>
            </Link>
            <Link to="/projects" class="link">
              <div class="title"><FontAwesomeIcon icon={faCode}/> Projects</div>
              <div class="bar"></div>
            </Link>
            <Link to="/gallery" class="link">
              <div class="title"><FontAwesomeIcon icon={faCameraRetro}/> Photo Gallery</div>
              <div class="bar"></div>
            </Link>
          </div>
          <div class="sidenav-button" onClick={openNav}>
              &#9776;
          </div>
        </div>

        <div id="mySidenav" class="sidenav">
          <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
          <Link to="/" class="link">
              <div class="title"><FontAwesomeIcon icon={faHome}/> Home</div>
              <div class="bar"></div>
            </Link>
            <Link to="/Research" class="link">
              <div class="title"><FontAwesomeIcon icon={faDna}/> Research</div>
              <div class="bar"></div>
            </Link>
            <Link to="/projects" class="link">
              <div class="title"><FontAwesomeIcon icon={faCode}/> Projects</div>
              <div class="bar"></div>
            </Link>
            <Link to="/gallery" class="link">
              <div class="title"><FontAwesomeIcon icon={faCameraRetro}/> Photo Gallery</div>
              <div class="bar"></div>
            </Link>
        </div>
    </div>
  );
}

export default Header;
