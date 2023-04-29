const router = require('express').Router();
const userRoutes = require('./user');
const playlistRoutes = require('./playlist');

router.use('/users', userRoutes);
router.use('/playlists', playlistRoutes);

module.exports = router;