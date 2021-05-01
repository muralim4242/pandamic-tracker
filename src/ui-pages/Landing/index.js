import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar} from "@material-ui/core";
import Router from "../../ui-routes/UserRoutes";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../ui-utils/commons";
import "./index.css";

const styles = {
  appBar: {
    background: "#ffffff",
    color: "#000000",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  profile_name: {
    fontFamily: "Poppins-Regular",
    fontSize: "12px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#515151",
    textTransform: "none"
  },
  profile_button: {
    padding: "0 6px 1px 3px",
    // opacity: "0.23",
    borderRadius: "12.5px",
    height: "30px",
    // width: "90px",
    background: "linear-gradient(#f2f2f2 30%, #f2f2f2)"
  },
  profile_menu_name: {
    fontFamily: "Poppins-Regular",
    fontSize: "12px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#515151",
  },
  profile_menu_name1: {
    fontFamily: "Poppins-Regular",
    fontSize: "12px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#f05c5c",
  },
  toolbar: {
    width: "100%"
  },
  customTabSelected: {
    fontSize: "16px !important",
    fontWeight: "600 ",
    color: "#000000 !important",
    textTransform: "none"
  },
  customTextColorPrimary: {
    fontSize: "16px",
    color: "#515151",
    textTransform: "none"
  }
};

class Landing extends React.Component {
  // Configure FirebaseUI.
  render() {
    const {
      classes
    } = this.props;
    return (
      <div className={classes.dialogRoot}>
        <AppBar position="static" classes={{ root: classes.appBar }}>
          <Toolbar classes={{ root: classes.toolbar }}>
            <Typography variant="h6" className={classes.title} style={{ cursor: "pointer" }}>
              Pandamic Tracker
            </Typography>
          </Toolbar>
        </AppBar>
        <div>
          <Router />
        </div>
      </div>
    );
  }
}


export default withStyles(styles, { withTheme: true })(
  connect(
    null,
    mapDispatchToProps
  )(withRouter(withStyles(styles)(Landing)))
);
