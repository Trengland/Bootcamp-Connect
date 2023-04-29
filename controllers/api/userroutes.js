const router = require('express').Router();
const { Users } = require('../../models');


 //create a new user/account
 router.post('/', async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const userData = await User.create({ username, email, password });
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.save(() => {
        res.status(201).json({
          message: 'User created successfully',
          user: userData
        });
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: 'There was an error while creating the user'
      });
    }
  });



//login for existing user
router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const userData = await User.findOne({ where: { email } });
  
      if (!userData) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }
  
      const isValidPassword = await userData.checkPassword(password);
  
      if (!isValidPassword) {
        return res.status(401).json({ error: 'Invalid email or password' });
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
        res.status(200).json({ message: 'Logout successful' });
      });
    } else {
      res.status(401).json({ error: 'You are not logged in' });
    }
  });
