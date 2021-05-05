import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../ui-utils/commons";
import TextFieldComponent from "../../ui-atoms/TextFieldComponent";
import ButtonComponent from "../../ui-atoms/ButtonComponent";
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import './index.css';
import { Typography } from "@material-ui/core";


class Login extends React.Component {
  state = {
    errors: {},
    loader: true
  }

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
      errors: errors
    });
    return formIsValid;
  }

  handleLogin = () => {
    const { userName, password } = this.props;
    if (this.validateLogin(userName, password)) {
      this.setState({ loader: true });
    }
  }
  render() {
    const {  setAppData, userName, password } = this.props;
    return (
      <div className={"root"}>
        <form style={{ width: "80%" }} onClick={() => { this.handleLogin() }}>
        <Typography component={"h2"} className={"header"}>Login</Typography>
          <TextFieldComponent
            className="textField"
            icon={<PersonRoundedIcon style={{ fontSize: "44px", color: "#0F4C7C" }} />}
            iconPosition={"input-icon-right "}
            type="text"
            value={userName}
            hasError={!userName || !this.state.errors.userName ? true : false}
            errorMessage={this.state.errors.userName}
            placeholder={"User Name"}
            handleChange={(e) => { setAppData('login.userName', e.target.value) }}
            fullwidth={"true"}
          />
          <TextFieldComponent
            rootCss={"textField1"}
            value={password}
            icon={<LockRoundedIcon style={{ fontSize: "44px", color: "#fff" }} />}
            iconPosition={"input-icon-left"}
            placeholder={"Password"}
            hasError={!password || !this.state.errors.password ? true : false}
            errorMessage={this.state.errors.password}
            handleChange={(e) => { setAppData('login.password', e.target.value) }}
            fullwidth={"true"}
            type={"password"}
          />
          <div>
            <ButtonComponent
              rootCss={"button1"}
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
  return { userName, password }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter((Login)));
/* <div style={{ width: "300px" }}>
<div style={{ justifyContent: "center", display: "flex", color: "darkblue" }}>
<h1>Login</h1>
</div>

<div>
<TextFieldComponent
rootCss={"textField"}
value={userName}
handleChange={(e) => { setAppData('login.userName', e.target.value) }}
// hasEndAdornment={true}
icon={<PermIdentityOutlinedIcon />}
iconPosition={"iconStyle"}
placeholder={"User Name"}
isValid={
userName === "" && get(this.state.errors, "userName", "")
? false
: true
}
/>
{!userName && <div className="errorMessage">
{''}
{this.state.errors.userName}
</div>}

</div>

<div>
<TextFieldComponent
rootCss={"textField1"}
value={password}
icon={<LockOutlinedIcon />}
iconPosition={"iconStyleLeft"}
placeholder={"password"}
handleChange={(e) => { setAppData('login.password', e.target.value) }}
fullwidth={"true"}
type={"password"}
isValid={
password === "" && get(this.state.errors, "password", "")
? false
: true
}
/>
<div className="errorMessage">
{''}
{!password && this.state.errors.password}
</div>
</div>

<div>
<ButtonComponent
rootCss={"button1"}
value={"Login"}
color={"blue"}
handleOnClick={() => this.handleLogin()}
/>
</div>

</div> */