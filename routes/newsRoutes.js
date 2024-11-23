const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const News = require('../models/newsModels');
const User = require('../models/userModels');

router.post('/add-news', async (req, res) => {
    try {
        const token = req.cookies.authToken;
        if (!token) {
            return res.status(401).send('Unauthorized');
    }
    const decoded = jwt.verify(token, 'zxc');
    const { userId } = decoded;
    const { title, content, imageUrl } = req.body;
    const newNews = new News({ title, content, imageUrl, user: userId });
    await newNews.save();

    const adminUser = await User.findById(userId);
    adminUser.newCount += 1;
    await adminUser.save();

    res.status(200).send('News added successfully');
    } catch (error) {
        console.error('Error adding news:', error);
        res.status(500).send('Server error');
    }
});

router.get('/api/news', async (req, res) => {
    try{
        const newsList = await News.find();
        res.status(200).send(newsList); 
    } catch (error) {
        console.error('Error fetching news', error);
        res.status(500).send('Internal server error');
    }
    
});

module.exports = router;    