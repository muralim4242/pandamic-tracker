import React from "react";
import { withRouter } from "react-router-dom";
import Snackbar from "./ui-containers/SnackBar";
import { mapDispatchToProps } from "./ui-utils/commons";
import MainRoutes from "./ui-routes/MainRoutes";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import Loader from "./ui-molecules/Loading";
import isEmpty from "lodash/isEmpty";
import "./App.css";

class App extends React.Component {

  render() {
    const { spinner, appConfig } = this.props;
    return (
      <div>
        <MainRoutes />
        <Snackbar />
        {spinner && (
          <div className="custom-spinner">
            <Loader />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ screenConfiguration }) => {
  const { preparedFinalObject = {} } = screenConfiguration;
  const { spinner, selectedLanguage = "en", appConfig } = preparedFinalObject;
  return { spinner, selectedLanguage, appConfig };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withTranslation()(App)));
