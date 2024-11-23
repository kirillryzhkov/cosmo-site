const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/isAuthenticated');

router.get('/profile', checkAuth, (req, res) => {
    res.render('profile');
});

module.exports = router;