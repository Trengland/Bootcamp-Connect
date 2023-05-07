const router = require('express').Router();

const{ Bio }= require('../models');



router.get("/feed", async (req, res)=> {
    const peerData = await Bio.findAll(

    )
    console.log(peerData)
    res.render("feed")
  })


module.exports = router;