const express = require('express');
const router = express.Router();
const withAuth = require('../../utils/auth');

// Import your models here
const Bio = require('../../models/bio');

// Route for getting a user's bio
router.get('/:id',withAuth, async (req, res) => {
  console.log(req.params.id);
  try {
    // Find the bio for the current user
    const bio = await Bio.findByPk(req.params.id);

    // Return the bio data as JSON
    console.log(bio);
    res.render('peerprofile',
    {bio,
      logged_in: req.session.logged_in
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error getting bio data' });
  }
});


// Route for updating a user's bio
router.put('/bio/:id',withAuth, async (req, res) => {
  try {
    // Find the bio for the current user
    const bio = await Bio.findOne({ user: req.user._id });

    // Update the bio fields based on the request body
    bio.user_id = req.body.user_id;
    bio.zodiac_sign = req.body.zodiac_sign;
    bio.favorite_quote = req.body.favorite_quote;
    bio.linkedin = req.body.linkedin;
    bio.github = req.body.github;
    bio.favorite_movies_or_tv_shows = req.body.favorite_movies_or_tv_shows;
    bio.favorite_songs = req.body.favorite_songs;
    bio.favorite_hobby = req.body.favorite_hobby;


    // Return the updated bio data as JSON
    res.json(bio); 
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error creating your personal bio' });
  }
});

// Route for deleting a user's bio
router.delete('/bio/:id',withAuth, async (req, res) => {
  try {
    // Find the bio for the current user
    const bio = await Bio.findOne({ user: req.user._id });

    // Delete the bio from the database
    await bio.delete();

    // Return a success message as JSON
    res.json({ message: 'Bio deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error deleting bio data' });
  }
});

module.exports = router;
