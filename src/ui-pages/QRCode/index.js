import Header from "./Components/Header/Header";
import QRCodeGenerator from "./Components/QRCodeGenerator";
import React, { Component } from "react";
import QRCodeScanner from "./Components/QRCodeScanner";
import { withRouter } from "react-router-dom";
import "./index.css";
import SideNav from "./Components/SideNavPage/SideNav";
import Footer from "./Components/Footer/Footer";
import SwitchButton from "./Components/Switch";
import { useState } from "react";

const QRpage = () => {
  const [sideNavWid, setSideNavWid] = useState("0%");
  const [switchValue, setSwitchValue] = useState(false);

  const sideNavHandler = () => {
    if (sideNavWid === "0%") {
      setSideNavWid("25%");
    } else {
      setSideNavWid("0%");
    }
  };

  const switchValueHandler = (value) => {
    setSwitchValue(value);
  };

  return (
    <div>
      {!switchValue && (
        <div>
          <Header nav={sideNavHandler} text={"Your QR Code"} />
          <QRCodeGenerator />
          <SwitchButton switch={switchValueHandler} />
          <SideNav className="sidenav" wid={sideNavWid} />
          <Footer />
        </div>
      )}
      {switchValue && (
        <div>
          <Header nav={sideNavHandler} text={"Scan QR Code"} />
          <QRCodeScanner />
          <SideNav className="sidenav" wid={sideNavWid} />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default withRouter(QRpage);
