import React from "react";
import Switch from "react-input-switch";
import { connect } from "react-redux";

const SwitchButton = ({ handleChange, qrcode }) => {

  return (
    <div className="switch-div">
      <Switch
        on={true}
        off={false}
        value={qrcode.isScannerEnabled}
        onChange={handleChange}
        styles={{
          container: {
            width: "30px",
            height: "20px",
            borderRadius:"12px !important"
          },
          trackChecked:{
            backgroundColor:qrcode.isScannerEnabled ? "#0f7c8a !important" : "#cccccc !important"
          }
        }}
      />
    </div>
  );
};
const mapStateToProps = ({ screenConfiguration }) => {
  const { preparedFinalObject = {} } = screenConfiguration;
  const { qrcode } = preparedFinalObject;
  return { qrcode: { ...qrcode } }
}
export default connect(mapStateToProps, null)(SwitchButton);
