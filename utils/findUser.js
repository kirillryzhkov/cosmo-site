;const User = require('../models/userModels');

async function getUserById(userId) {
    try {
        const user = await User.findById(userId);
        return user;
    } catch (error) {
        console.error('Error while fetching user by id', error);
        return null;
    }   
}

module.exports = getUserById;