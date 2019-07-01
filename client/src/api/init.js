import Parse from 'parse';

export default function() {
  Parse.initialize(process.env.REACT_APP_APP_ID, process.env.REACT_APP_JS_KEY);
  Parse.serverURL = 'https://parseapi.back4app.com/';

  // Load the Facebook API asynchronous when the window starts loading
  window.fbAsyncInit = function() {
    Parse.FacebookUtils.init({
      // this line replaces FB.init({
      appId: process.env.REACT_APP_FACEBOOK_APPID, // Facebook App ID
      cookie: true, // enable cookies to allow Parse to access the session
      xfbml: true, // initialize Facebook social plugins on the page
      version: 'v3.3' // point to the latest Facebook Graph API version, found in FB's App dashboard.
    });

    // Put here code to run after the Facebook SDK is loaded.
  };

  // Include the Facebook SDK
  (function(d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js';
    fjs.parentNode.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk');
}
