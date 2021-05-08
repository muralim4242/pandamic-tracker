import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../ui-utils/commons";
import TextFieldComponent from "../../ui-atoms/TextFieldComponent";
import ButtonComponent from "../../ui-atoms/ButtonComponent";
import './index.css';


/*const styles = (theme) => ({
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

});*/

class Register extends React.Component {
  constructor(props){
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

  handleChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.userName]: e.target.value
      }
    });
  }

  validate = () => {
    const { data } = this.state; 
    let errors = {}; 
  
  }
  handleSubmit = (e) => {
    e.preventDefault();

    const { data } = this.state;

    console.log(data);
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
              value={userName}
              handleChange={(e) => { setAppData('signup.userName', e.target.value) }}
              hasEndAdornment={true}
              placeholder={"User Name"}
              adornmentPosition={"right"}
              icon={<span class="material-icons">person</span>}
              onChange={this.handleChange}
            />

          </div>
          
          <div>
            <TextFieldComponent
              rootCss={"textField1"}
              value={emailId}
              handleChange={(e) => { setAppData('signup.emailId', e.target.value) }}
              hasEndAdornment={true}
              placeholder={"Email ID"}
              adornmentPosition={"right"}
              icon={<span class="material-icons">mail</span>}
              onChange={this.handleChange}
            />
             
          </div>

          <div>
            <TextFieldComponent
              rootCss={"textField2"}
              value={phoneNumber}
              handleChange={(e) => { setAppData('signup.phoneNumber', e.target.value) }}
              hasEndAdornment={true}
              placeholder={"Phone Number"}
              adornmentPosition={"right"}
              icon={<span class="material-icons">phone</span>}
              onChange={this.handleChange}
            />
              
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
              
          </div>
          <div>
            <TextFieldComponent
              rootCss={"textField4"}
              hasEndAdornment={true}
              value={confirmPassword}
              placeholder={"Confirm Password"}
              handleChange={(e) => { setAppData('signup.confirmPassword', e.target.value) }}
              icon={<span class="material-icons">lock</span>}
              onChange={this.handleSubmit}
              adormentPosition={"end"}
            />
              
          </div>
          <div>
           <ButtonComponent
                rootCss={"button1"}
                value={"signup"}
                color={"blue"}
                onClick={this.handleSubmit}
                variant={"signup"}
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
export default connect(null, mapDispatchToProps)(withRouter(withStyles(styles)(Register)));
