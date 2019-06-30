const Parse = require('parse/node');

/* ############### SIGN UP ############### */
exports.signUp = async function (req, res) {
  const user = new Parse.User();
  user.set('username', req.body.username);
  user.set('password', req.body.password);
  user.set('email', req.body.username);

  const newUser = await user.signUp();
  try {
    console.log('new user', newUser);
    res.json(newUser);
  } catch (e) {
    console.log('error', e);
  }
};

/* ############### LOGIN ############### */
exports.login = async function (req, res) {
  // Create a new instance of the user class
  const user = await Parse.User.logIn(req.body.username, req.body.password);

  try {
    console.log(`User logged in: ${user.get('fullname')}`);
    res.json(user);
  } catch (e) {
    console.log(e);
  }
};

/* ############### RESET PASSWORD ############### */
exports.resetPassword = async function (req, res) {
  const user = await Parse.User.requestPasswordReset('req.body.email');
  try {
    console.log(`A reset email has been sent to ${user}`);
  } catch (e) {
    console.log(e);
  }
};
