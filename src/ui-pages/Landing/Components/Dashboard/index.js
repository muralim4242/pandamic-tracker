import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../../../ui-utils/commons";

const styles = (theme) => ({
  root: {
    display: "flex",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
  }
});

class Dashboard extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div>Dashboard</div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(withRouter(withStyles(styles)(Dashboard)));