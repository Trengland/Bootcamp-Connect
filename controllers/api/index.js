const express = require('express');
const router = express.Router();

// Import the route handlers for each resource
const authRoutes = require('./auth');
const indBioRoutes = require('./indbio');
const homeRoutes = require('./homeroutes');

// Mount the route handlers for each resource
router.use('/auth', authRoutes);
router.use('/indbio', indBioRoutes);
router.use('/', homeRoutes);

module.exports = router;