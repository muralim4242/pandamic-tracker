import React from "react";
import "./SideNav.css";

const SideNav = (props) => {
  return (
    <div className="sidenav" style={{ width: props.wid }}>
      <h2 className="sidenavHeader"> </h2>
      <a href="#" style={{
        margin: "10px",
        fontSize: "x-large",
        color: "black"
      }}>About</a>
      <a href="#" style={{
        margin: "10px",
        fontSize: "x-large",
        color: "black"
      }}>Services</a>
      <a href="#" style={{
        margin: "10px",
        fontSize: "x-large",
        color: "black"
      }}>Clients</a>
      <a href="#" style={{
        margin: "10px",
        fontSize: "x-large",
        color: "black"
      }}>Contact</a>
    </div>
  );
};
export default SideNav;
