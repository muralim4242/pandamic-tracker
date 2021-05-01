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
  state = {
    name: ''
  }
  handleChange = (value) => {
    // this.setState({name:value})
    this.props.setAppData('dashboard.details.name', value);
  }
  render() {
    const { classes, setAppData, details } = this.props;
    const { name } = details;
    console.log('details:', details);
    return (
      <div className={classes.root}>
        <div>Dashboard</div>
        <input
          value={name}
          onChange={(e) => { this.handleChange(e.target.value) }}

        />
      </div>
    );
  }
}
const mapStateToProps = ({ screenConfiguration }) => {
  const { preparedFinalObject } = screenConfiguration;
  const { dashboard } = preparedFinalObject;
  const { details } = dashboard;
  return { details:{...details} }
}
// export default connect(null, mapDispatchToProps)(withRouter(withStyles(styles)(Dashboard)));
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(Dashboard)));