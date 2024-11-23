const User = require('../models/userModels');
const bcrypt = require('bcryptjs');


async function createUser(username, password, email, age) {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            password: hashedPassword,
            email,
            age,
            role: 'user',
        });

        await newUser.save();
        console.log("Created");
    } catch (error) {
        console.error("err!", error);
    }
}

module.exports = {
    createUser,
};