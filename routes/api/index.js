const router = require('express').Router();
const videoRoutes = require('./videoRoutes');
const userRoutes = require('./userRoutes');

//http://localhost:3001/api/videos
router.use('/videos', videoRoutes);

//http://localhost:3001/api/users
router.use('/users', userRoutes);

module.exports = router;
