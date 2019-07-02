import Parse from 'parse';

async function login(username, password) {
  const user = await Parse.user.logIn(username, password);
  try {
    console.log('User logged in', user);
    return user;
  } catch (e) {
    console.log(`Error: ${e.code} ${e.message}`);
  }
}

async function register(username, password, email) {
  const user = new Parse.User();
  user.set('username', username);
  user.set('password', password);
  user.set('email', email);

  const newUser = await user.signUp();
  try {
    console.log('User created', newUser);
    return newUser;
  } catch (e) {
    console.log(`Error: ${e.code} ${e.message}`);
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

export { login, register, resetPassword, logout, fbLogin, fbLogout };
