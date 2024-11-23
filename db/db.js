function conection() {
    const mongoose = require('mongoose');
    mongoose.connect('mongodb+srv://shpek616:<123123123456e>@cluster0.y3pk1.mongodb.net/',
        {}
    );

    mongoose.connection.on('connected', () => {
        console.log('connected');
    });

    mongoose.connection.on('error', (err) => {
        console.log('not connected');
    });
}



module.exports = { conection };
