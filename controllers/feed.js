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

    console.log(bioData[0])
    // bioData[0].user.name
    // Serialize data so the template can read it
    // const peerbios = bioData.map((bio) => bio.get({ plain: true }));
    // console.log("+++++++++++++++++++++++++++++++++++++++++++")
    // console.log(peerbios)
    // // Pass serialized data and session flag into template
    // res.render('homepage', { 
    //   p, 
    //   logged_in: req.session.logged_in 
    // });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
  })


module.exports = router;