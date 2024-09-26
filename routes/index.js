const express = require('express');
const router = express.Router();

// Sub-route imports
router.use('/users', require('./user'));
router.use('/events', require('./event'));
router.use('/bookings', require('./booking'));

module.exports = router;
