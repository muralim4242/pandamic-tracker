var firebase = require('firebase').default;

try {
  var firebaseConfig = {
    apiKey: "AIzaSyAIbE8jDyVy7PDi03XoLtbLyB__knkp6Z0",
    authDomain: "pandamic-tracker-3a504.firebaseapp.com",
    projectId: "pandamic-tracker-3a504",
    storageBucket: "pandamic-tracker-3a504.appspot.com",
    messagingSenderId: "127365444454",
    appId: "1:127365444454:web:3b010228a026c2e8850ea7",
    measurementId: "G-GL45KPT2FE"
  };
  firebase.initializeApp(firebaseConfig);
} catch (e) {
  console.log(e);
}

var firebaseAuth = firebase.auth();
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
