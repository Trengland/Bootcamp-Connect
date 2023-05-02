const router = require('express').Router();
const userRoutes = require('./user');
const indBio = require('./bio');

router.use('/users', userRoutes);
router.use('/indbio', indBio);

module.exports = router;