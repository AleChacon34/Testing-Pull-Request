const mongoose = require('mongoose');
const url = process.env.DB_URI;

const dbConnect = () => {
    mongoose.connect(
        url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    ).then((res) => {
        console.log('--CONNECTED!!--');
    }).catch((err) => {
        console.log('--CONNECTION ERROR---');
    });
}

module.exports = { dbConnect };