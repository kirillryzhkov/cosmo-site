const express = require('express');
const router = express.Router();
const createUser = require('../controllers/userController');

router.post('/register', (req, res) => {
    createUser.createUser(
        req.body.username,
        req.body.password,
        req.body.email,
        req.body.age
    );
});

router.get('/register', (req, res) => {
    res.render('register');
});

module.exports = router;