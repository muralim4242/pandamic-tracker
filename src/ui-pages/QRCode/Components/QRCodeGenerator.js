import QRCode from "qrcode.react";
import React from "react";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../../ui-utils/commons";
import SwitchButton from "./Switch";

 function QRCodeGenerator({ setAppData }) {
  const switchValueHandler = (value) => {
    setAppData("qrcode.isScannerEnabled", value);
  };

  return (
    <div className="qrdiv">
      <QRCode value="1234" size={180} />
      <div className="switch-pos">
        <SwitchButton switch={switchValueHandler} />
      </div>
    </div>
  );
}
export default connect(null, mapDispatchToProps)(QRCodeGenerator);

