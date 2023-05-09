
const router = require('express').Router();
const userRoutes = require('./userroutes');
const questionsRoutes = require('./questions')

// Import the route handlers for each resource



// Mount the route handlers for each resource

router.use('/users',userRoutes)
router.use('/questions',questionsRoutes)

module.exports = router;