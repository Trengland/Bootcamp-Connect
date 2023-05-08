const router = require('express').Router();

const{ Bio }= require('../../models');



router.post('/', async(req,res) =>{
  console.log('ready to post');
  try {
    // const bioData = await Bio.create(
    // { 
    //   favorite_movies_or_tv_shows:"",
    //   favorite_songs:"",
    //   birth_day:"",
    //   favorite_hobby:"",
    //   favorite_quote:"",
    //   github:"",
    //   user_id: ""
    // });
    // console.log(bioData);

    // req.session.save(() => {
    //   req.session.user_id = userData.id;
    //   req.session.logged_in = true;     
    // });
    res.redirect('/feed')
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.get('/', async(req,res) =>{
  // console.log('ready to redner questions');
  try {

    // req.session.save(() => {
    //   req.session.user_id = userData.id;
    //   req.session.logged_in = true;     
    // });
    res.render('questions')
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
})


module.exports = router;
