const { Schema, model } = require('mongoose');
const jwt = require('jsonwebtoken');

const adminSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phone: {
            type: String,
            required: true,
            unique: true
        },
        status: {
            type: Boolean,
            required: true,
            default: true
        },
        role: {
            type: String,
            required: true,
            default: 'Editor'
        },
        password: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
    }
);

adminSchema.methods = {
    generateToken() {
        const token = jwt.sign(
            { 
                _id: this._id,
                name: this.name,
                email: this.email,
                phone: this.phone,
                status: this.status,
                role: this.role
            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '3h' }
        );
        return token;
    }
}

module.exports = model('Admin', adminSchema);
