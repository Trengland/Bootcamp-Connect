const express = require('express');
const router = express.Router();
const withAuth = require('../utils/auth');

// Import models here
const User = require('../models/user');
const Bio = require('../models/bio');

// Route for displaying the bio form
router.get('/bio',withAuth , (req, res) => {
  res.render('bio', { title: 'Create Your Bio' });
});

// Route for handling the bio form submission.
router.post('/bio', async (req, res) => {
  try {
    // Find the user by their ID
    const user = await User.findById(req.session.userId);

    // Create a new bio based on the form data
    const bio = new Bio({
      zodiac_sign: req.body.zodiac_sign,
      favorite_quote: req.body.favorite_quote,
      linkedin: req.body.linkedin,
      github: req.body.github,
      favorite_movies_or_tv_shows: req.body.favorite_movies_or_tv_shows,
      favorite_songs: req.body.favorite_songs,
      favorite_hobby: req.body.favorite_hobby,
      user: user._id,
    });


    // Redirect the user to the bios page
    res.redirect('/bios',{
      logged_in: req.session.logged_in
    }
    );
  } catch (error) {
    console.log(error);
    res.render('bio', { title: 'Create Your Bio', error: error });
  }
});


router.get("/", async (req, res)=> {
  console.log("render homepage")
  res.render("homepage")
})





module.exports = router;