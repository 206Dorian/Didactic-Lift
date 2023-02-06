import React from "react";
import "./Header.css"
import headerLogo from "../assets/transparent-full-logo-did-lift.png";

export default function Header() {
  return (
    <>
    <div className="logo-container">
      <a href="https://didactic-lift.herokuapp.com"><img src={headerLogo} alt="Didactic Lift header logo" className="header-logo"></img></a>
      </div>
    </>
  );
}
