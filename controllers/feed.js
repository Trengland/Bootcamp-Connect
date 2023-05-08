const router = require('express').Router();
const withAuth = require('../utils/auth');
const{ Bio,User }= require('../models');




router.get("/", async (req, res)=> {
  console.log('feed ready');
  try {
    // Get all projects and JOIN with user data
    const bioData = await Bio.findAll({
      include: [
        {
          model: User,
          attributes: ['name']
        },
      ],
    });

    // console.log(bioData)
    // bioData[0].user.name
    // Serialize data so the template can read it
    const peerBios = bioData.map((bio) => bio.get({ plain: true }));
    // console.log("+++++++++++++++++++++++++++++++++++++++++++")
    console.log(peerBios[0])
    // Pass serialized data and session flag into template
    res.render('feed', { 
      peerBios, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
  })


module.exports = router;