import React from "react";
import { Link } from "react-router-dom";

// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }

const Header = () => (
  <div id="scroll">  
  <header className="masthead">
    <div>
      <div>
      <Link to="/">
      <h1 className="site-title">Andrew Byerle
        {/* Top Navigation bar */}
        <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <p class="topnav" id="myTopnav">
            <a class="active" href="#home">Home</a>
            <a href="#about">About Me</a>
            <a href="#code">Code</a>
            <a href="#more">More</a>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
              <i class="fa fa-bars"></i>
            </a>
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
