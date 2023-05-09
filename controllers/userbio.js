const express = require('express');
const router = express.Router();
const withAuth = require('../utils/auth');

// Import your models here
const Bio = require('../models/bio');

// Route for getting a user's bio
router.get('/:id',withAuth, async (req, res) => {
  console.log(req.session);
  try {
    // Find the bio for the current user
    const bio = await Bio.findByPk(req.params.id);

    // Return the bio data as JSON
    console.log(bio);
    res.render('userprofile',
    {bio,
      logged_in: req.session.logged_in
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error getting bio data' });
  }
});




module.exports = router;
