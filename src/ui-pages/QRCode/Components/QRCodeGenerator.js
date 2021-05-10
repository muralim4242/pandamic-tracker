import QRCode from "qrcode.react";
import React, { Component } from "react";

function QRCodeGenerator() {
  return (
    <div className="qrdiv">
      <QRCode value="1234" size={180} />;
    </div>
  );
}

export default QRCodeGenerator;
