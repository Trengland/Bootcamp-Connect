const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeroutes');
const feedRoutes = require('./feed')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/feed', feedRoutes)

module.exports = router;