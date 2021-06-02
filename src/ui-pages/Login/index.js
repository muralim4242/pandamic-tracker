import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../ui-utils/commons";
import TextFieldComponent from "../../ui-atoms/TextFieldComponent";
import ButtonComponent from "../../ui-atoms/ButtonComponent";
import LockRoundedIcon from "@material-ui/icons/LockRounded";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import "./index.css";
import { Typography } from "@material-ui/core";
import {firebaseAuth} from "../../ui-config/firebase";
import { useAuth } from "../../ui-molecules/context/AuthContext";

class Login extends React.Component {
  state = {
    errors: {},
    loader: true,
  };

  validateLogin = (userName, password) => {
    let formIsValid = true;
    let errors = {};
    if (!userName || userName === "") {
      formIsValid = false;
      errors["userName"] = "username is invalid";
    }
    if (!password || password === "") {
      formIsValid = false;
      errors["password"] = "password is invalid";
    }
    this.setState({
      errors: errors,
    });
    return formIsValid;
  };

  handleLogin = () => {
    const { userName, password, history } = this.props;
    if (this.validateLogin(userName, password)) {
      firebaseAuth
        .signInWithEmailAndPassword(userName, password)
        .then((ref) => {
          this.setState({ loader: true });
          history.push("user-home/transport-register");
        })
        .catch((error) => {
          this.setState({
            errors: error.message,
            loader: false,
          });
        });
    }
  };

  render() {
    const { setAppData, userName, password } = this.props;
    return (
      <div className={"login_root"}>
        <form
          onClick={() => {
            this.handleLogin();
          }}
        >
          <Typography component={"h2"} className={"login_header"}>
            Login
          </Typography>
          <TextFieldComponent
            className="login_textField"
            icon={
              <PersonRoundedIcon
                style={{ fontSize: "44px", color: "#0F4C7C" }}
              />
            }
            iconPosition={"input-icon-right "}
            type="text"
            value={userName}
            hasError={!userName || !this.state.errors.userName ? true : false}
            errorMessage={this.state.errors.userName}
            placeholder={"User Name"}
            handleChange={(e) => {
              setAppData("login.userName", e.target.value);
            }}
            fullwidth={"true"}
          />
          <TextFieldComponent
            rootCss={"login_textField1"}
            value={password}
            icon={
              <LockRoundedIcon style={{ fontSize: "44px", color: "#fff" }} />
            }
            iconPosition={"input-icon-left"}
            placeholder={"Password"}
            hasError={!password || !this.state.errors.password ? true : false}
            errorMessage={this.state.errors.password}
            handleChange={(e) => {
              setAppData("login.password", e.target.value);
            }}
            fullwidth={"true"}
            type={"password"}
          />
          <div>
            <ButtonComponent
              rootCss={"login_button1"}
              value={"Login"}
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
  const { preparedFinalObject = {} } = screenConfiguration;
  const { login } = preparedFinalObject;
  const { userName, password } = login;
  return { userName, password };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
