const router = require('express').Router();
const userRoutes = require('./userroutes');
const indBio = require('./indbio');

router.use('/users', userRoutes);
router.use('/indbio', indBio);

module.exports = router;