const mongoose = require('mongoose');
const url = 'mongodb+srv://AleChacon:FKq0uYuWzslgPoZY@cluster0.qro7h2s.mongodb.net/testing?retryWrites=true'

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