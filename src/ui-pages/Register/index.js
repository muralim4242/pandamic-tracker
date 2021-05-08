import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../ui-utils/commons";
import './index.css';
import InputField from "../../ui-atoms/InputField";
import ButtonComponent from "../../ui-atoms/ButtonComponent";


const styles = (theme) => ({
  button1: {
    //variant="extended",
    marginLeft: "10%",
    marginend: "20%",
    display: "flex",
    // width: "100%",
    background: "url('https://firebasestorage.googleapis.com/v0/b/hasirunaadu-13736.appspot.com/o/hasiru-naadu-images%2Fbanner_compressed.jpeg?alt=media&token=90d42358-bb2b-4d05-8e33-a6f6fef16b8e')",
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  icon: {
    position: "left",
    left: "33%",
    color: "white"
  }

});

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        userName: '',
        emailId: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
      },
      errors: {}
    }
  }

  // handleChange = (e) => {
  //   this.setState({
  //     data: {
  //       ...this.state.data,
  //       [e.target.userName]: e.target.value
  //     }
  //   });
  // }

  validate = () => {
    // const { data } = this.state;
    // let errors = {};

  }
  render() {
    const { setAppData, userName, emailId, phoneNumber, password, confirmPassword } = this.props;
    return (
      <div className={"register_oot"}>
        <div style={{ width: "350px" }}>
          <div style={{ justifyContent: "center", display: "flex", color: "#0F4C7C", fontStyle: "italic" }}>
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
              value={"signup"}
              color={"primary"}
              onClick={this.handleSubmit}
              variant={"contained"}
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
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(Register)));
