const express = require('express');
const router = express.Router();
// Import your models here
const User = require('../../models/user');
// Route for displaying the registration page
// Route for displaying the login page
router.get('/login', (req, res) => {
  res.render('login', { title: 'Log In' });
});
router.get('/signup', (req, res) => {
  res.render('signup', { title: 'Log In' });
});

router.post('/signup', async(req,res) =>{

  // console.log(req.body);


  try {
    const userData = await User.create(
    { name: req.body.name,
      email: req.body.email,
      password: req.body.password}
    );

    // console.log(userData.id);


    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;  
      res.status(200).json(userData);  
    });

    // res.redirect('/api/questions') 

  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
})

// Route for handling user login
router.post('/login', async (req, res) => {
  console.log(req.body.email);
  try {
    const userData = await User.findOne({ 
      where: {
        email : req.body.email
      }
    });

    // Check if user exists
    if (!userData) {
      throw new Error('User not found');
    }

    // Check if password is correct
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Set session variable
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (error) {
    console.log(error);
    res.render('login', { title: 'Log In', error: error });
  }
});

module.exports = router;

