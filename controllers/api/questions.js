const router = require('express').Router();

const{ Bio }= require('../../models');
const withAuth = require('../../utils/auth');



router.post('/', async(req,res) =>{
  console.log(req.session);
  try {
    const bioData = await Bio.create(
    { 
      favorite_movies_or_tv_shows: req.body.tvMovies,
      favorite_songs: req.body.favSong,
      birth_day: req.body.birthDate,
      favorite_hobby: req.body.hobbies,
      favorite_quote: req.body.favQuote,
      github: req.body.gitHub,
      linkedin: req.body.linkedIn,
      user_id : req.session.user_id
    });
    console.log(bioData);

    req.session.save(() => {
      req.session.user_id = bioData.user_id;
      req.session.logged_in = true;     
    });
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
