const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        userName: {
            type: String
        },
        email: {
            type: String
        },
        password: {
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = userSchema;