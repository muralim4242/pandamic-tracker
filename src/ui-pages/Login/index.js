import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../ui-utils/commons";

const styles = (theme) => ({
  root: {
    display: "flex",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
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
    cursor: "pointer",
  },
  // paperBackground:{
  //   background:"rgba(255,255,255,0.7)"
  // }
});

class Login extends React.Component {
  render() {
    const { classes, setAppData } = this.props;
    return (
      <div className={classes.root}>
        <div>Login</div>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(withRouter(withStyles(styles)(Login)));

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
