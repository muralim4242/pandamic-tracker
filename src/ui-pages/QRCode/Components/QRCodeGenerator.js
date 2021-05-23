import QRCode from "qrcode.react";
import React from "react";

function QRCodeGenerator({ setAppData }) {

  return (
    <div className="qrdiv">
      <QRCode value="1234" size={320} />
    </div>
  );
}
export default QRCodeGenerator;

