const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: false },
    password: { type: String, required: false },
    email: { type: String, required: false },
    age: Number,

    role: {type: String, enum: ['guest', 'user', 'admin'], default: 'guest'},
    newCount : {type: Number, default: 0},
});

const User = mongoose.model('User', userSchema);

module.exports = User;