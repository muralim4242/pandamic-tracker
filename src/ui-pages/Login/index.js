import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../ui-utils/commons";
import TextFieldComponent from "../../ui-atoms/TextFieldComponent";
import ButtonComponent from "../../ui-atoms/ButtonComponent";
import './index.css';
import { get } from "lodash";

const styles = (theme) => ({
  root: {
    display: "flex",
    //alignItems: "center",
    justifyContent: "center",
    backgroundColor: "darkcyan",
    overflow: "hidden",
    position: "fixed",
    backgroundSize: "cover",
    border: "5px solid white",
    borderBottomWidth: "130px",
    height: "93%",
    width: "96%",
    borderBottomRightRadius: "30%",
    borderBottomLeftRadius: "30%"

  },
  root_after: {
    content: " ",
    paddingTop: "200%",
    borderRadius: "100%",
    background: "#f7f7f7",
    position: "fixed",
    bottom: "6%",
    left: '50%',
    transform: 'translateX(-50%)'
  },
  paperRoot: {
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
    width: "25%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px 24px",
    margin: "8px",
    flexDirection: "column",
    cursor: "pointer"
  },
  textField: {
    border: "2px solid #000",
    padding: "10px 4px",
    borderRadius: "0px 50px 50px 0px",
    borderLeft: "none",
    margin: "30px",
    fontSize: "initial",
    fontStyle: "italic",
    backgroundColor: "darkcyan",
    "&:focus": {
      outerWidth: 0,
      border: "2px solid #000",
      borderLeft: "none",
    }
  },
  textField1: {
    border: "2px solid #000",
    color: "white",
    padding: "10px 4px",
    borderRadius: "50px 0px 0px 50px",
    borderRight: "none",
    margin: "0px 0px 70px 20px",
    borderColor: "white",
    fontSize: "initial",
    fontStyle: "italic"
  },
  button1: {
    //variant="extended",
    marginLeft: "17%",
    display: "flex",
    border: "2px solid #000",
    padding: "10px 4px",
    width: "200px",
    height: "50px",
    //backgroundColor: "blue",
    Color: "white",
    borderRadius: "300px",
    fontSize: "larger",
    fontStyle: "italic"
  },
  // icon:{
  //   position:"fixed",
  //   left:"33%"
  // }

  // paperBackground:{
  //   background:"rgba(255,255,255,0.7)"
  // }
});

class Login extends React.Component {
  state = {
    errors: {},
    loader: true
  }

  validateLogin = (userName, password) => {
    // console.log("username",userName);
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
    const { classes, setAppData, userName, password } = this.props;
    console.log("errors", this.state.errors);
    return (
      <div className={"root"}>
        <div style={{ width: "300px" }}>
          <div style={{ justifyContent: "center", display: "flex", color: "darkblue" }}>
            <h1>Login</h1>
          </div>

          <div>
            <TextFieldComponent
              rootCss={"textField"}
              value={userName}
              handleChange={(e) => { setAppData('login.userName', e.target.value) }}
              // hasEndAdornment={true}
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

        </div>
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
export default connect(null, mapDispatchToProps)(withRouter(withStyles(styles)(Login)));



// <form
//   noValidate
//   autoComplete="off"
//   className="custom-width-100-per"
// >
//   <TextField
//     id="username"
//     label="Email id / Phone Number"
//     fullWidth
//   />
//   <TextField
//     id="password"
//     label="Password"
//     type="password"
//     fullWidth
//   />
//   {/*<div className="custom-flex-row">
//     <FormControlLabel
//       control={<Checkbox checked={false} name="checkedA" />}
//       label="Remember me"
//     />
//     <Typography color="primary" variant="body1">
//       Forgot password?
//     </Typography>
//   </div>*/}
//   <Button
//     classes={{ root: "custom-margin-tp-16-px" }}
//     fullWidth
//     color="primary"
//     variant="contained"
//   >
//     {" "}
//     Sign In
//   </Button>
//   <div className="custom-flex-row-left custom-width-100-per custom-margin-tp-8-px custom-margin-bp-16-px">
//     <Typography variant="body1">Don't have an account?</Typography>
//     <Typography
//       onClick={(e) => {
//         this.props.history.push("/register");
//       }}
//       color="primary"
//       variant="body1"
//       align="right"
//       classes={{ root: "custom-pointer" }}
//     >
//       Sign Up
//     </Typography>
//   </div>
// </form>
