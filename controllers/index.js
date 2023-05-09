const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeroutes');
const feedRoutes = require('./feed')
const indBioRoutes = require('./indbio');
const userBioRoutes = require('./userbio');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/feed', feedRoutes)
router.use('/indbio', indBioRoutes);
router.use('/userbio', userBioRoutes);

module.exports = router;