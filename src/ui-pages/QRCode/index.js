import Header from "./Components/Header/Header";
import QRCodeGenerator from "./Components/QRCodeGenerator";
import React from "react";
import QRCodeScanner from "./Components/QRCodeScanner";
import { withRouter } from "react-router-dom";
import "./index.css";
import { useState } from "react";
import { mapDispatchToProps } from "../../ui-utils/commons";
import { connect } from "react-redux";
import Sidebar from "../../ui-atoms/SideBarComponent";
import SwitchButton from "./Components/Switch";

const QRpage = ({ qrcode, setAppData }) => {
  // const [sideNavWid, setSideNavWid] = useState("0%");
  const [show, setShow] = useState(false);
  const sideNavHandler = () => {
    setShow(true);
    // if (sideNavWid === "0%") {
    //   setSideNavWid("50%");
    // } else {
    //   setSideNavWid("0%");
    // }
  };
  const switchValueHandler = (value) => {
    setAppData("qrcode.isScannerEnabled", value);
  };
  const closeSideBar = () => {
    setShow(false);
  }
  return (
    <div>
      <Sidebar
        show={show}
        sidelist={[]}
        onClose={closeSideBar}
        // handleClickItem={this.handleClickItem}
        header={"Name of the User"}
      />
      {qrcode.isScannerEnabled ? (
        <div>
          <Header nav={sideNavHandler} text={"Scan QR Code"} />
          <QRCodeScanner />
        </div>
      ) : <div>
        <Header nav={sideNavHandler} text={"Your QR Code"} />
        <QRCodeGenerator />
      </div>}
      <div className="switch-pos">
        <SwitchButton handleChange={switchValueHandler} />
      </div>
    </div>
  );
};
const mapStateToProps = ({ screenConfiguration }) => {
  const { preparedFinalObject = {} } = screenConfiguration;
  const { qrcode } = preparedFinalObject;
  return { qrcode: { ...qrcode } }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter((QRpage)));
