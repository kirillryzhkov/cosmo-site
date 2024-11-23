const express = require('express');
const router = express.Router();

router.get('/logout', (req, res) => {
    res.clearCookie('authToken');
    res.redirect('/auth');
});

module.exports = router;
