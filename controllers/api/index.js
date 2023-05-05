
const router = require('express').Router();
const userRoutes = require('./userRoutes');


// Import the route handlers for each resource
// const authRoutes = require('../auth');
const indBioRoutes = require('./indBio');


// Mount the route handlers for each resource
// router.use('/auth', authRoutes);
router.use('/indbio', indBioRoutes);
router.use('/users',userRoutes)

module.exports = router;