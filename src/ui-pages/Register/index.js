import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../ui-utils/commons";
import InputField from '../../ui-atoms/InputField/InputField';
import ButtonComponent from "../../ui-atoms/ButtonComponent";
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import './index.css';
import { Typography } from "@material-ui/core";
import MailRoundedIcon from '@material-ui/icons/MailRounded';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';



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
        <form onClick={() => { this.handleRegister() }}>
          <Typography component={"h1"} className={"header"}>Signup</Typography>
          <InputField
            rootCss={"register_textField"}
            value={userName}
            icon={<PersonRoundedIcon style={{ fontSize: "44px", color: "#0F4C7C" }} />}
            iconPosition={"input-icon-right "}
            type={"text"}
            hasError={!userName || !this.state.errors.userName ? true : false}
            errorMessage={this.state.errors.userName}
            placeholder={"User Name"}
            handleChange={(e) => { setAppData('register.userName', e.target.value) }}
            fullwidth={"true"}
          />


          <InputField
            rootCss={"register_textField1"}
            value={emailId}
            icon={<MailRoundedIcon style={{ fontSize: "38px", color: "#fff" }} />}
            iconPosition={"input-icon-left"}
            placeholder={"Email Id"}
            hasError={!emailId || !this.state.errors.emailId ? true : false}
            errorMessage={this.state.errors.emailId}
            handleChange={(e) => { setAppData('register.emailId', e.target.value) }}
            fullwidth={"true"}
            type={"mail"}
          />
          <InputField
            rootCss={"register_textField2"}
            value={phoneNumber}
            icon={<PhoneRoundedIcon style={{ fontSize: "38px", color: "#fff" , fontStyle:"italic"}} />}
            iconPosition={"input-icon-right"}
            placeholder={"Phone Number"}
            hasError={!phoneNumber || !this.state.errors.phoneNumber ? true : false}
            errorMessage={this.state.errors.phoneNumber}
            handleChange={(e) => { setAppData('register.phoneNumber', e.target.value) }}
            fullwidth={"true"}
            type={"phonenumber"}
          />
          <InputField
            rootCss={"register_textField3"}
            value={confirmPassword}
            icon={<LockRoundedIcon style={{ fontSize: "38px", color: "#fff" }} />}
            iconPosition={"input-icon-left"}
            placeholder={"Confirm Password"}
            hasError={!password || !this.state.errors.confirmPassword ? true : false}
            errorMessage={this.state.errors.confirmPassword}
            handleChange={(e) => { setAppData('register.confirmPassword', e.target.value) }}
            fullwidth={"true"}
            type={"password"}
          />
          <InputField
            rootCss={"register_textField2"}
            value={password}
            icon={<LockRoundedIcon style={{ fontSize: "38px", color: "#fff" }} />}
            iconPosition={"input-icon-right"}
            placeholder={"Password"}
            hasError={!password || !this.state.errors.password ? true : false}
            errorMessage={this.state.errors.password}
            handleChange={(e) => { setAppData('register.password', e.target.value) }}
            fullwidth={"true"}
            type={"password"}
          />
           
          <div>
            <ButtonComponent
              rootCss={"register_button1"}
              value={"Signup"}
              color={"blue"}
              type={"submit"}
            />
          </div>
        </form>
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
