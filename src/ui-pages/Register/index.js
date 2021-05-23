import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../ui-utils/commons";
import ButtonComponent from "../../ui-atoms/ButtonComponent";
import './index.css';
import TextFieldComponent from "../../ui-atoms/TextFieldComponent";
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

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
      errors["userName"] = "username is invalid";
    }
    if (!emailId || emailId === "") {
      formIsValid = false;
      errors["emailId"] = "emailId is invalid";
    }
    if (!phoneNumber || phoneNumber === "") {
      formIsValid = false;
      errors["phoneNumber"] = "phoneNumber is invalid";
    }
    if (!password || password === "") {
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
    const { userName, emailId, phoneNumber, password, confirmPassword } = this.props;
    if (this.validateRegister(userName, emailId, phoneNumber, password, confirmPassword)) {
      this.setState({ loader: true });
    }
  }
  render() {
    const { setAppData, userName, emailId, phoneNumber, password, confirmPassword } = this.props;
    return (
      <div className={"register_root"}>
        <div>
          <div style={{ justifyContent: "center", display: "flex", color: "#0f4c7c", fontStyle: "italic" }}>
            <h1>Signup</h1>
          </div>

          <div>
            <TextFieldComponent
              className="register_textField"
              icon={<PersonRoundedIcon style={{ fontSize: "44px", color: "#0F4C7C" }} />}
              iconPosition={"input-icon-right "}
              type="text"
              value={userName}
              hasError={!userName || !this.state.errors.userName ? true : false}
              errorMessage={this.state.errors.userName}
              placeholder={"User Name"}
              handleChange={(e) => { setAppData('signup.userName', e.target.value) }}
              fullwidth={"true"}
            />

            <TextFieldComponent
              rootCss={"register_textField1"}
              value={emailId}
              icon={<EmailIcon style={{ fontSize: "44px", color: "#fff" }} />}
              iconPosition={"input-icon-left"}
              placeholder={"Email"}
              hasError={!emailId || !this.state.errors.emailId ? true : false}
              errorMessage={this.state.errors.emailId}
              handleChange={(e) => { setAppData('signup.emailId', e.target.value) }}
              fullwidth={"true"}
              type={"text"}
            />

            <TextFieldComponent
              className="register_textField2"
              icon={<PhoneIcon style={{ fontSize: "44px", color: "#fff" }} />}
              iconPosition={"input-icon-right "}
              type="phone"
              value={phoneNumber}
              hasError={!phoneNumber || !this.state.errors.phoneNumber ? true : false}
              errorMessage={this.state.errors.phoneNumber}
              placeholder={"phone Number"}
              handleChange={(e) => { setAppData('signup.phoneNumber', e.target.value) }}
              fullwidth={"true"}
              maxLength={10}
              minlength={10}
            />

            <TextFieldComponent
              rootCss={"register_textField1"}
              value={password}
              icon={<LockRoundedIcon style={{ fontSize: "44px", color: "#fff" }} />}
              iconPosition={"input-icon-left"}
              placeholder={"Password"}
              hasError={!password || !this.state.errors.password ? true : false}
              errorMessage={this.state.errors.password}
              handleChange={(e) => { setAppData('signup.password', e.target.value) }}
              fullwidth={"true"}
              type={"password"}
            />

            <TextFieldComponent
              className="register_textField2"
              icon={<LockRoundedIcon style={{ fontSize: "44px", color: "#fff" }} />}
              iconPosition={"input-icon-right "}
              type="password"
              value={confirmPassword}
              hasError={!confirmPassword || !this.state.errors.confirmPassword ? true : false}
              errorMessage={this.state.errors.confirmPassword}
              placeholder={" Confirm Password"}
              handleChange={(e) => { setAppData('signup.confirmPassword', e.target.value) }}
              fullwidth={"true"}
              
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
  const { preparedFinalObject = {} } = screenConfiguration;
  const { signup } = preparedFinalObject;
  const { userName, emailId, phoneNumber, password, confirmPassword } = signup;
  return { userName, emailId, phoneNumber, password, confirmPassword }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter((Register)));