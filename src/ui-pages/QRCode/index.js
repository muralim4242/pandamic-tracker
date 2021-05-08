import Header from "./Components/Header";
import QRCodeGenerator from "./Components/QRCodeGenerator";
import React, { Component } from "react";
import QRCodeScanner from "./Components/QRCodeScanner";
import { withRouter } from "react-router-dom";
import "./index.css";

const QRpage = () => {
  return (
    <div className="qrpage">
      <Header />
      <QRCodeGenerator  />
      {/* <QRCodeScanner /> */}
      <div className='footer'></div>
    </div>
  );
};

export default withRouter(QRpage);
