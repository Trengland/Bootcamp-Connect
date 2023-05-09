const router = require('express').Router();
const withAuth = require('../utils/auth');
const{ Bio,User }= require('../models');





router.get("/",withAuth, async (req, res)=> {
  console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
  console.log(req.session.user_id);
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>');
  try {
    // Get all projects and JOIN with user data
    const bioData = await Bio.findAll({
      include: [
        {
          model: User,
          attributes: ['name','id']
        },
      ],
    });

    // console.log(bioData)
    // Serialize data so the template can read it
    const peerBios = bioData.map((bio) => bio.get({ plain: true }));
    // console.log(peerBios[0])
    // Pass serialized data and session flag into template
    res.render('feed', { 
      peerBios, 
      logged_in: req.session.logged_in,
      id_user: req.session.user_id
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
  })


module.exports = router;