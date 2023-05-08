const router = require('express').Router();
const withAuth = require('../utils/auth');
const{ Bio }= require('../models');




router.get("/", async (req, res)=> {
  console.log('feed ready');
    // const peerData = await Bio.findAll(


    // )
    // console.log(peerData)
    // res.render("feed")
  })


module.exports = router;