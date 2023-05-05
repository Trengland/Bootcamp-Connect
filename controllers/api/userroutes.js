const express = require('express');
const router = express.Router();


// Import your models here
const User = require('../../models/user');

// Route for displaying the registration page
router.get('/register', (req, res) => {
  res.render('register', { title: 'Register' });
});

// Route for handling user registration.
router.post('/register', async (req, res) => {
  try {
    // Create a new user based on the form data
    const user = new User({
      username: req.body.username,
      password: req.body.password,
    });

    // Save the user to the database
    await user.save();

    // Set session variable
    req.session.userId = user._id;

    // Redirect the user to the bio form
    res.redirect('/bio');
  } catch (error) {
    console.log(error);
    res.render('register', { title: 'Register', error: error });
  }
});

// Route for displaying the login page
router.get('/login', (req, res) => {
  res.render('login', { title: 'Log In' });
});

// Route for handling user login
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    // Check if user exists
    if (!user) {
      throw new Error('User not found');
    }

    // Check if password is correct
    if (user.password !== req.body.password) {
      throw new Error('Incorrect password');
    }

    // Set session variable
    req.session.userId = user._id;

    // Redirect the user to their profile page
    res.redirect('/profile');
  } catch (error) {
    console.log(error);
    res.render('login', { title: 'Log In', error: error });
  }
});

module.exports = router;
