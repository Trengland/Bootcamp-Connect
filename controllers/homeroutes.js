const express = require('express');
const router = express.Router();





router.get("/", async (req, res)=> {
  console.log("render homepage")
  res.render("homepage")
})





module.exports = router;