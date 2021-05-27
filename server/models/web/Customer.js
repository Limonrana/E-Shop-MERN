const { Schema, model } = require('mongoose');
const jwt = require('jsonwebtoken');

const customerSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phone: {
            type: String,
            required: true,
            unique: true,
        },
        status: {
            type: Boolean,
            required: true,
            default: true
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

customerSchema.methods = {
    generateToken() {
        const token = jwt.sign(
            { 
                _id: this._id,
                name: this.name,
                email: this.email,
                phone: this.phone,
                status: this.status
            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '30d' }
        );
        return token;
    }
}

module.exports = model('Customer', customerSchema);
