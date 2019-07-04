import Parse from 'parse';

async function login(username, password) {
  try {
    const user = await Parse.User.logIn(username, password);
    if (user) return user;
  } catch (e) {
    return e;
  }
}

async function signUp(email, password) {
  try {
    const user = new Parse.User();
    user.set('username', email);
    user.set('password', password);
    const newUser = await user.signUp();
    if (newUser) return newUser;
  } catch (e) {
    return e;
  }
}

function resetPassword(resetEmail) {
  Parse.User.requestPasswordReset(resetEmail)
    .then(console.log('Reset email sent'))
    .catch(e => console.log(`Error: ${e.code} ${e.message}`));
}

function logout() {
  Parse.User.logOut().then(() => {
    const nullUser = Parse.User.current(); // Will be null
    return nullUser;
  });
}

async function fbLogin() {
  try {
    const user = await Parse.FacebookUtils.logIn();
    if (!user.existed()) {
      console.log('User signed up and logged in through Facebook!');
      return user;
    } else {
      console.log('User logged in through Facebook!');
      return user;
    }
  } catch (error) {
    console.log('User cancelled the Facebook login or did not fully authorize.');
  }
}

function fbLogout() {
  Parse.User.logout();
  console.log('User logged out successfully');
}

export { login, signUp, resetPassword, logout, fbLogin, fbLogout };
