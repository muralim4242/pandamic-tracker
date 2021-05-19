import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../ui-utils/commons";
import InputField from "../../ui-atoms/InputField";
import ButtonComponent from "../../ui-atoms/ButtonComponent";

import './index.css';




class Register extends React.Component {
  state = {
    errors: {},
    loader: true
  }

  validateRegister = (userName, emailId, phoneNumber, password, confirmPassword) => {
    let formIsValid = true;
    let errors = {};

    if (!userName || userName === "") {
      formIsValid = false;
      errors["userName"] = "userName is invalid";
    }
    if (!emailId || emailId === "") {
      formIsValid = false;
      errors["emailId"] = "emailId is invalid";
    }
    if (!phoneNumber || phoneNumber === "") {
      formIsValid = false;
      errors["phoneNumber"] = "phoneNumber is invalid";
    }
    if (!password|| password === "") {
      formIsValid = false;
      errors["password"] = "password is invalid";
    }
    if (!confirmPassword || confirmPassword === "") {
      formIsValid = false;
      errors["confirmPassword"] = "password is invalid";
    }
    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  handleRegister = () => {
    const { userName,emailId, phoneNumber, password, confirmPassword } = this.props;
    if (this.validateRegister( userName,emailId, phoneNumber, password, confirmPassword )) {
      this.setState({ loader: true });
    }
  }
  render() {
    const { setAppData, userName, emailId, phoneNumber, password, confirmPassword} = this.props;
    return (
      <div className={"register_root"}>
        <div>
          <div style={{ justifyContent: "center", display: "flex", color: "#0f4c7c", fontStyle: "italic" }}>
            <h1>Signup</h1>
          </div>

          <div>
            <InputField
              rootCss={"register_textField"}
              value={userName}
              handleChange={(e) => { setAppData('signup.userName', e.target.value) }}
              hasEndAdornment={true}
              placeholder={"User Name"}
              adornmentPosition={"end"}
              icon={<span className="material-icons">person</span>}
            />

          </div>

          <div>
            <InputField
              rootCss={"register_textField1"}
              value={emailId}
              handleChange={(e) => { setAppData('signup.emailId', e.target.value) }}
              hasstartAdornment={true}
              placeholder={"Email ID"}
              adornmentPosition={"end"}
              icon={<span className="material-icons">mail</span>}
            />

          </div>

          <div>
            <InputField
              rootCss={"register_textField2"}
              value={phoneNumber}
              handleChange={(e) => { setAppData('signup.phoneNumber', e.target.value) }}
              hasEndAdornment={true}
              placeholder={"Phone Number"}
              adornmentPosition={"end"}
              icon={<span className="material-icons">phone</span>}
            />

          </div>
          <div>
            <InputField
              rootCss={"register_textField3"}
              value={password}
              handleChange={(e) => { setAppData('signup.password', e.target.value) }}
              hasstartAdornment={true}
              placeholder={"Password"}
              icon={<span className="material-icons">lock</span>}
            />

          </div>
          <div>
            <InputField
              rootCss={"register_textField4"}
              hasEndAdornment={true}
              value={confirmPassword}
              placeholder={"Confirm Password"}
              handleChange={(e) => { setAppData('signup.confirmPassword', e.target.value) }}
              icon={<span className="material-icons">lock</span>}
              onChange={this.handleSubmit}
              adormentPosition={"end"}
            />

          </div>
          <div>
            <ButtonComponent
              rootCss={"register_button1"}
              value={"Signup"}
              color={"blue"}
              type={"submit"}
            />
          </div>
         </div> 
      </div>
    );
  }
}
const mapStateToProps = ({ screenConfiguration }) => {
  const { prepareFinalObject = {} } = screenConfiguration;
  const { register } = prepareFinalObject;
  const { userName, emailId, phoneNumber, password, confirmPassword } = Register;
  return { userName, emailId, phoneNumber, password, confirmPassword }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter((Register)));