import React, { useState } from "react";
import Switch from "react-input-switch";

const SwitchButton = (props) => {
  const switchValueHandler = () => {
    props.switch(!props.value);
  };

  return (
    <div className="switch-div">
      <Switch
        on={true}
        off={false}
        value={props.value}
        onChange={switchValueHandler}
      />
    </div>
  );
};

export default SwitchButton;
