const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user');


// Use the LocalStrategy to authenticate users based on email and password
passport.use(new LocalStrategy(
  {
    usernameField: 'email'
  },
  async (email, password, done) => {
    try {
      // Find the user associated with the email address
      const user = await User.findOne({ email: email });
      if (!user) {
        return done(null, false, { message: 'Incorrect email.' });
      }
      // Check that the password is correct
      const isMatch = await user.checkPassword(password);
      if (!isMatch) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      // If the email and password are correct, return the user object
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));


// Serialize and deserialize the user object
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

module.exports = passport;