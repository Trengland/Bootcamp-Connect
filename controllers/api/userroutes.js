const router = require('express').Router();
const { Users } = require('../../models');


 //create a new user/account
 router.post('/', async (req, res) => {
    try {
      const { username, email, password } = req.body; // do i only need Username here since it IS the email?
      const userData = await User.create({ username, email, password }); // do i include all details here? (birthday, movies, hobbies, etc.?)
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.save(() => {
        res.status(201).json({
          message: 'Account Created Successfully',
          user: userData
        });
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: 'There was an error while creating the account'
      });
    }
  });


//login for existing user
router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body; // username instead of email?
      const userData = await User.findOne({ where: { email } });
  
      if (!userData) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }
  
      const isValidPassword = await userData.checkPassword(password);
  
      if (!isValidPassword) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }
  
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.save(() => {
        res.status(200).json({ message: 'Login successful' });
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  


 //log out
 router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(200).json({ message: 'Logged Out. Come Back Soon!' });
      });
    } else {
      res.status(401).json({ error: 'You are not logged in' });
    }
  });
