import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import {
  googleAuthProviderId,
  facebookAuthProviderId,
  emailAuthProviderId,
  phoneAuthProviderID,
  // twitterAuthProviderId,
  firebaseAuth,
} from "../../../ui-config/firebase";
import isEmpty from "lodash/isEmpty";
import "./Auth.css";
import { withRouter } from "react-router-dom";

class Auth extends React.Component {
  // The component's Local state.
  state = {
    isSignedIn: false, // Local signed-in state.
    uiConfig: {},
  };

  // Configure FirebaseUI.
  componentDidMount = () => {
    const { setAppData ,history} = this.props;
    this.setState({
      uiConfig: {
        // Popup signin flow rather than redirect flow.
        signInFlow: "popup",
        // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccessWithAuthResult function.
        // signInSuccessUrl: `/`,
        callbacks: {
          // signInSuccessWithAuthResult: (authResult, redirectUrl)=>
          // {
          //   localStorage.setItem("authResult",JSON.stringify(authResult));
          //   return true;
          // }
          // Avoid redirects after sign-in.
          signInSuccessWithAuthResult: () => false,
        },
        // We will display Google and Facebook as firebaseAuth providers.
        signInOptions: [
          googleAuthProviderId,
          facebookAuthProviderId,
          // twitterAuthProviderId,
          emailAuthProviderId,
          phoneAuthProviderID,
        ],
      },
    });

    this.unregisterAuthObserver = firebaseAuth().onAuthStateChanged((user) => {
      setAppData("userInfo", !!user?user:{});
      setAppData("isSignedIn",!!user)
      localStorage.setItem("authResult", !!user?JSON.stringify(user):JSON.stringify({}));
      !!user && history.push("/user-home/home");
    });
  };

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    const { rootClass } = this.props;
    const { uiConfig } = this.state;
    return (
      !isEmpty(uiConfig) && (
        <div className={rootClass}>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebaseAuth()}
          />
        </div>
      )
    );
  }
}

export default withRouter(Auth);
