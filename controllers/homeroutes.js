const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage', { loggedIn: req.session.logged_in });
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/createaccount', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('createaccount');
});

module.exports = router;
