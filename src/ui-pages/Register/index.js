import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../ui-utils/commons";

const styles = theme=>({
  root: {
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
  paperRoot: {
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
    width:"25%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px 24px",
    margin: "8px",
    flexDirection: "column",
    cursor:"pointer"
  }
});

class Register extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.root}>
          <div>Register</div>
      </div>
      </div>
    );
  }
}

export default connect(null,mapDispatchToProps)(withRouter(withStyles(styles)(Register)));
