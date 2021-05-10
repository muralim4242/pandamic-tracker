import Header from "./Components/Header";
import QRCodeGenerator from "./Components/QRCodeGenerator";
import React, { Component } from "react";
import QRCodeScanner from "./Components/QRCodeScanner";
import { withRouter } from "react-router-dom";
import "./index.css";
import SideNav from "./Components/SideNav";
import Footer from "./Components/Footer";
import { useState } from "react";

const QRpage = () => {
  const [sideNavWid, setSideNavWid] = useState("0%");

  const openSideNavHandler = () => {
    setSideNavWid("25%");
  };

  const closeSideNavHandler = () => {
    setSideNavWid("0%");
  };
  

  return (
    <div onClickCapture={closeSideNavHandler}>
      <Header nav={openSideNavHandler} />
      <QRCodeGenerator />
      <SideNav className="sidenav" wid={sideNavWid} />
      {/* <QRCodeScanner /> */}
      <Footer />
    </div>
  );
};

export default withRouter(QRpage);
