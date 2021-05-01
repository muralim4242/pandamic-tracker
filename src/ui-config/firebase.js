var firebase = require('firebase').default;

try {
  var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSANGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  };
  firebase.initializeApp(firebaseConfig);
} catch (e) {
  console.log(e);
}

var firebaseAuth = firebase.auth;
var googleAuthProviderId = firebase.auth.GoogleAuthProvider.PROVIDER_ID;
var phoneAuthProviderID = firebase.auth.PhoneAuthProvider.PROVIDER_ID;
var facebookAuthProviderId = firebase.auth.FacebookAuthProvider.PROVIDER_ID;
var twitterAuthProviderId = firebase.auth.TwitterAuthProvider.PROVIDER_ID;
// var githubAuthProviderId = firebase.auth.GithubAuthProvider.PROVIDER_ID;
 var emailAuthProviderId =firebase.auth.EmailAuthProvider.PROVIDER_ID

var firebaseRef = firebase.database().ref();

module.exports = {
  firebaseAuth,
  firebaseRef,
  googleAuthProviderId,
  phoneAuthProviderID,
  facebookAuthProviderId,
  emailAuthProviderId,
  twitterAuthProviderId,
  // githubAuthProviderId
};
