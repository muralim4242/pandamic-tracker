import React, { Component } from "react";
import QrReader from "react-qr-reader";
import { connect } from "react-redux";
import ButtonComponent from "../../../ui-atoms/ButtonComponent";
import TextFieldComponent from "../../../ui-atoms/TextFieldComponent";
import { mapDispatchToProps } from "../../../ui-utils/commons";
import "../index.css"
class QRCodeScanner extends Component {
  state = {
    dataError: false,
    qrScanFailed: false
  };

  handleScan = async (data) => {
    const { qrcode } = this.props;
    if (data) {
      this.props.setAppData("qrcode", {
        data: data,
        isScannerEnabled: true
      })
      const video = document.querySelector('video');
      // A video's MediaStream object is available through its srcObject attribute
      const mediaStream = video.srcObject;
      // Through the MediaStream, you can get the MediaStreamTracks with getTracks():
      const tracks = mediaStream.getTracks();
      // Tracks are returned as an array, so if you know you only have one, you can stop it with: 
      tracks[0].stop();
      // Or stop all like so:
      tracks.forEach(track => track.stop());
    }
    setTimeout(function () {
      if (!qrcode.data) {
        const video = document.querySelector('video');
        if (video) {
          const mediaStream = video.srcObject;
          const tracks = mediaStream.getTracks();
          tracks[0].stop();
          tracks.forEach(track => track.stop());
          this.setState({ dataError: true, qrScanFailed: true });
        }
      }
    }.bind(this), 5000);
  };
  handleError = (err) => {
    const { qrcode } = this.props;
    this.props.setAppData("qrcode", {
      data: null,
      isScannerEnabled: true
    })
    this.setState({ dataError: true, qrScanFailed: true });
    setTimeout(function () {
      if (!qrcode.data) {
        const video = document.querySelector('video');
        const mediaStream = video.srcObject;
        const tracks = mediaStream.getTracks();
        tracks[0].stop();
        tracks.forEach(track => track.stop());
        this.setState({ dataError: true, qrScanFailed: true });
      }
    }.bind(this), 10000);
  };

  render() {
    const { qrcode, setAppData } = this.props;
    return (
      <div >
        <div className="qr-scan">
          {this.state.qrScanFailed && <div className={"qrcodeerrorMessage"}>Not Scanning Properly,To add Address Please Fill below</div>}
          <QrReader
            css={"qr-reader"}
            delay={300}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{ width: "100%" }}
          />
        </div>
        <div className="qr-scandiv">
          {!this.state.dataError ? (
            <TextFieldComponent
              rootCss={"qr-textfield"}
              fieldValue={qrcode.data}
              isDisabled={true}
              placeholder={"Add Address(In case of no QRcode)"}
              handleChange={(e) => { setAppData("qrcode.text", '') }}
            />)
            :
            <ButtonComponent
              rootCss={"qr-button"}
              value={"Add Address(In case of no QRcode)"}
            />
          }
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ screenConfiguration }) => {
  const { preparedFinalObject = {} } = screenConfiguration;
  const { qrcode } = preparedFinalObject;
  return { qrcode: { ...qrcode } }
}
export default connect(mapStateToProps, mapDispatchToProps)((QRCodeScanner));
