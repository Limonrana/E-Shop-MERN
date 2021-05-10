const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 32,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 32,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        minlength: 8,
        maxlength: 14,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024,
    },
}, 
{timestamps: true}
);

module.exports = model('User', userSchema);