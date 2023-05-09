const router = require('express').Router();

const{ Bio }= require('../../models');
const withAuth = require('../../utils/auth');



router.post('/',withAuth , async(req,res) =>{

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
    res.status(200).json(req.body);

  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.get('/',withAuth, async(req,res) =>{
  // console.log('ready to redner questions');
  try {

    res.render('questions',{
      logged_in: req.session.logged_in
    }
    )
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
})


module.exports = router;
