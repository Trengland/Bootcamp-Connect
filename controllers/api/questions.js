const router = require('express').Router();

const{ Bio }= require('../../models');
const withAuth = require('../../utils/auth');



router.post('/', async(req,res) =>{
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
    res.status(200).json(bioData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.get('/',withAuth, async(req,res) =>{
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
