
const router = require('express').Router();
const userRoutes = require('./userroutes');
const questionsRoutes = require('./questions')

// Import the route handlers for each resource
// const authRoutes = require('../auth');
const indBioRoutes = require('./indbio');


// Mount the route handlers for each resource
// router.use('/auth', authRoutes);
router.use('/indbio', indBioRoutes);
router.use('/users',userRoutes)
router.use('/questions',questionsRoutes)

module.exports = router;