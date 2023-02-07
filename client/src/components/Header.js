import React from "react";

import headerLogo from "../assets/transparent-full-logo-did-lift.png";
import './Header.css';

export default function Header() {
  return (
    <>
    <div className="logo-container">
      <a href="https://didactic-lift.herokuapp.com"><img src={headerLogo} alt="Didactic Lift header logo" className="header-logo"></img></a>
      </div>
    </>
  );
}
