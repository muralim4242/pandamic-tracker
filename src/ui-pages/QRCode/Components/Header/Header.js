import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <header>
      <h2>{props.text}</h2>
      <div className="hamburger" onClick={props.nav}>
        <div className="icon"></div>
        <div className="icon"></div>
        <div className="icon"></div>
      </div>
    </header>
  );
}

export default Header;
