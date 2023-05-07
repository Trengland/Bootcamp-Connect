const router = require('express').Router();

const{ Bio }= require('../../models');



router.post('/', async(req,res) =>{
  try {
    const bioData = await Bio.create(
    { 
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    console.log(bioData);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;     
    });
    res.redirect('/feed') 
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
})


module.exports = router;
