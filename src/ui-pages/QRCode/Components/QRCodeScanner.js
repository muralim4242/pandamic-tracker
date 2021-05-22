import React, { Component } from "react";
import QrReader from "react-qr-reader";
import { connect } from "react-redux";
import ButtonComponent from "../../../ui-atoms/ButtonComponent";
import TextFieldComponent from "../../../ui-atoms/TextFieldComponent";
import { mapDispatchToProps } from "../../../ui-utils/commons";
import "../index.css"
class QRCodeScanner extends Component {
  state = {
    result: "No result",
    videoOn: false,
    cameraOn: true,
    dataError: false
  };

  handleScan = async (data) => {
    console.log({ data });
    if (data) {
      this.setState({
        result: data,
      });
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
      this.setState({ cameraOn: false });
      // Or stop all like so:
      tracks.forEach(track => track.stop())
    }
  };
  handleError = (err) => {
    console.error({ err });
    this.props.setAppData("qrcode", {
      data: null,
      isScannerEnabled: true
    })
    this.setState({ cameraOn: false });
    this.setState({ dataError:  true});
  };

  // setTimeout(() => {
    
  // }, 10000);

  render() {
    const { qrcode } = this.props;
    return (
      <div >
        <div className="qr-scan">
          <QrReader
            css={"qr-reader"}
            delay={300}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{ width: "100%" }}
          />
        </div>

        <div className="qr-scandiv">

        
            {!this.state.dataError  ?  (
            <TextFieldComponent
              rootCss={"qr-textfield"}
              value={qrcode.data}
              placeholder={"Add Address(In case of no QRcode)"}
            // handleChange={props.qrCodeData}
            />)
    
          :
          
           // (!this.state.cameraOn &&  qrcode.data ===null) &&
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
