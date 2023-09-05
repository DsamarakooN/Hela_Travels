const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
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
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            default: 'user',
            enum: ['user', 'business' , 'admin']
        },
        businessType: {
            type: String
        },
  
    },
    {
        timestamps: true
    }
)

module.exports = User = mongoose.model('users', UserSchema)