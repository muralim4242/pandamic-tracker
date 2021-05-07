import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../ui-utils/commons";
import TextFieldComponent from "../../ui-atoms/TextFieldComponent";
import ButtonComponent from "../../ui-atoms/ButtonComponent";
import './index.css';

const styles = (theme) => ({
  button1: {
    //variant="extended",
    marginLeft: "10%",
    marginRight:"20%",
    display: "flex",
    border: "2px solid #000",
    padding: "10px 4px",
    width: "250px",
    height: "50px",
    backgroundColor: "#003366",
    color: "white",
    borderRadius: "300px",
    fontSize: "larger",
    fontStyle: "italic"
  },
   icon:{
     position:"left",
     left:"33%",
     color: "white"
   }

});

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.userName] = event.target.value;

    this.setState({
      input
    });
  }
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["username"] = "";
        input["emailId"] = "";
        input["phoneNumber"] = "";
        input["password"] = "";
        input["confirmPassword"] = "";
        this.setState({input:input});
  
        alert('Form is submited');
    }
  }
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
  
      if (!input["userName"]) {
        isValid = false;
        errors["userName"] = "Please enter your name.";
      }
  
      if (!input["emailId"]) {
        isValid = false;
        errors["emailId"] = "Please enter your email Address.";
      }
  
      if (typeof input["emailId"] !== "undefined") {
          
        var pattern = new RegExp(‘@’);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["emailId"] = "Please enter valid email address.";
        }
      }
  
      if (!input["phoneNumber"]) {
        isValid = false;
        errors["phoneNumber"] = "Please enter your phone number.";
      }
  
      if (typeof input["phoneNumber"] !== "undefined") {
          
        var pattern = new RegExp(‘0-9’);
        if (!pattern.test(input["phoneNumber"])) {
          isValid = false;
          errors["phoneNumber"] = "Please enter only number.";
        }else if(input["phone"].length != 10){
          isValid = false;
          errors["phoneNumber"] = "Please enter valid phone number.";
        }
      }

      if (!input["password"]) {
        isValid = false;
        errors["password"] = "please enter your password";
      }

      if (!input["confirmPassword"]){
        isValid = false;
        errors["confirmPassword"] = "please enter your password";
      }

      if (typeof input["password"] !== "undefined" && typeof input["confirmPassword"] !== "undefined") {

        if (input["password"] != input["confirmPassword"]) {
          isValid = false;
          errors["password"] = "password dont match";
        }
      }
      this.setState({
        errors:errors
      });
      return isValid;
    }
      
     
  render() {
    const { setAppData, userName, emailId, phoneNumber,password, confirmPassword } = this.props;
    return (
      <div className={"root"}>
        <div style={{width:"350px"}}>
          <div style={{ justifyContent: "center",display: "flex", color: "darkblue" ,fontStyle:"italic"}}>
            <h1>Signup</h1>
          </div>

          <div>
            <TextFieldComponent
              rootCss={"textField"}
              value={this.state.input.userName}
              handleChange={(e) => { setAppData('signup.userName', e.target.value) }}
              hasEndAdornment={true}
              placeholder={"User Name"}
              adormentPosition={"right"}
              icon={<span class="material-icons">person</span>}
              onChange={this.handleChange}
            />
            <div className="text-danger" >{this.state.errors.userName}</div>
          </div>
          
          <div>
            <TextFieldComponent
              rootCss={"textField1"}
              value={this.state.input.emailId}
              handleChange={(e) => { setAppData('signup.emailId', e.target.value) }}
              hasEndAdornment={true}
              placeholder={"Email ID"}
              adormentPosition={"right"}
              icon={<span class="material-icons">mail</span>}
              onChange={this.handleChange}
            />
             <div className="text-danger" >{this.state.errors.emailId}</div>
          </div>

          <div>
            <TextFieldComponent
              rootCss={"textField2"}
              value={this.state.input.phoneNumber}
              handleChange={(e) => { setAppData('signup.phoneNumber', e.target.value) }}
              hasEndAdornment={true}
              placeholder={"Phone Number"}
              adormentPosition={"right"}
              icon={<span class="material-icons">phone</span>}
              onChange={this.handleChange}
            />
              <div className="text-danger" >{this.state.errors.phoneNumber}</div>
          </div>
          <div>
            <TextFieldComponent
              rootCss={"textField3"}
              value={password}
              handleChange={(e) => { setAppData('signup.password', e.target.value) }}
              hasEndAdornment={true}
              placeholder={"Password"}
              icon={<span class="material-icons">lock</span>}
              onChange={this.handleChange}
            />
              <div className="text-danger" >{this.state.errors.password}</div>
          </div>
          <div>
            <TextFieldComponent
              rootCss={"textField4"}
              hasEndAdornment={true}
              value={confirmPassword}
              placeholder={"Confirm Password"}
              handleChange={(e) => { setAppData('signup.confirmPassword', e.target.value) }}
              icon={<span class="material-icons">lock</span>}
              onChange={this.handleChange}
              adormentPosition={"end"}
            />
              <div className="text-danger" >{this.state.errors.confirmPassword}</div>
          </div>
          <div>
           <ButtonComponent
                rootCss={"button1"}
                value={"Signup"}
                color={"blue"}
                onClick={this.handleSubmit}
                variant={"login"}
                text
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
  const { userName, emailId,phoneNumber, password, confirmPassword } = signup;
  return { userName, emailId,phoneNumber, password, confirmPassword }
}
export default connect(null, mapDispatchToProps)(withRouter(withStyles(styles)(Signup)));


