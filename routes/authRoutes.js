const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModels');

const createAuthToken = (userId, username, email) => {
    return jwt.sign({ userId, username, email }, 'zxc');
};

router.post('/auth', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(404).send('User not found');
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return res.status(401).send('Invalid password');
    }

    const token = createAuthToken(user._id, user.username, user.email);
    res.cookie('authToken', token);
    res.redirect('/profile');
});

router.get('/api/current_user', (req, res) => {
    const token = req.cookies.authToken;
    if (!token) {
        return res.status(401).send('Unauthorized');
    }
    const decoded = jwt.verify(token, 'zxc');
    const { userId, username, email } = decoded;
    res.json({ userId, username, email });
})

router.get('/auth', (req, res) => {
    if (req.cookies.authToken) {
        return res.redirect('/profile');
    }
    res.render('auth');
});


module.exports = router;