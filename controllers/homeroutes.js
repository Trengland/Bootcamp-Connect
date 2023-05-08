const express = require('express');
const router = express.Router();
const withAuth = require('../utils/auth');

// Import models here
const User = require('../models/user');
const Bio = require('../models/bio');

// Route for displaying the bio form
router.get('/bio', (req, res) => {
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

    // Save the bio to the database
    await bio.save();

    // Redirect the user to the bios page
    res.redirect('/bios');
  } catch (error) {
    console.log(error);
    res.render('bio', { title: 'Create Your Bio', error: error });
  }
});

// Route for displaying all bios
router.get('/bios', async (req, res) => {
  try {
    // Find all bios in the database
    const bios = await Bio.find().populate('user');

    // Render the bios page with the bios data
    res.render('bios', { title: 'Classmate Bios', bios: bios });
  } catch (error) {
    console.log(error);
    res.render('error', { title: 'Error', error: error });
  }
});

router.get("/", async (req, res)=> {
  console.log("render homepage")
  res.render("homepage")
})





module.exports = router;