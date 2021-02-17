import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div id="scroll">  
  <header className="masthead">
    <div>
      <div>
      <Link to="/">
      <h1 className="title" onClick="window.location.reload();"><p1 id="title_name">Andrew Byerle</p1>
        {/* Top Navigation bar */}
        <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <p class="topnav" id="myTopnav">
            <a class="active" href="#home">Home</a>
            <a href="#about">About Me</a> 
            <a href="#code">Code</a>
            <a href="#contact">Contact</a>            
          </p>
        </Link>
        </h1>
        </Link>
      </div>
    </div>
  </header>
  </div>
);

export default Header;
