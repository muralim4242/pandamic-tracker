import React from "react";
import "./SideNav.css";

const SideNav = (props) => {
  return (
    <div className="sidenav" style={{ width: props.wid }}>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
  );
};
export default SideNav;
