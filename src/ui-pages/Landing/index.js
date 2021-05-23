import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";
import Router from "../../ui-routes/UserRoutes";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../ui-utils/commons";
import "./index.css";

const styles = {
  dialogRoot: {
    width: "100%"
  },
  appBar: {
    background: "#ffffff",
    color: "#000",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "contents"

  },
  toolbar: {
    backgroundColor: "#0f7c8a"
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
      classes,
      appbarName
    } = this.props;
    return (
      <div className={classes.dialogRoot}>
        <AppBar position="static" classes={{ root: classes.appBar }}>
          <Toolbar classes={{ root: classes.toolbar }}>
            <Typography variant="h4" className={classes.title} style={{ cursor: "pointer", color: "white" }}>
              {appbarName}
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
const mapStateToProps = ({ screenConfiguration }) => {
  const { preparedFinalObject = {} } = screenConfiguration;
  const { dashboard } = preparedFinalObject;
  const { appbarName } = dashboard;
  return { appbarName }
}

export default withStyles(styles, { withTheme: true })(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(withStyles(styles)(Landing)))
);
