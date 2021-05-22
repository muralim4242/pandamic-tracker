import Header from "./Components/Header/Header";
import QRCodeGenerator from "./Components/QRCodeGenerator";
import React from "react";
import QRCodeScanner from "./Components/QRCodeScanner";
import { withRouter } from "react-router-dom";
import "./index.css";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import { mapDispatchToProps } from "../../ui-utils/commons";
import { connect } from "react-redux";

const QRpage = ({ qrcode, setAppData }) => {
  const [sideNavWid, setSideNavWid] = useState("0%");

  const sideNavHandler = () => {
    if (sideNavWid === "0%") {
      setSideNavWid("25%");
    } else {
      setSideNavWid("0%");
    }
  };
  return (
    <div>
      {qrcode.isScannerEnabled ? (
        <div>
          <Header nav={sideNavHandler} text={"Scan QR Code"} />
          <QRCodeScanner />
          {/* <SideNav className="sidenav" wid={sideNavWid} /> */}
          <Footer />
        </div>
      ) : <div>
        <Header nav={sideNavHandler} text={"Your QR Code"} />
        <QRCodeGenerator />
        <Footer />
      </div>}
    </div>
  );
};
const mapStateToProps = ({ screenConfiguration }) => {
  const { preparedFinalObject = {} } = screenConfiguration;
  const { qrcode } = preparedFinalObject;
  return { qrcode: { ...qrcode } }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter((QRpage)));
